import * as React from "react";

function Cards() {
  return (
    <div className="flex bg-secondary flex-col px-5">
      <div className="self-center text-white text-6xl font-medium tracking-tighter text-center bg-clip-text leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
        Things users love
        <br />
        about X-ACK
      </div>
      <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-px w-full rounded-3xl max-md:mt-8 max-md:max-w-full">
              <div className="flex flex-col items-start pt-9 pr-20 pb-20 pl-8 rounded-3xl max-md:px-5 max-md:max-w-full bg-gradient-to-b from-customgradient to-black">
                <div className="text-xl font-semibold tracking-tight leading-8 text-zinc-100 max-md:max-w-full">
                  Users appreciate X-ACK's intuitive interface
                </div>
                <div className="mt-5 mb-44 text-base tracking-tight leading-6 text-zinc-100 text-opacity-60 max-md:mb-10 max-md:max-w-full">
                  An intuitive interface means that users can quickly understand
                  how to
                  <br />
                  use the platform without the need for extensive training or
                  guidance.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-px w-full rounded-3xl max-md:mt-8 max-md:max-w-full">
              <div className="flex flex-col items-start pt-9 pr-16 pb-20 pl-8 rounded-3xl max-md:px-5 max-md:max-w-full bg-gradient-to-b from-customgradient to-black">
                <div className="text-xl font-semibold tracking-tight leading-8 text-zinc-100">
                  Robust Learning Tools
                </div>
                <div className="mt-5 mb-44 text-base tracking-tight leading-6 text-zinc-100 text-opacity-60 max-md:mb-10">
                  Something about our learning tools and features goes here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-px w-full rounded-3xl max-md:mt-8">
              <div className="flex flex-col items-start pt-9 pr-16 pb-20 pl-8 rounded-3xl max-md:px-5 bg-gradient-to-b from-customgradient to-black">
                <div className="text-xl font-semibold tracking-tight leading-8 text-zinc-100">
                  Flexiable Difficulty
                </div>
                <div className="mt-4 mb-32 text-base tracking-tight leading-6 text-zinc-100 text-opacity-60 max-md:mb-10">
                  We have sophistically designed machines for all beginner to
                  advance level players
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-px w-full rounded-3xl max-md:mt-8">
              <div className="flex flex-col justify-end items-start pt-20 pr-16 pb-8 pl-8 rounded-3xl max-md:px-5 bg-gradient-to-b from-customgradient to-black">
                <div className="mt-52 text-xl font-semibold tracking-tight leading-8 text-zinc-100 max-md:mt-10">
                  Community
                </div>
                <div className="mt-5 text-base tracking-tight leading-6 text-zinc-100 text-opacity-60">
                  We fostered a nurturing community ...some more 1 line about
                  community
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-px w-full rounded-3xl max-md:mt-8">
              <div className="flex flex-col px-8 pt-9 pb-20 rounded-3xl max-md:px-5 bg-gradient-to-b from-customgradient to-black">
                <div className="text-xl font-semibold tracking-tight leading-8 text-zinc-100">
                  Gamified UI elements
                </div>
                <div className="mt-6 mb-32 text-base tracking-tight leading-6 text-zinc-100 text-opacity-60 max-md:mb-10">
                  Info about earning badges and respect from players and
                  machines. Gamified features
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;