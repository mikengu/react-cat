import React, { Component } from "react";
import ReactDOM from "react-dom";
import YoutubeSearch from "./youtube_search";
import VideoDetail from "./video_detail";
import { searchTerms } from "./searchTerms";
import { randomize } from "./randomGenerator";
import { api } from "../config";

const API_KEY = api.key;
const numOfSearchItems = searchTerms.length;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch(searchTerms[randomize(numOfSearchItems)]);
    this.btnClick = this.btnClick.bind(this);
  }

  videoSearch(term) {
    YoutubeSearch(
      {
        key: API_KEY,
        term
      },
      videos => {
        const listOfVideos = 7;
        this.setState({
          videos,
          selectedVideo: videos[randomize(listOfVideos)]
        });
      }
    );
  }

  btnClick() {
    this.videoSearch(searchTerms[randomize(numOfSearchItems)]);
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="a">
          <VideoDetail
            video={this.state.selectedVideo}
            videoSearch={this.videoSearch}
          />
        </div>
        <div className="b">
          <button className="btn" type="submit" onClick={this.btnClick}>
            <img className="cat" src="/images/Cat.png" />
            {/* <img className="cat" src="../../public/images/Cat.png" /> */}
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
