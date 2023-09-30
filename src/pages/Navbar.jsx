import React, { useState } from "react";

const Navbar = () => {
  const [hidden, setHidden] = useState(true);
  let Links = [
    { id: 0, name: "Articles", link: "/" },
    { id: 1, name: "Chat", link: "/" },
    { id: 2, name: "Awards", link: "/" },
    { id: 3, name: "About", link: "/" },
  ];

  const hideBar = () => {
    setHidden(!hidden);
  };
  return (
    <nav className={`w-screen py-3 ${hidden ? `h-auto` : "h-screen"}`}>
      <div className="py-4 md:px-2 px-4 md:flex items-center justify-between">
        <div className="cursor-pointer flex items-center">
          <a href="/">
            <h1 className=" font-semibold text-lg text-gray-200 duration-300 hover:text-yellow-300  md:ml-20">
              Johnathan Specter
            </h1>
          </a>
        </div>
        <div
          className="absolute right-8 cursor-pointer top-8 md:hidden"
          onClick={hideBar}
        >
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 4H0V0H24V4ZM24 8H0V12H24V8ZM24 16H0V20H24V16Z"
              fill="white"
            />
          </svg>
        </div>
        <ul
          className={`text-gray-300 font-thin absolute md:mt-0 text-sm md:flex md:items-center md:space-x-10  w-full md:w-auto pt-5 md:pt-0 transition-all duration-500 ease-in ${
            hidden ? "top-[-480px]" : "top-20 mt-5"
          } md:top-auto md:relative`}
        >
          {Links.map((link) => (
            <li
              key={link.id}
              className="md:my-0 my-7 hover:text-yellow-300 duration-300"
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button
          className={`bg-yellow-300 absolute text-black px-3 py-2 md:px-5 md:py-3 font-semibold md:mr-20 hover:bg-yellow-700 duration-300 md:mt-0 ${
            hidden ? "top-[-480px]" : "top-20 mt-3"
          } md:top-auto md:relative`}
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
