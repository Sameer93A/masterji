import { useNavigate } from "react-router";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-300 min-h-screen">
      <div className="flex justify-center">
        <div className="text-9xl text-white">Welcome</div>
      </div>
      <div className="flex justify-center flex-col h-screen">
        <div className="flex justify-center">
          <button
            onClick={() => {
              navigate("/otp-form");
            }}
            className="w-[500px] border border-blue-700 bg-blue-600 rounded-md text-3xl text-white"
          >
            {" "}
            OTP FORM
          </button>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              navigate("/course-list");
            }}
            className="w-[500px] border border-blue-700 bg-blue-600 rounded-md text-3xl text-white mt-20"
          >
            {" "}
            DRAG AND DROP
          </button>
        </div>
      </div>
    </div>
  );
};
