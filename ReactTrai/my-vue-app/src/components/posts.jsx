import React from 'react'
import './posts.css';


function post() {
    const posts = [{
        id: 1,
        title: 'Новина 1',
        sortDescription: 'Короткий опис',
    },
    {
        id: 2,
        title: 'Новина 2',
        sortDescription: 'Короткий опис',
    },
    {
        id: 3,
        title: 'Новина 3',
        sortDescription: 'Короткий опис',
    },

    ]

    return (
        <>
            <div>
                {posts.map(post => (
                    <div className='post' key={post.id.toString()}>
                        <h2 className='title-post'>{post.title}</h2>
                        <p className='description-post'>{post.sortDescription}</p>
                    </div>
                ))}
            </div>

        </>

    )
}

export default post