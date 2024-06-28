import * as React from "react";

 function Xack() {
  return (
    <div className="flex bg-black flex-col items-center    ">
      <div className="flex flex-col justify-center self-stretch px-10 py-4 w-full text-sm font-medium text-white border-b border-solid bg-zinc-950 border-zinc-900 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 items-center w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto self-stretch my-auto text-2xl">X- ACK</div>
          <div className="flex gap-5 align-center justify-between self-stretch my-auto tracking-normal leading-[171%] max-md:flex-wrap">
            <div className="flex gap-5">
              <div>About Us</div>
              <img
                loading="lazy"
                src="../../src/assets/image.png"
                className="w-5"
              />
            </div>
            <div className="flex gap-2 whitespace-nowrap">
              <div className="grow">Community</div>
              <img
                loading="lazy"
                src="../../src/assets/image.png"
                className=" w-5 "
              />
            </div>
            <div className="flex gap-2 whitespace-nowrap">
              <div>Blog</div>
              <img
                loading="lazy"
                src="../../src/assets/image.png"
                className="w-5"
              />
            </div>
            <div className="flex gap-2 whitespace-nowrap">
              <div className="grow">Contact</div>
              <img
                loading="lazy"
                src="../../src/assets/image.png"
                className="w-5"
              />
            </div>
            <div className="flex gap-2.5 whitespace-nowrap">
              <div>Other</div>
              <img
                loading="lazy"
                src="../../src/assets/image.png"
                className="w-5"
              />
            </div>
          </div>
          <div className="flex gap-4 self-stretch leading-[143%]">
            <div className="my-auto">Log in</div>
            <div className="my-auto">Sign up</div>
           
          </div>
        </div>
      </div>
      
    </div>
  );
}


export default Xack;