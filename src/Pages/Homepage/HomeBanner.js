import React from 'react';
import './Homepage.css'

const HomeBanner = () => {
    return (
        <div className='bgbanner h-[40rem]'>
            <p className='text-5xl font-bold text-white pt-60 pl-20'>Read, Write, <br/><span className='text-8xl font-bold text-white'>Explore...</span></p>
        </div>
    );
};

export default HomeBanner;