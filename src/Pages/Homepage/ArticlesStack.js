import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArticlesStack = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("Articles.json")
            .then((res) => res.json())
            .then((data) => setArticles(data));
    }, []);
    return (
        <div>
            {
                articles?.map((article, i) =>
                    <div key={i} className='border-b-2 border-gray-800 mx-40 my-20'>
                        <Link to={`/article/${article.id}`}>
                            <p className='text-3xl font-bold'>{article.title}</p>
                            <div className='flex'>
                                <p>{article.author}</p>
                                <p>{article.publishedDate}</p>
                            </div>
                            <p>{article.shortDescription}</p>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default ArticlesStack;