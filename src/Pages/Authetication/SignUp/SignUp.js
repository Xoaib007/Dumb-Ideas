import React from 'react';
import Navbar from '../../../Components/Shared/Navbar/Navbar';
import SignUpForm from './SignUpForm';

const SignUp = () => {
    return (
        <div className='bg-black min-h-screen'>
            <Navbar/>
            <SignUpForm/>
        </div>
    );
};

export default SignUp;