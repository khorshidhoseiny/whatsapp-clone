import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SideBarChat from "../SidebarChat/SideBarChat";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import React, { useEffect, useState } from "react";
import AttachFile from "@mui/icons-material/AttachFile";
function Chat() {
    const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="flex-[0.60] flex flex-col ">
      {/* chat Header */}
      <div className="p-5 flex items-center border-b border-gray-200">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="flex-1 pl-5">
            <h1 className="font-bold mb-1">room name</h1>
            <p className="text-gray-400">last seen at ...</p>
            </div>
            {/* header right */}
            <div className="flex justify-between min-w-[100px]">
            <IconButton>
            <SearchIcon className="fill-gray-400 mr-[1vw] text-2xl" />
          </IconButton>
          <IconButton>
            <AttachFile className="fill-gray-400 mr-[1vw] text-2xl" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="fill-gray-400 mr-[1vw] text-2xl" />
          </IconButton>
            </div>
        </div>
      
      {/* chat body */}
      <div className="bg-hero-pattern bg-repeat bg-center overflow-scroll p-8 flex-1">
        <p className="relative mb-8 w-fit min-w-[100px] rounded-lg p-[10px] text-base bg-white">Hey Guys</p>
        <p className="relative mb-8 w-fit min-w-[100px] rounded-lg p-[10px] text-base bg-white">Hey Guys</p>
        <p className="relative mb-8 w-fit min-w-[100px] rounded-lg p-[10px] text-base bg-white">Hey Guys</p>
      </div>
      {/* chat footer */}
      <div></div>
    </div>
  );
}

export default Chat;
