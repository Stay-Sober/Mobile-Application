import React, { useState } from 'react';

const ArticleList = ({ articles, title }) => {
    return (
        <div>
            <h2>{ title }</h2>
            {articles.map((article) => (
                <div key={article.id}>
                    <h3>{ article.title }</h3>
                    <p>{ article.body }</p>
                </div>
            ))}
            <button>Read More</button>
        </div>
    )
}

export default ArticleList
