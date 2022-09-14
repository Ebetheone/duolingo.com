import React from "react";

const World = () => {
  return (
    <div className="w-[80%] mx-auto flex items-center pt-[250px] gap-[20px]">
      <div className="flex flex-[1]">
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/331a32943ff73be28537dfc7469d5639.svg"
          alt="earth"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-[2]">
        <div className="flex flex-col gap-[10px]">
          <div className="text-[rgb(255,255,255)] text-[32px] font-[700] leading-[40px] mb-[50px] text-center w-full">
            The free, fun, and effective way to learn a language!
          </div>
          <div className="w-full flex items-center justify-center text-white">
            <button className="rounded-[16px] border-b-[4px] border-b-solid border-b-[rgba(0,0,0,0.3)] cursor-pointer text-[16px] font-[700] py-[17px] leading-[18px] min-w-[320px] px-4 text-center uppercase bg-[rgb(88,167,0)] outline-none hover:bg-[rgb(88,204,2)]">
              Get started
            </button>
          </div>
          <div className="w-full flex items-center justify-center text-white">
            <button className="rounded-[16px] border-b-[4px] border-t-[2px] border-r-[2px] border-l-[2px] border-solid border-[rgba(0,0,0,0.3)] cursor-pointer text-[16px] font-[700] py-[17px] leading-[18px] min-w-[320px] px-4 text-center uppercase bg-transparents outline-none hover:bg-[#174c78]">
              I ALREADY HAVE AN ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default World;
