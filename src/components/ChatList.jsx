import { useState } from "react";
import AddUser from "./AddUser";
const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <>
      <div className="chatlist  overflow-scroll">
        <div className="search flex itmes-center p-5 justify-between gap-2">
          <div className="searchbar flex items-center  bg-green-800 bg-opacity-70 gap-2 px-2 py-1 rounded-md flex-1 justify-start">
            <img src="./search.png" alt="" height={20} width={20} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent  outline-none text-white placeholder-gray-400 flex-1"
            />
          </div>
          <img
            src={addMode ? "./minus.png" : "./plus.png"}
            alt=""
            height={20}
            width={20}
            className="self-center cursor-pointer "
            onClick={() => {
              setAddMode((prev) => !prev);
            }}
          />
        </div>

        <div className="item">
          <img
            src="./avatar.png"
            alt=""
            width={40}
            height={40}
            className=" rounded-[50%]"
          />
          <div>
            {" "}
            <span className="username text-md font-bold"> Dawood</span>
            <p className="text-xs">Hi</p>
          </div>
        </div>

        <div className="item">
          <img
            src="./avatar.png"
            alt=""
            width={40}
            height={40}
            className=" rounded-[50%]"
          />
          <div>
            {" "}
            <span className="username text-md font-bold"> Tuba</span>
            <p className="text-xs">Hello</p>
          </div>
        </div>
        {addMode && <AddUser></AddUser>}
      </div>
    </>
  );
};

export default ChatList;
