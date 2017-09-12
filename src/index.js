import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        videos: [],
        selectedVideo: null
      };
  
      this.videoSearch("cat video");
    }
  
  
    videoSearch(term) {
      YoutubeSearch(
        {
          key: API_KEY,
          term: term
        },
        videos => {
          this.setState({
            videos,
            selectedVideo: videos[Math.floor(Math.random() * 50)]
          });
        }
      );
    }
  
    render() {
      const videoSearch = _.debounce(term => {
        this.videoSearch(term);
      }, 400);
  
      return (
        <div>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.querySelector(".container"));