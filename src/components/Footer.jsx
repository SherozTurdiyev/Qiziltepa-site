import React from 'react';

const Footer = () => {
    return (
        <div className='w-full h-[216px] bg-white shadow-md'>
            <div className="container h-full flex flex-row justify-between items-center">
                <div className="flex items-center h-full ">
                    <img className='w-[93px] h-[75px] mr-[14px]' src="./gerb.png" alt="" />
                    <p className='w-[187px] text-[#0073A7] font-bold text-[20px]'>Qizil tepa tumani rasmiy veb sayti </p>
                </div>
                <div className='flex flex-row '>
                    <div className='w-[64px] h-[64px] bg-[#D9D9D9] rounded-[8px] ml-8'></div>
                    <div className='w-[64px] h-[64px] bg-[#D9D9D9] rounded-[8px] ml-8'></div>
                    <div className='w-[64px] h-[64px] bg-[#D9D9D9] rounded-[8px] ml-8'></div>
                    <div className='w-[64px] h-[64px] bg-[#D9D9D9] rounded-[8px] ml-8'></div>
                    <div className='w-[64px] h-[64px] bg-[#D9D9D9] rounded-[8px] ml-8'></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
