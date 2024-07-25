import React from "react";

interface Button {
  onClick: () => void;
  status: "verified" | "failed" | "";
}

export const Button: React.FC<Button> = ({ onClick, status }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className={`w-[417px] h-[64px] top-[540px] left-[548px] rounded-[8px] ${
          status === "verified"
            ? "bg-customGreenLight"
            : status === "failed"
            ? "bg-customRed "
            : "bg-customDarkBlue"
        } mt-[24px] ml-[19px]`}
      >
        <div className="font-dmsans font-[400] text-[25px] leading-8 tracking-customTighter text-center text-white">
          {status === "verified"
            ? "Verified"
            : status === "failed"
            ? "Verification Failed"
            : "Verify Account"}
        </div>
      </button>
    </div>
  );
};
