import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Background from "./components/Background";

function App() {
  return (
    <Background>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </Background>
  );
}

export default App;
