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
                articles?.map((article, i)=>
                <Link to={`/article/${article.id}`} key={i} className='border-8'>
                    <p>{article.title}</p>
                    <p>{article.author}</p>
                    <p>{article.publishedDate}</p>
                    <p>{article.shortDescription}</p>
                </Link>
                )
            }
        </div>
    );
};

export default ArticlesStack;