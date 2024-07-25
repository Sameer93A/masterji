import React, { useState } from "react";
import vectorpng from "../assets/Vector.png";
import { Menu } from "./Menu";
import Draggable from "react-draggable";

interface Banner {
  image: string;
  title: string;
  price: string;
  label: string;
}

export const Banner: React.FC<Banner> = ({ image, title, price, label }) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const handleMouseDown = () => {
    setIsGrabbing(true);
  };
  const handleMouseUp = () => {
    setIsGrabbing(false);
  };

  return (
    <Draggable
      handle=".handle"
      bounds={{ top: 0, left: 0, right: 0, bottom: 500 }}
      grid={[120, 120]}
    >
      <div>
        <div className="w-[1025px] h-[93px] top-[293px] left-[110px] bg-white shadow-customShadow mt-[31px]">
          <div className="flex">
            <div className="w-[40px] h-[40px] top-[320px] left-[130px]  mt-[27px] ml-[20px]">
              <img
                draggable="false"
                className={`handle ${
                  isGrabbing ? "cursor-grabbing" : "cursor-grab"
                } my-[6.67px] mx-[11.67px]`}
                src={vectorpng}
                alt=""
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              />
            </div>
            <div>
              <img
                className="w-[133px] h-[75px] top-[302px] left-[180px] rounded-[8px] mt-[9px] ml-[10px]"
                src={image}
                alt=""
              />
            </div>
            <div className="w-[394px] h-[24px] top-[328px] left-[338px] font-inter font-[500] text-[20px] leading-[24.2px] ml-[25px] mt-[35px] ">
              {title}
            </div>
            <div className="w-[91px] h-[22px] top-[329px] left-[880px] font-inter font-[400] text-[18px] leading-[21.78px] mt-[36px] ml-[148px]">
              {price}
            </div>
            <div className="w-[74px] h-[26px] top-[327px] left-[991px] rounded-[4px] border-[0.2px] bg-customLigtGreen mt-[34px] ml-[20px]">
              <div className="w-[48px] h-[17px] top-[331px] bottom-[1004px] font-inter font-[400] text-[14px] leading-[16.94px] mt-[4px] ml-[13px]">
                {label}
              </div>
            </div>
            <Menu />
          </div>
        </div>
      </div>
    </Draggable>
  );
};
