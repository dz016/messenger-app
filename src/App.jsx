import Chat from "./components/Chat.jsx";
import List from "./components/List.jsx";
import Detail from "./components/Detail.jsx";
import Auth from "./components/Auth.jsx";

import { useState } from "react";
import Notification from "./components/Notification.jsx";

export default function App() {
  const [user, setUser] = useState(false);
  return (
    <main
      className="relative min-h-screen bg-cover bg-center  flex  items-center justify-center "
      style={{
        backgroundImage: `url('../public/bg.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 bg-grad via"></div>

      <section className=" h-[90vh] w-[80vw]  z-50 bg-slate-800 bg-opacity-50 backdrop-blur-sm   border border-white border-opacity-15  rounded-xl flex">
        {user ? (
          <>
            {" "}
            <List></List>
            <Chat></Chat>
            <Detail></Detail>
          </>
        ) : (
          <Auth></Auth>
        )}
        <Notification></Notification>
      </section>
    </main>
  );
}
