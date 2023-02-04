import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';

const AuthenticationPage = () => {
    return (
        <div>
             <Navbar/>
            <Outlet/>
        </div>
    );
};

export default AuthenticationPage;