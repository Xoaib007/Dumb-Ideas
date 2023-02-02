import React from 'react';
import ArticlesStack from './ArticlesStack';
import HomeBanner from './HomeBanner';

const Homepage = () => {

    return (
        <div className='min-h-screen '>
            <HomeBanner/>
            <ArticlesStack/>
            
        </div>
    );
};

export default Homepage;