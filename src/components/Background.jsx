import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, GradientTexture } from "@react-three/drei";

const NeonOrb = ({ color, position, size }) => {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.25;
    ref.current.rotation.y += delta * 0.35;
  });

  return (
    <mesh ref={ref} position={position} castShadow>
      <icosahedronGeometry args={[size, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1}
        metalness={0.4}
        roughness={0.1}
        toneMapped={false}
      />
    </mesh>
  );
};

const Ribbon = () => {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.4;
  });

  return (
    <mesh
      ref={ref}
      position={[0, -0.2, -1]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[10, 2.8, 1]}
    >
      <planeGeometry args={[1, 1, 64, 64]} />
      <meshStandardMaterial
        color="#0ea5e9"
        metalness={0.6}
        roughness={0.2}
        transparent
        opacity={0.16}
      />
    </mesh>
  );
};

const ParticleField = () => {
  const ref = useRef();
  const particles = useMemo(() => {
    const count = 1200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30;
      positions[i + 1] = (Math.random() - 0.5) * 18;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref} rotation={[0, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#c4b5fd"
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </points>
  );
};

const LightPlane = () => (
  <mesh position={[0, -5, -5]} rotation={[-Math.PI / 2, 0, 0]}>
    <planeGeometry args={[50, 50]} />
    <meshBasicMaterial transparent opacity={0.8}>
      <GradientTexture
        stops={[0, 0.5, 1]}
        colors={["#020617", "#0f172a", "#020617"]}
        size={1024}
      />
    </meshBasicMaterial>
  </mesh>
);

const Scene = () => (
  <>
    <color attach="background" args={["#020617"]} />
    <ambientLight intensity={0.45} />
    <directionalLight
      position={[6, 6, 10]}
      intensity={1.2}
      color="#fb7185"
    />
    <directionalLight position={[-4, 2, 5]} intensity={0.6} color="#38bdf8" />

    <Float speed={1} floatIntensity={2} rotationIntensity={1.2}>
      <NeonOrb color="#fb7185" position={[-3, -0.4, 1]} size={1.6} />
    </Float>
    <Float speed={1.8} floatIntensity={1.8} rotationIntensity={0.8}>
      <NeonOrb color="#38bdf8" position={[2.5, 1.2, -0.4]} size={1.2} />
    </Float>
    <Float speed={1.2} floatIntensity={1.4} rotationIntensity={0.9}>
      <mesh position={[0.4, -2, 0]}>
        <torusKnotGeometry args={[0.9, 0.18, 220, 48]} />
        <meshStandardMaterial
          color="#fcd34d"
          emissive="#fbbf24"
          emissiveIntensity={0.8}
          metalness={0.5}
          roughness={0.15}
          toneMapped={false}
        />
      </mesh>
    </Float>

    <Ribbon />
    <ParticleField />
    <LightPlane />
  </>
);

const Background = ({ children }) => (
  <div className="relative min-h-screen bg-[#030617] text-white">
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 14], fov: 55 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#38bdf822,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#fb718533,transparent_45%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(-120deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030617]/40 to-[#01030b]" />
    </div>

    <div className="relative z-10">{children}</div>
  </div>
);

export default Background;
