import React from 'react';
import Footer from '../../Components/Shared/Footer/Footer';
import ArticlesStack from './ArticlesStack';
import HomeBanner from './HomeBanner';

const Homepage = () => {

    return (
        <div className='min-h-screen '>
            <HomeBanner/>
            <ArticlesStack/>
            <Footer/>
        </div>
    );
};

export default Homepage;