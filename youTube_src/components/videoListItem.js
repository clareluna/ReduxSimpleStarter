import React from 'react';


//pulling the callback all the way from App, here we work with onClick to give it back
//with the specific video from this instance of component
const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
      <li className="list-group-item" onClick={() => onVideoSelect(video)}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageURL} />
          </div>
          <div className="media-body">
            <div className="media-heading"> {title}
            </div>
          </div>
        </div>
      </li>
  );
};

export default VideoListItem;
