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
                articles?.map(article=>
                <p>{article.author}</p>
                )
            }
        </div>
    );
};

export default ArticlesStack;