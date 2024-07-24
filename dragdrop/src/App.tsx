import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-customGreen h-screen">
      <Header />
      <div className="flex justify-center">
        <div className="w-[1223px] h-[785px] top-[145px] left-[71px] rounded-[18px] drop-shadow bg-white mt-[31px]">
          <div className="w-[303px] h-[48px] top-[180px] left-[110px] font-inter font-[700] text-[40px] leading-[48.41px] text-customBlack mt-[35px] ml-[39px]">
            Manage Bundle
          </div>
          <div className="w-[457px] h-[24px] top-[238px] left-[110px] font-inter font-[400] text-[20px leading-[24.2px] text-customBlack mt-[10px] ml-[39px] ">
            Change orders of the products based on priority
          </div>
          <div className="flex justify-center">
            <Banner
              image="hello"
              title="dafhsdkjhfkjdshfh"
              price={121212}
              label="dkfjjdaskl;jfkl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
