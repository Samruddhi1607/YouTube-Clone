import React from 'react'
import './VideoCard.css'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

function VideoCard({image , title , channel , views , timestamp , channelImage} ) {
  return (
    <div className='videocard'>
        <img className="video-thumbnail" src={image} alt="" />
        <div className='video-info'>
         < AccountCircleSharpIcon 
           className='video-avtar'
            alt={channel}
            src={channelImage}
         />
        <div className="video-text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
             {views} / {timestamp}
            </p>
        </div>
        </div>
    </div>
  )
}

export default VideoCard