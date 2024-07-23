import React, { useEffect, useRef, useState } from "react";

export const OtpInputField = ({ length, onOtpSubmit }: any) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef<any>([]);
  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  });
  const handleChange = (index: any, e: any) => {
    const value = e.targetl.value;

    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }
  };
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
            className="w-[90px] h-[100px] top-[416px] left-[875px] rounded-[12px] bg-customSky m-4 text-sm mt-[36px]"
          />
        );
      })}
    </div>
  );
};
