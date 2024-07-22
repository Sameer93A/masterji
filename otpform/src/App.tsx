function App() {
  return (
    <div className="bg-customBlue ">
      <div className="text-white text-6xl font-bold leading-97 tracking-normal text-center drop-shadow font-inter">
        Chai aur Code
      </div>
      <div className="flex justify-center flex-col h-screen">
        <div className="flex justify-center">
          <div className="bg-white w-[756px] h-[514px] top-[218px] left-[378px] rounded-[18px] drop-shadow">
            <div className="font-dmsans font-bold text-[40px] text-center">
              Mobile Phone Verification
            </div>
            <div className="font-dmsans text-[25px] text-customGray text-center">
              Enter the 4-digit verification code that was sent to <br />
              your phone number.
            </div>
            <div className="flex justify-center">
              <input
                type="text"
                className="w-[90px] h-[100px] rounded-[12px] bg-customSky m-4 hover:border-blue-700"
              />
            </div>
            <div className="flex justify-center">
              <div className="bg-customDarkBlue w-[417px] h-[64px] top-[540px] left-[548px] text-white text-center rounded-[8px]">
                <div className="w-[198] h-[33] top-[556px] left-[657px] font-dmsans text-[25px] text-center p-3">
                  Verify Account
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[585px] h-[33px] top-[628px] left-[472px] font-dmsans text-[25px] text-center text-customGray">
                Didn’t receive code?{" "}
                <span className="text-customDarkBlue">Resend</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
