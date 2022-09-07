import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
import avatar from '../img/cyuan.jpeg';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videos, search } = useVideos('林俊傑');

  // 搜尋完，自動選擇第一個視頻
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // 選擇視頻，回到視窗最上方
  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, [selectedVideo]);

  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <a href="/simpleyt" alt="logo" className="header__logo">
            SimpleYT
          </a>
        </div>
        <div className="header__searchBar">
          <SearchBar onTermSubmit={search} />
        </div>
        <figure className="header__avatar">
          <img src={avatar} alt="avatar" />
        </figure>
      </header>
      <main>
        {/* body */}
        <section className="section-video">
          <div className="row video">
            <div className="col-2-of-3">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="col-1-of-3">
              <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
            </div>
          </div>
        </section>
        {/* body */}
      </main>
      <footer className="footer">
        <div className="row">
          <p className="footer__copyright">&copy; Build by Cyuan 2022</p>
        </div>
      </footer>
    </>
  );
};

export default App;
