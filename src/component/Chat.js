import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, SearchOutlined } from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import React from "react";
import "./chat.css";
import MicIcon from "@material-ui/icons/Mic";
function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />

        <div className="chat_headerInfo">
          <h3>RoomName</h3>
          <p>Last seen at ....</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Sonny</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat_message">
          <span className="chat_name">Sonny</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat_message chat_reciever">
          <span className="chat_name">Sonny</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            placeholder="Type a message"
            type="text"
          />
          <button type="submit">
            Send a Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
