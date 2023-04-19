import React from 'react';

const Title = ({title}) => {
    return (
        <div className='container py-[10px]'>
            <p className='text-[25px] font-bold text-primary montserrat'>{title}</p>
        </div>
    );
}

export default Title;
