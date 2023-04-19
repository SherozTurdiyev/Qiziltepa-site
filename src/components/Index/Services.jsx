import React from 'react';
import { servicesList } from '../../service/constans';
import Title from './Title';

const Services = () => {
    return (
        <div>
            <Title title={"Xizmatlar"}/>
            <div className='container flex flex-wrap justify-between items-center'>
                {
                    servicesList.map((item , index)=>{
                        return(
                            <div className='service-card w-[210px] h-[184px] bg-white rounded-[26px] pt-[42px] text-center pb-[20px]'  >
                                <img className='service-card__img w-[51px] h-[51px] m-auto mb-[22px] font-black pb-22px' src={item.icon} alt={item.label} />
                                <p className='font-semibold text-xl w-[100px] m-auto'> {item.label}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Services;
