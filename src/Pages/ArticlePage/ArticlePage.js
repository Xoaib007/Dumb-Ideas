import React from 'react';
import Footer from '../../Components/Shared/Footer/Footer';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Articles from './Articles';

const ArticlePage = () => {
    return (
        <div>
            <Navbar/>
            <Articles/>
            <Footer/>
        </div>
    );
};

export default ArticlePage;