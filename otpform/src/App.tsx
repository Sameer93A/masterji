import { useState } from "react";
import { OtpInputField } from "./components/OtpInputField";
import { ChaiLogo } from "./components/ChaiLogo";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";

function App() {
  const correctOtp = 1234;
  const [userOtp, setUserOtp] = useState<number>(0);
  const [status, setStatus] = useState<"verified" | "failed" | "">("");

  const onOtpSubmit = (otp: number) => {
    setUserOtp(otp);
  };

  const handleClick = () => {
    if (userOtp === correctOtp) {
      setStatus("verified");
    } else {
      setStatus("failed");
    }
  };
  return (
    <div className="bg-customBlue ">
      <Header />
      <div className="flex justify-center flex-col h-screen">
        <div className="flex justify-center">
          <div className="bg-white w-[756px] h-[514px] top-[218px] left-[378px] rounded-[18px] drop-shadow">
            <div className=" h-[52px] top-[248px] left-[532px] font-dmsans font-[700] text-[40px] leading-[52.08px] text-center  text-black pt-[30px]">
              Mobile Phone Verification
            </div>
            <div className="flex justify-center">
              <div className="w-[585px] h-[66px] top-[314px] left-[464px] font-dmsans font-[400] text-[25px] leading-[32.55px] text-center  text-customGray mt-14">
                Enter the 4-digit verification code that was sent to <br />
                your phone number.
              </div>
            </div>
            <div className="flex justify-center">
              <OtpInputField
                length={4}
                onOtpSubmit={onOtpSubmit}
                status={status}
              />
            </div>
            <Button onClick={handleClick} status={status} />
            <Footer />
          </div>
        </div>
      </div>
      <ChaiLogo />
    </div>
  );
}

export default App;
