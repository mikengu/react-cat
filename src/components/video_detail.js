import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="container">
        <div className="loader" />
      </div>
    );
  }

  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;
  return (
    <div>
      <h1 className="p-4">Breaktime. Here's a cat video.</h1>
      <div className="video-container col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
