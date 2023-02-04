import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import './Homepage.css'

const HomeBanner = () => {
    return (
        <div className='bgbanner h-[40rem]'>
        <Navbar/>
            <p className='text-5xl font-bold text-white pt-48 pl-20'>No Ideas Are<br/><span className='text-8xl font-bold text-white'>DUMB...</span> <br/>Share your dumb thoughts</p>
        </div>
    );
};

export default HomeBanner;