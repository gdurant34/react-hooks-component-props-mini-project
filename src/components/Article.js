import React from 'react';

function Article({ post }) {
    return (
        <article>
            <h3>{post.title}</h3>
            <small>{!post.date ? "January 1, 1970" : post.date}</small>
            <p>{post.preview}</p>
        </article>
    )
}

export default Article;