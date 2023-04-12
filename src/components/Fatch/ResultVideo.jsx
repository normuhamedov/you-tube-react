import React from 'react';
import './result.scss'
const ResultVideo = ({ videoId }) => {
  return (
    <div className='result_video card'>
    <iframe
      title="YouTube video player"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
   </div>
  );
};

export default ResultVideo;
