import React from "react";

const Contact = () => {
  return (
    <div className="px-5 py-10 mb-10 lg:px-20">
      <h1 className="font-extrabold text-3xl py-3 md:py-5 sm:text-4xl lg:text-5xl">
        Interesting in working with me?
      </h1>
      <p className="pb-3 md:pb-5 font-thin text-neutral-300 sm:text-lg">
        I'm active on all social media platforms listed below but you can also
        send me an email and I will get back to you within 24-48 hours.
      </p>
      <button className="bg-yellow-300 md:px-10 md:py-3 font-bold text-black px-6 py-2 hover:bg-yellow-700 duration-300">
        Get in touch
      </button>
    </div>
  );
};

export default Contact;
