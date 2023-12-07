import React from 'react';

const Post = ({ post }) => {
    return (
        <div
            className='border border-gray-300 mb-4 py-2 w-[70%]'
        >
            <p>{post.title}</p>
            <p>{post.body}</p>

        </div>
    );
}

export default Post;
