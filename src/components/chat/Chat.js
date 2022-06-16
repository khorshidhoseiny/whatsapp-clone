import { Avatar, IconButton } from "@mui/material";
import "./chat.css";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useEffect, useState } from "react";
import AttachFile from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import { useParams } from "react-router-dom";
import db from "../../Firebase";
import firebase from "firebase/compat/app";
import { useStatevalue } from "../StateProvider/StateProvider";
function Chat() {
  const { roomId } = useParams();
  const [seed, setSeed] = useState("");
  const [{ user }, dispatch] = useStatevalue();
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((db) => db.data()))
        );
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you type >>>", input);

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="flex-[0.60] flex flex-col ">
      {/* chat Header */}
      <div className="p-5 flex items-center border-b border-gray-200">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="flex-1 pl-5">
          <h1 className="font-bold mb-1">{roomName}</h1>
          <p className="text-gray-400">
            last seen at{" "}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
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
        {messages.map((message) => (
          <p
            className={`relative mb-8 w-fit min-w-[100px] rounded-lg px-[10px] text-base bg-white ${
              message.name === user.displayName && "chat__recieve"
            } `}
          >
            <span className="text-sm absolute font-bold -top-5">
              {message.name}
            </span>
            {message.message}
            <span className="ml-3 text-gray-400 justify-end flex items-end text-xs">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      {/* chat footer */}
      <div className="px-1 flex justify-between items-center h-16 border-t border-gray-300 ">
        <InsertEmoticonIcon className="text-gray-400 mx-1" />
        <form className="flex-1 flex ">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className=" outline-none flex-1 rounded-md p-2 focus:border focus:border-green-400"
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage} className="hidden  ">
            Send a Message
          </button>
        </form>

        <MicIcon className="text-gray-400 mx-1" />
      </div>
    </div>
  );
}

export default Chat;
