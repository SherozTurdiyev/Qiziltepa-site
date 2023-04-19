import React from 'react';
import Title from './Title';
import { newsList } from '../../service/constans';

const News = () => {
    return (
        <div className='mt-[17px]'>
            <Title title={"Yangiliklar"} />
            <div className='container flex flex-wrap justify-between items-center pt-[19px]'>
                {
                    newsList.map((item, index) => {
                        return (
                            <div className='xs:w-full lg:w-[380px]   h-auto rounded-[26px] shadow-md bg-white hover:shadow-xl ease-linear duration-150 service-card xs:mt-3'>
                                <div className='truncate w-full h-[280px] rounded-tl-[26px] rounded-tr-[26px]'>
                                <img className='w-full mb-[23px] service-card__img' src={item.poster} alt={item.title} />
                                </div>
                                <div className='px-4 pb-3'>
                                    <p className='font-bold text-base mb-[15px]'>{item.title}</p>
                                    <p className='font-medium text-base montserrat leading-5 mb-[10px]'>{item.description}</p>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span>
                                            <p className='text-gray'>{item.date}</p>
                                            <span className='flex mt-1'><img className='mr-[15px]' src="./eye.svg" alt="eye icon" /> <p className='font-semibold text-base'>{item.viewCount}</p></span>
                                        </span>
                                        <div>
                                            <button className='bg-[#21283F] rounded-[10px] w-[45px] h-[45px] flex justify-center items-center'><img src="./diagonal-arrow-right-up.svg" alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default News;
