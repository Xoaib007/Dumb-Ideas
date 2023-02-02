import React, { useEffect, useState } from 'react';

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
                <div key={i} className='border-8'>
                    <p>{article.title}</p>
                    <p>{article.author}</p>
                    <p>{article.publishedDate}</p>
                    <p>{article.shortDescription}</p>
                </div>
                )
            }
        </div>
    );
};

export default ArticlesStack;