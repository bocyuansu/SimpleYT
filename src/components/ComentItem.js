import React from 'react';

const ComentItem = ({ comment }) => {
  const [year, month, date, hour, minute, second] =
    comment.snippet.topLevelComment.snippet.publishedAt
      .replace(/T/g, '-')
      .replace(/:/g, '-')
      .split('-');

  return (
    <div className="video__commentItem">
      <img
        src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt={'video comment'}
        className="video__commentItem-avatar"
      />
      <div>
        <div className="video__commentItem-title">
          <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName}</h3>
          <span>{`${year}年${month}月${date}日 ${hour}:${minute}`}</span>
        </div>
        <div className="video__commentItem-comment">
          {comment.snippet.topLevelComment.snippet.textOriginal}
        </div>
      </div>
    </div>
  );
};

export default ComentItem;
