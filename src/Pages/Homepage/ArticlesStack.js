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
                    <div key={i} className='border-b-2 border-gray-800 mx-40 my-20 py-10'>

                        <div className='flex mb-3'>
                            {
                                article.topic.map((topic =>
                                    <p className='mr-4 hover:text-blue-700'>{topic}</p>
                                ))
                            }
                        </div>
                        <Link to={`/article/${article.id}`}>
                            <p className='text-3xl font-bold mb-5 text-gray-500 hover:text-black'>{article.title}</p>
                        </Link>
                        <div className='flex mb-4'>
                            <Link to={`/user/${article.authorId}`}>
                                <p className='text-gray-600 mr-2'>by <span className=' underline text-blue-700 mr-1 hover:text-blue-500'>{article.author}</span>,</p>
                            </Link>
                            <p className='text-gray-600 '>{article.publishedDate}</p>
                        </div>
                        <p>{article.shortDescription}</p>
                    </div>
                )
            }
        </div>
    );
};

export default ArticlesStack;