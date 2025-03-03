import React from 'react';
import './Sidebar.css' ;
import SidebarRow from './SidebarRow.js';
import HomeIcon from '@mui/icons-material/Home';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import ReportSharpIcon from '@mui/icons-material/ReportSharp';
import FeedbackSharpIcon from '@mui/icons-material/FeedbackSharp';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AccessTimeFilledSharpIcon from '@mui/icons-material/AccessTimeFilledSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
function Sidebar() {
  return (
    <div className='sidebar'>
        

        <SidebarRow Icon={HomeIcon} title ="Home"/>
        <SidebarRow  Icon={WhatshotSharpIcon} title ="Trending"/>
        <SidebarRow  Icon={HistorySharpIcon} title ="History"/>
        <SidebarRow  Icon={AccessTimeFilledSharpIcon} title ="Watch Later"/>
        <hr/>
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow  Icon={SubscriptionsSharpIcon} title ="Subscription"/>
        <SidebarRow  Icon={SettingsSharpIcon} title ="Setting"/>
        <SidebarRow  Icon={ReportSharpIcon} title ="Report"/>
        <SidebarRow  Icon={FeedbackSharpIcon} title ="Send Feedback"/>
        <SidebarRow  Icon={ExpandMoreSharpIcon} title ="Show More"/>
        <hr/>
    </div>
  )
}

export default Sidebar;