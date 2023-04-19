import React from "react";
import { menuList } from "../service/constans";
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="bg-white border-b-2 border-[#BDBDBD]">
        <div className="container py-3 flex flex-row items-center justify-between">
          <div className="nav-logo flex flex-row items-center">
            <img
              src="./gerb.png"
              alt="logo gerb"
              className="w-[83px] h-[66px] mr-6"
            />
            <p className="montserrat font-semibold text-xl w-[187px]">
              Qizil tepa tumani rasmiy veb sayti{" "}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span className="flex flex-row items-center mr-12">
              <img
                src="./location.svg"
                alt="locotion-icon"
                className="mr-[10px]"
              />
              <p className="PTsans font-normal text-sm">
                Qiziltepa shahri, Oʻzbekiston shoh koʻchasi, 43-uy.
              </p>
            </span>
            <span className="flex flex-row items-center mr-14">
              <img src="./phone.svg" alt="phone-icon" className="mr-2" />
              <p className="PTsans font-normal text-sm">(79) 222-00-01</p>
            </span>
            <span className="flex flex-row items-center">
              <p className="text-primary underline font-normal text-xl">
                O'zbekcha
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white sticky top-0 z-50">
        <div className="container py-5 flex flex-row items-center justify-between">
          <div className="mr-[18px] ml-2">
            <AiOutlineMenu className="w-[30px] h-[30px] text-primary active:text-primary/[0.5] " />
            {/* <img className="w-[32px] h-[32px]" src="./Menu icon.svg" alt="" /> */}
          </div>
          <ul className="flex flex-row items-center">
            {
              menuList.map((item, index) => {
                return (
                  <li className="hover:underline ">
                    <a href="#" className="flex flex-row items-center">
                      <img className="w-[20px] h-[20px] mr-2 ml-3" src={item.icon} alt={item.label} />
                      <span className="font-normal text-xl">{item.label}</span>
                      <img className="w-[28px] h-[28px]" src="./double-down.svg" alt="" />
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
