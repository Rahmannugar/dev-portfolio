import React from "react";
import Spense from "../images/Spense.png";
import YelpCamp from "../images/YelpCamp.png";

const ImageSection = () => {
  return (
    <div className="py-16">
      <div className="md:flex md:px-16 md:space-x-10 lg:space-x-16">
        <div className="px-4 sm:px-10 md:px-0">
          <img src={Spense} alt="Spense" className="h-3/4 w-screen" />
          <a href="/" className="flex">
            <h1 className="py-5 duration-300 font-extrabold text-3xl md:text-2xl lg:text-5xl hover:text-yellow-300">
              Spense.com
            </h1>
            <svg
              className="lg:mt-9 ml-3 mt-7"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="white"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </a>
          <p className="text-neutral-300 font-medium text-lg md:text-base">
            Rethinking the way writers get paid, an open-source platform
            designed to help writers focus more on writing, and less on when and{" "}
            <em>how</em>
            they'll get paid. Project in collaboration with Codewell.cc
          </p>
        </div>

        <div className="px-4 sm:px-10 md:px-0 py-7 md:py-0">
          <img src={YelpCamp} alt="YelpCamp" className="h-3/4 w-screen" />
          <a href="/" className="flex">
            <h1 className="  py-5 duration-300 font-extrabold text-3xl md:text-2xl lg:text-5xl hover:text-yellow-300">
              YelpCamp.com
            </h1>
            <svg
              className="lg:mt-9 ml-3 mt-7"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="white"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </a>
          <p className=" text-neutral-300 font-medium text-lg md:text-base">
            Allowing backpack travelers to perfectly plan their trip through an
            open-source platform similar to TripAdvisor. With over 1m MAU,
            YelpCamp has been the crowd's favorite in 2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
