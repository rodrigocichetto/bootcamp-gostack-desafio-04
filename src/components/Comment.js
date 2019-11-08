import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

const Comment = ({ data: comment }) => (
  <div className="comment">
    <img className="avatar" src={comment.author.avatar} />
    <p className="comment__content"><strong>{comment.author.name}</strong> {comment.content}</p>
  </div>
);

Comment.propTypes = {
  data: PropTypes.object.isRequired
};

export default Comment;