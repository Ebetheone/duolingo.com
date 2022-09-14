import React, { useState } from "react";
import Data from "../../data/data3.json";
import Language from "../../data/data.json";

const Footer = () => {
  const [check, setCheck] = useState<number>(6);
  return (
    <div className="w-[55%] mx-auto h-full">
      <div className="flex w-[63%] mx-auto justify-between items-center py-28">
        <div className="font-[700] text-[32px] leading-10 text-[rgb(255,255,255)]">
          Learn a language with Duolingo.
        </div>
        <button className="bg-[rgb(88,167,0)] hover:bg-[rgb(88,204,2)] rounded-2xl box-border border-b-4 border-b-solid border-b-[rgba(0,0,0,0.4)] px-8 py-[14px] text-[rgb(255,255,255)] cursor-pointer text-base font-[700] flex justify-center items-center text-center uppercase">
          GET STARTED
        </button>
      </div>
      <div className="w-full grid grid-cols-5 pb-24 border-b-2 border-b-solid border-b-[rgba(255,255,255,0.2)]">
        {Data.map((item) => (
          <div key={item.id} className="flex flex-col w-full gap-3">
            <div className="w-full mb-[6px] text-[20px] font-[700] transform-none text-[rgb(255,255,255)] leading-5 text-left">
              {item.title}
            </div>
            {item.submenu.map((list, index) => (
              <a
                href={`/${list.title}`}
                className={
                  check === item.id
                    ? "w-full mb-[6px] text-[20px] font-[700] transform-none text-[rgb(255,255,255)] leading-5 text-left"
                    : "decoration-none text-[rgb(255,255,255)] cursor-pointer text-base font-[700] leading-[22.5px] opacity-[0.5] text-left hover:underline"
                }
                key={index}
              >
                {list.title}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="w-[90%] mx-auto pt-8 pb-12 flex flex-col gap-[10px]">
        <div className="text-[16px] font-[700] py-[6px] transform-none text-[rgb(255,255,255)] leading-5 text-left w-full">
          Site language:
        </div>
        <div className="flex gap-3 w-full max-w-full">
          {Language.slice(0, 14).map((item) => (
            <div
              className="text-[rgb(255,255,255)] cursor-pointer text-sm font-[700] leading-5 opacity-[0.5] text-left hover:underline"
              key={item.id}
            >
              {item.language}
            </div>
          ))}
        </div>
        <div className="flex gap-3 w-full max-w-full">
          {Language.slice(14, 25).map((item) => (
            <div
              className="text-[rgb(255,255,255)] cursor-pointer text-sm font-[700] leading-5 opacity-[0.5] text-left hover:underline"
              key={item.id}
            >
              {item.language}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
