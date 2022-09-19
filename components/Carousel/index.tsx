import React from "react";
import Data from "../../data/data2.json";
import Carousel from "better-react-carousel";

const CarouselItem = () => {
  return (
    <div className="bg-[#0a4a82] w-full h-[74px] flex items-center m-0 mt-60">
      <div className="box-border w-[65%] mx-auto">
        <Carousel cols={6} rows={1} gap={10} loop autoplay={3000}>
          {Data.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="flex items-center justify-center gap-[10px] m-0 cursor-pointer">
                <img
                  src={item.image}
                  alt="bla"
                  className="w-[42px] h-[30px] object-cover m-0 rounded-[5px] border-[2px] border-solid border-white"
                />
                <div className="m-0 text-[rgb(255,255,255)] font-[700] leading-[20px] text-base">
                  {item.language}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselItem;
