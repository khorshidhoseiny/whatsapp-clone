import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import Avatar from '@mui/material/Avatar';
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SideBarChat from "../SidebarChat/SideBarChat";
const SideBar = () => {
  return (
    <div className="flex-[0.40] flex flex-col ">
      <div className="flex justify-between items-center p-5 border-r border-gray-300">
        <Avatar />
        {/* SideBar header */}
        <div className="flex items-center justify-between min-w-[10vw] ">
          <IconButton>
            <DonutLargeIcon className="fill-gray-400 mr-[1vw] text-2xl" />
          </IconButton>
          <IconButton>
            <ChatIcon className="fill-gray-400 mr-[1vw] text-2xl" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="fill-gray-400 mr-[1vw] text-2xl" />
          </IconButton>
        </div>
      </div>
      {/* SideBarSearch */}
      <div className="flex items-center justify-center bg-gray-200 h-10  p-3">
        <div className="flex items-center bg-white rounded-xl w-full px-2 h-9 ">
          <SearchIcon className="text-gray-400" />
          <input
            type="text"
            className="border-none bg-transparent"
            placeholder="Search or start new chat"
          />
        </div>
      </div>
      {/* SideBarChat */}
      <div className="flex-1 bg-white">
        <SideBarChat/>
        <SideBarChat/>
        <SideBarChat/>
        <SideBarChat/>
        
      </div>
    </div>
  );
};

export default SideBar;
