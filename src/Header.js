import React from 'react'
import './Header.css' ;

import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import AppsIcon from '@mui/icons-material/Apps';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import KeyboardVoiceSharpIcon from '@mui/icons-material/KeyboardVoiceSharp';


function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
          <MenuSharpIcon className='sharp-icon'/>
           <img className="header-logo"
              src='https://www.entertainmentrocks.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-13-at-11.50.56-AM.png' alt=''
            />   
        </div>


       <div className='header-input'>
        <input type='text ' placeholder='Search' />
            <SearchIcon className='header-inputButton'/>
        <KeyboardVoiceSharpIcon className='header-inputButtons' />
      
       </div>
       <div className='header-icon'>
        <VideoCallIcon className='header-icons'/>
        {/* <AppsIcon className='header-icons'/> */}
        <NotificationsIcon className='header-icons'/>
        <Person2SharpIcon className='header-icons'  />
      
       </div>
    </div>
  )
}

export default Header;