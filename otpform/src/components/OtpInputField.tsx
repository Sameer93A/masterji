import React, { useEffect, useRef, useState } from "react";

export const OtpInputField = ({ length, onOtpSubmit = () => {} }: any) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef<any>([]);
  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  });
  const handleChange = (index: any, e: any) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }
  };

  const handleClick = (index: any) => {};
  const handleKeyDown = (index: any) => {};

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            value={value}
            ref={(input) => {
              inputRef.current[index] = input;
            }}
            onChange={(e) => {
              handleChange(index, e);
            }}
            onClick={() => {
              handleClick(index);
            }}
            onKeyDown={() => {
              handleKeyDown(index, e);
            }}
            className="w-[90px] h-[100px] top-[416px] left-[875px] rounded-[12px] bg-customSky ml-[19px] mt-[36px]"
          />
        );
      })}
    </div>
  );
};
