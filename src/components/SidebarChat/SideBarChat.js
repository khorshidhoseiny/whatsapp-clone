import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
const SideBarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName=prompt("please enter name for chat");
    if(roomName){

    }
  };
  return !addNewChat ? (
    <div className="flex p-5 border-b hover:bg-gray-200 border-gray-300 cursor-pointer">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="ml-4 ">
        <h2 className="text-lg mb-2">Room Name</h2>
        <p>Last Message ...</p>
      </div>
    </div>
  ) : (
    <div
      onClick={createChat}
      className="flex p-5 border-b hover:bg-gray-200 border-gray-300 cursor-pointer"
    >
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SideBarChat;
