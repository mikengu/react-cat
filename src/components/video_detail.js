import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return (
        <div>Loading...</div>
        );
    }

    const videoID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}`;
    return (
        <div>
            <h1 className="p-4">Breaktime. Here's a cat video.</h1>
            <div className="video-detail col-md-7 video p-4">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>   
            </div>
        </div>
    );
};

export default VideoDetail;

