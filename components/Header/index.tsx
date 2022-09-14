import React, { useState, useEffect } from "react";
import Data from "../../data/data.json";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1050) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <div className="w-full bg-[#235390] fixed top-0 left-0">
      <div className="w-[70%] mx-auto flex justify-between h-[70px] items-center">
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg"
          alt="logo"
          className="h-9 w-auto object-cover cursor-pointer"
        />
        <div className="flex items-center gap-5">
          <div
            className="flex h-full items-center relative gap-[5px]"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="cursor-pointer text-white relative font-[700] text-[17px]">
              SITE LANGUAGE: ENGLISH
            </div>
            <img
              className="w-[20px] object-cover cursor-pointer relative"
              src="https://popupfilmresidency.org/wp-content/uploads/2019/05/white-down-arrow-png-2.png"
            />
          </div>
          {show && (
            <div className="flex gap-5">
              <button className="uppercase cursor-pointer flex items-center justify-center rounded-2xl border-b-4 border-b-solid border-b-[rgba(0,0,0,0.3)] text-base font-[700] text-[rgb(255,255,255)] h-[44px] tracking-[0.8px] leading-[18px] px-5 bg-[rgb(88,240,0)]">
                Get Started
              </button>
              <button className="uppercase cursor-pointer flex items-center justify-center rounded-2xl border-b-4 border-b-solid border-b-[rgba(0,0,0,0.3)] text-base h-[44px] font-[700] text-black tracking-[0.8px] leading-[18px] px-5 bg-[rgb(255,255,255)]">
                Login
              </button>
            </div>
          )}
        </div>
        {open && (
          <div className="absolute w-[500px] h-[full] bg-[rgb(245,245,245)] rounded-[12px] top-[60px] right-[15%] z-100">
            <div className="grid grid-cols-2 pl-[60px] py-[30px] gap-[25px]">
              {Data.map((item) => (
                <div
                  className="flex gap-[10px] items-center rounded-[5px] hover:bg-[rgb(200,200,200)]"
                  key={item.id}
                >
                  <img
                    src={item.flag}
                    alt="flag"
                    className="w-[40px] object-cover rounded-[5px]"
                  />
                  <div className="text-black text-sm font-[400]">
                    {item.language}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
