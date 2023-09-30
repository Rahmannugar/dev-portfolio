import React from "react";

const MiddleSection = () => {
  return (
    <div
      className="px-5 py-10 md:flex md:space-x-10 lg:px-20 lg:space-x-16"
      id="middle"
    >
      <div>
        <h1 className="font-extrabold text-4xl md:text-3xl lg:text-4xl">
          A co-founder at one of the world's largest communities.
        </h1>
        <p className="py-5 font-thin text-neutral-300 text-xl md:text-base lg:text-lg">
          The combined experience I have working at the top Fortune 500
          companies has allowed me to develop a skillset that helps me in not
          just development, but in every aspect of any business.
          <br />
          <br />
          I'm proud to announce that i am now working at one of the world's
          largest communities teaching young minds about how to <em>
            sell
          </em>{" "}
          yourself as a developer and open them to a whole new world of
          opportunities.
        </p>
      </div>

      <p className="py-5 font-thin text-neutral-300 text-xl md:text-base lg:text-lg">
        As a developer, you have everything available to you and all that's
        holding you back is yourself.
        <br />
        <br />
        A quote I live by perfectly illustrates what I mean.
        <br />
        <br />
        "How big would you dream, if you <strong>knew</strong> you wouldn't
        fail?" You've already gone through the hardest parts being a developer,
        it's time to elevate your skills and become a leader in something you're
        passionate about.
        <br />
        <br />
        I'm happy to chat over coffee some time about how I can help your
        company.
      </p>
    </div>
  );
};

export default MiddleSection;
