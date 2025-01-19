import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen 
                 bg-gradient-to-r from-[#0a192f] via-[#0f2a40] to-[#0a192f]
                 flex justify-center items-center p-4 text-gray-300"
    >
      <form
        method="POST"
        action="https://getform.io/f/cdd145f4-6a41-48e4-959f-14cd252cf7f4"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
            Contact
          </p>
          {/* Volitelná doplňující věta o kontaktu */}
          <p className="py-4">
            {/* // Submit the form below or shoot me an email */}
            // Let me know how I can help or just say hi!
          </p>
        </div>

        {/* Pole pro jméno */}
        <input
          className="p-2 bg-[#ccd6f6] text-gray-900"
          type="text"
          placeholder="Name"
          name="name"
        />

        {/* Pole pro e-mail */}
        <input
          className="my-4 p-2 bg-[#ccd6f6] text-gray-900"
          type="email"
          placeholder="Email"
          name="email"
        />

        {/* Textarea pro zprávu */}
        <textarea
          className="bg-[#ccd6f6] p-2 text-gray-900"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>

        {/* Tlačítko odeslání */}
        <button
          className="text-white border-2 hover:bg-yellow-400 hover:border-yellow-400 
                     px-4 py-3 my-8 mx-auto flex items-center
                     transition-colors duration-300"
        >
          Send it!
        </button>
      </form>
    </div>
  );
};

export default Contact;
