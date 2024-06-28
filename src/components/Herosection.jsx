import * as React from "react";

function Herosection() {
  return (
    <div className="flex bg-secondary flex-col">
      <style>
        {`
          .hover\:shadow-glow:hover {
            @apply shadow-glow;
          }
          .shadow-glow {
            box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.75);
          }
        `}
      </style>
      <div className="z-10 px-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="../../src/assets/left.png"
              className="shrink-0 max-w-full aspect-[1.03] w-[315px] max-md:mt-8"
              alt="Left"
            />
          </div>
          <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center mt-32 font-medium max-md:mt-10 max-md:max-w-full">
              <div className="flex justify-center items-center self-stretch px-16 py-14 text-7xl tracking-tighter text-center leading-[80.24px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
                <div className="bg-clip-text max-md:max-w-full max-md:text-4xl text-white">
                  Most Awaited!
                </div>
              </div>
              <div className="justify-center px-2 py-3 mt-5 max-w-full text-lg tracking-tight leading-7 text-center text-zinc-100 text-opacity-60 w-[464px] max-md:max-w-full">
                A world of cyber security to learn, compete and grow. Some more
                content about what we offer will come here.
              </div>
              <div className="flex flex-col justify-center p-px mt-6 max-w-full text-base tracking-tight leading-6 shadow-sm rounded-[100px] text-zinc-100 w-[196px]">
                <div className="flex justify-center items-center rounded-[100px]">
                  <div className="flex overflow-hidden relative flex-col justify-center px-6 pb-4 w-full aspect-[4.13] max-md:px-5">
                    <div className="relative shrink-0 self-end h-px w-[68px] max-md:mr-2.5" />
                    <div className="flex relative gap-2.5 mt-4">
                      <button className="relative px-6 py-3 text-white font-semibold rounded-lg border border-white bg-transparent transition-transform transform hover:scale-105 hover:shadow-glow">
                        Get Started Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="../../src/assets/right.png"
              className="shrink-0 max-w-full aspect-[1.03] w-[315px] max-md:mt-8"
              alt="Right"
            />
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="../../src/assets/horizon.png"
        className="w-full aspect-[4] max-md:max-w-full"
        alt="Horizon"
      />
      <img
        loading="lazy"
        srcSet="../../src/assets/tab.png"
        className="z-10 self-center mt-0 max-w-full aspect-[1.69] w-[979px]"
        alt="Tab"
      />
    </div>
  );
}

export default Herosection;
