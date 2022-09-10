import React from 'react';
import ComentItem from './ComentItem';

const ComentList = ({ comments }) => {
  const renderedList = comments.map((comment, i) => {
    return <ComentItem key={comment.id} comment={comment} />;
  });

  return <div className="video__commentList">{renderedList}</div>;
};

export default ComentList;
