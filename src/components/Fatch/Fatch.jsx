import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResultVideo from './ResultVideo';
import './result.scss'
const Fatch = () => {
  const [data, setData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const api_key = "a1584dadf7msh7a7980264c9fbebp10cf0cjsn7e1b6d668e9a"
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: 'music',
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date',
    },
    headers: {
      'X-RapidAPI-Key': api_key,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [options]);

  const handleVideoSelect = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <div>
      {selectedVideo && <ResultVideo videoId={selectedVideo} />}
    <div>
      {data.items &&
        data.items.map((item) => {
          const videoId = item.id.videoId;
          const thumbnailUrl = item.snippet.thumbnails.default.url;
          const title = item.snippet.title;
          return (
            <div className='d-flex flex-wrap align-align-items-center justify-content-center' key={videoId}>
              <div className='card_video card'>
              <img
                className='card-img-top' 
                src={thumbnailUrl}
                alt={title}
                onClick={() => handleVideoSelect(videoId)}
                />
              <h3 className='card-title'>{title}</h3>
              </div>  
            </div>
          );
        })}
    </div>
    </div>
  );
};

export default Fatch;



// import React from 'react'

// const Fatch = () => {
//   return (
//     <div className='d-flex flex-wrap align-align-items-center justify-content-center'>
//     <div className='card_video card'>
//     <img className='card-img-top' src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="" />
//     <h6 className='card-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quod!</h6>
    
//     </div>

//     <div className='card_video card'>
//     <img className='card-img-top' src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="" />
//     <h6 className='card-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quod!</h6>
    
//     </div>
//     <div className='card_video card'>
//     <img className='card-img-top' src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="" />
//     <h6 className='card-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quod!</h6>
    
//     </div>
//     <div className='card_video card'>
//     <img className='card-img-top' src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="" />
//     <h6 className='card-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quod!</h6>
    
//     </div>
//     <div className='card_video card'>
//     <img className='card-img-top' src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="" />
//     <h6 className='card-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quod!</h6>
    
//     </div>

//     <div className='card_video card'>
//     <img className='card-img-top' src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="" />
//     <h6 className='card-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quod!</h6>
    
//     </div>
//     <div className='card_video card'>
//     <img className='card-img-top' src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="" />
//     <h6 className='card-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quod!</h6>
    
//     </div>
//     </div>
//     )
//   }
  
//   export default Fatch
  
  
  
  