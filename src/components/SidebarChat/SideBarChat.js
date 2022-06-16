import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import db from "../../Firebase";
const SideBarChat = ({ addNewChat, id, name }) => {
  const [seed, setSeed] = useState("");
  const [messages, setMessage] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessage(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("please enter name for chat room");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="flex p-5 border-b hover:bg-gray-200 border-gray-300 cursor-pointer">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="ml-4 ">
          <h2 className="text-lg font-bold mb-2">{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div
      onClick={createChat}
      className="flex p-5 border-y hover:bg-gray-200 border-gray-300 cursor-pointer"
    >
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SideBarChat;
