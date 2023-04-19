import React from "react";

const Header = () => {
  return (
    <div className="container pt-[17px] relative">
      <img className="w-full h-[380px]" src="./bg-header.png" alt="" />
      <div className="w-full h-[380px] linear absolute top-[17px] left-0 pl-[63px] flex flex-col justify-center items-start">
        <p className="text-white font-bold text-[30px] w-[300px] montserrat">
          Qizil tepa tumani rasmiy veb saytiga xush kelibsiz
        </p>
        <div className="mt-[30px]">
          <button className="bg-mediumPrimary text-white w-[181px] h-[42px] rounded-[13px] mr-[14px] font-medium text-base">
            Murojaat yuborish
          </button>
          <button className="bg-mediumPrimary text-white w-[181px] h-[42px] rounded-[13px] mr-[14px] font-medium text-base">
            So‘ngi yangiliklar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
