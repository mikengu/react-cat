import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return (
        <div className="p-4">Loading...</div>
        );
    }

    const videoID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}`;
    return (
        <div>
            <h1 className="p-4">Breaktime. Here's a cat video.</h1>
            <div className="d-flex align-items-center">
                    <div className="video-container col-md-8">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src={url}></iframe>
                        </div>   
                    </div>
                    <button className="cat-btn">Cat Button</button>
            </div>
        </div>
    );
};

export default VideoDetail;

