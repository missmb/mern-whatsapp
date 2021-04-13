import React from 'react';
import sidebar from './sidebar.css';
import { Avatar } from '@material-ui/core';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat_info">
                <h2>RoomName</h2>
                <p>This is the Last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
