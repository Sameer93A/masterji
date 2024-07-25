import React, {
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from "react";

interface OtpTypes {
  length: number;
  onOtpSubmit: (otp: number) => void;
  status: string;
}

export const OtpInputField: React.FC<OtpTypes> = ({
  length,
  onOtpSubmit,
  status,
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(Number(combinedOtp));
    }
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleClick = (index: number) => {
    // You can implement click handling logic here if needed
    inputRef.current[index]?.setSelectionRange(1, 1);
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // You can implement key down handling logic here if needed
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <div>
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          ref={(input) => {
            if (input) {
              inputRef.current[index] = input;
            }
          }}
          onChange={(e) => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className={`font-dmsans w-[90px] h-[100px] top-[416px] left-[875px] rounded-[12px] bg-customSky ml-[19px] mt-[36px] text-[48px] text-center text-black font-[400]  leading-1 tracking-customTighter
            ${
              status === "verified"
                ? "border  border-customGreenLight"
                : status === "failed"
                ? "border border-customRed"
                : "border-none"
            }
            `}
        />
      ))}
    </div>
  );
};
