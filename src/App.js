
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./components/chat/Chat";
import { Login } from "./components/Login/Login";
import reducer, { initialState } from "./components/Reducer/reducer";
import SideBar from "./components/sideBar/SideBar";
import {
  StateProvider,
  useStatevalue,
} from "./components/StateProvider/StateProvider";

function App() {
  const[{user},dispatch]=useStatevalue();

  return (
  
      
        <div className="bg-[#dadbd3] grid place-items-center h-screen">
          {!user ? (
            <Login />
          ) : (
            <div className="bg-[#ededed] h-[90vh] w-[90vw] -mt-12 flex shadow-2xl">
              <BrowserRouter>
                <SideBar />
                <Routes>
                  <Route path="/rooms/:roomId" element={<Chat />} />
                  <Route path="/app" element={<Chat />} />
                </Routes>
              </BrowserRouter>
            </div>
          )}
        </div>
      
   
  );
}

export default App;
