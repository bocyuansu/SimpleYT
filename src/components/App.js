import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import avatar from '../img/cyuan.jpeg';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  // componentDidMount() {
  //   this.onTermSubmit('林俊傑');
  // }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        <header className="header">
          <div className="header__logo-box">
            <a href="/" alt="logo" className="header__logo">
              SimpleYT
            </a>
          </div>
          <div className="header__searchBar">
            <SearchBar onTermSubmit={this.onTermSubmit} />
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
                <VideoDetail video={this.state.selectedVideo} />
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
            <p class="footer__copyright">&copy; Build by Cyuan 2022</p>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
