import React, { useEffect, useState } from 'react';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("Articles.json")
            .then((res) => res.json())
            .then((data) => setArticles(data));
    }, []);

    return (
        <div className='min-h-screen'>
            <p>{articles[0].title}</p>
        </div>
    );
};

export default Articles;