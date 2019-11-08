import React from 'react';

import Comment from './Comment';

import './Post.css';

const Post = ({ data: post }) => (
  <div className="post">
    <div className="post__profile">
      <img className="avatar" src={post.author.avatar} />
      <div>
        {post.author.name} <br /> <small>{post.date}</small>
      </div>
    </div>
    <div className="post__content">
      {post.content}
    </div>
    { post.comments.length > 0 && 
      <div className="post__comments">
        {post.comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
    }
    
  </div>
);

export default Post;