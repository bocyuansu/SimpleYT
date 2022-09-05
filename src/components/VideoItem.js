import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video__item">
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="video__item-text">
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
