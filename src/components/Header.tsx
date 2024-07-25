interface Header {
  textcolor: string;
  paddingtop: string;
}

export const Header: React.FC<Header> = ({ textcolor, paddingtop }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`w-[553px] h-[97px] top-[38px] left-[480px] font-inter font-[700] text-[80px] leading-[96.82px] ${textcolor} drop-shadow ${paddingtop}`}
      >
        Chai aur Code
      </div>
    </div>
  );
};
