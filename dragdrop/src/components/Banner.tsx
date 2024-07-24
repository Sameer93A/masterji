import React from "react";

interface Banner {
  image: string;
  title: string;
  price: number;
  label: string;
}

export const Banner: React.FC<Banner> = ({ image, title, price, label }) => {
  return (
    <div>
      <div className="w-[1025px] h-[93px] top-[293px] left-[110px] bg-white shadow-customShadow mt-[31px]">
        <div className="flex">
          <div className="w-[40px] h-[40px] ">
            <img src="" alt="" />
          </div>
          <div>{image}</div>
          <div>{title}</div>
          <div>{price}</div>
          <div>{label}</div>
        </div>
      </div>
    </div>
  );
};
