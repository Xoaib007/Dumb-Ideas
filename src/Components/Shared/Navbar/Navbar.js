import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [user, setUser] = useState();

    const navItems = <>
        <NavLink activeClassName="active" className='text-2xl font-bold mx-5 pb-2 border-b-8 border-transparent text-white hover:border-white' to='/'>Home</NavLink>

        <NavLink activeClassName="active" to='/categories'  className='text-2xl font-bold mx-5 pb-2 border-b-8 border-transparent text-white hover:border-white'>Trending</NavLink>

        <NavLink activeClassName="active" className='text-2xl font-bold mx-5 pb-2 border-b-8 border-transparent text-white hover:border-white' to='/blog'>Categories</NavLink>
        
        <NavLink activeClassName="active" className='text-2xl font-bold mx-5 pb-2 border-b-8 border-transparent text-white hover:border-white' to='/about'>About</NavLink>
    </>

    return (
        <div className="navbar bg-transparent pt-5 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/'>
                    <p className=" ml-5 text-white font-bold text-2xl bg-blue-800 px-3 py-1 border-4 border-white logo">Dumb Thoughts...</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 pt-3">
                {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user === null ?
                        <Link to='/user/signup' className="btn bg-black border-none text-white hover:bg-white hover:text-black rounded-none">Get started<FontAwesomeIcon icon={faArrowRightToBracket} className='w-4 h-4 ml-2'></FontAwesomeIcon></Link>
                    :
                        <>
                            <Link to='/dash' className="mr-8 tooltip tooltip-bottom" data-tip="Write a blog"><FontAwesomeIcon icon={faPenToSquare} className='w-8 h-8 text-white hover:w-9 hover:h-9'></FontAwesomeIcon></Link>

                            <Link to='/dash' className="mr-8 tooltip tooltip-bottom" data-tip="Profile"><FontAwesomeIcon icon={faUser} className='w-8 h-8 hover:w-9 hover:h-9 text-white'></FontAwesomeIcon></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;