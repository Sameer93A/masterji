function App() {
  return (
    <div className="bg-customBlue h-screen">
      <div className="flex justify-center flex-col h-screen">
        <div className="flex justify-center">
          <div className="bg-white rounded-md">
            <div className="flex justify-center">
              <div className="font-sans text-[40px]">
                Mobile Phone Verification
              </div>
            </div>
            <div className="flex justify-center">
              <div className="font-sans text-[25px]">
                Enter the 4-digit verification code that wan sent to your phone
                number
              </div>
            </div>
            <div className="flex justify-center">
              <div>BOX</div>
            </div>
            <div className="flex justify-center">
              <div className="bg-customDarkBlue">Verify Account</div>
            </div>
            <div className="flex justify-center">
              <div>Didn't receive code? Resend</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
