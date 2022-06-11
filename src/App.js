import Chat from "./components/chat/Chat";
import SideBar from "./components/sideBar/SideBar";


function App() {
  return (
    <div className="bg-[#dadbd3] grid place-items-center h-screen">
      <div className="bg-[#ededed] h-[90vh] w-[90vw] -mt-12 flex shadow-2xl">
        <SideBar />
        <Chat/>
      </div>
    </div>
  );
}

export default App;
