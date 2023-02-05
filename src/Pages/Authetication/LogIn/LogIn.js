import React from 'react';
import Navbar from '../../../Components/Shared/Navbar/Navbar';
import LogInForm from './LogInForm';

const LogIn = () => {
    return (
        <div className='bg-black min-h-screen'>
            <Navbar/>
            <LogInForm/>
        </div>
    );
};

export default LogIn;