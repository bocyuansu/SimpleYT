import React from 'react';
import Spinner from './Spinner';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <Spinner />;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video__detail">
      <div className="video__box">
        <iframe
          frameBorder="0"
          title="video player"
          src={videoSrc}
          allowFullScreen
        />
      </div>
      <div className="video__content">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
