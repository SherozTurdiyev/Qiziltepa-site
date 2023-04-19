import React from 'react';
import Title from './Title';

const Videos = () => {
    return (
        <div className='mb-[50px]'>
            <Title title={"Voqealar"} />
            <div className='container flex justify-between items-center mt-2'>
                <div className='relative'>
                    <img src="./videos.png" alt="" />
                    <p className='absolute bottom-6 left-4 text-white font-semibold text-[25px] '>Qiziltepa istirohat bog’i</p>
                </div>
                
            </div>
        </div>
    );
}

export default Videos;
