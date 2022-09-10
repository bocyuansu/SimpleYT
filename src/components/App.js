import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import ComentList from './ComentList';

import avatar from '../img/cyuan.jpeg';

class App extends React.Component {
  state = { videos: [], selectedVideo: null, comments: [] };

  componentDidMount() {
    this.onTermSubmit('justin bieber');
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        type: 'video',
        maxResults: 10,
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });

    this.fetchVideoComments(response.data.items[0]);
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    this.fetchVideoComments(video);
  };

  fetchVideoComments = async (video) => {
    const response = await youtube.get('/commentThreads', {
      params: {
        videoId: video.id.videoId,
      },
    });

    this.setState({ comments: response.data.items });
  };

  render() {
    return (
      <>
        <header className="header">
          <div className="header__logo-box">
            <a href="/simpleyt" alt="logo" className="header__logo">
              SimpleYT
            </a>
          </div>
          <div className="header__searchBar">
            <SearchBar onTermSubmit={this.onTermSubmit} />
          </div>
          <figure className="header__avatar">
            <a href="/simpleyt" alt="avatar" className="">
              &nbsp;
            </a>
            <img src={avatar} alt="avatar" />
          </figure>
        </header>
        <main>
          {/* body */}
          <section className="section-video">
            <div className="row video">
              <div className="col-2-of-3">
                <VideoDetail video={this.state.selectedVideo} />
                <ComentList comments={this.state.comments} />
              </div>
              <div className="col-1-of-3">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
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
  }
}

export default App;
