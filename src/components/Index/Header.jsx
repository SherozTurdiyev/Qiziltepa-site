import React from "react";

const Header = () => {
  return (
    <div className="container pt-[17px] relative">
      <img className="xs:h-[230px] lg:h-[380px] rounded-[20px] lg:w-full" src="./bg-header.png" alt="" />
      <div className="xs:h-[230px] lg:h-[380px] rounded-[20px] lg:w-full  linear absolute top-[17px] left-0 xs:pl-5 lg:pl-[63px] flex flex-col justify-center items-start">
        <p className="text-white font-bold xs:w-full lg:w-[300px] montserrat xs:text-[20px] lg:text-[30px]">
          Qizil tepa tumani rasmiy veb saytiga xush kelibsiz
        </p>
        <div className="mt-[30px]">
          <button className="bg-mediumPrimary xs:mb-5 lg:mb-0 text-white w-[181px] h-[42px] rounded-[13px] mr-[14px] font-medium text-base">
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
