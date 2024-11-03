import Picker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [myMessage, useMyMessage] = useState(true);
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behaviour: "instant" });
    }
  }, []);

  const onEmojiClick = (event) => {
    setInputStr((prevInput) => {
      console.log(prevInput + event.emoji);
      return prevInput + event.emoji;
    });

    setShowPicker(false);
  };
  return (
    <>
      <div className="flex-[2]  border-l-[1px] border-r-[1px] border-gray-600  flex flex-col">
        <div className="top p-5 flex items-center justify-between border-b-[1px] border-gray-600">
          <div className="user flex items-center gap-2  ">
            <img
              src="./avatar.png"
              alt=""
              width={50}
              height={50}
              className=" rounded-[50%]"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-2xl font-semibold">John Doe</h1>
              <p className="text-gray-300 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="icons flex gap-3">
            <img
              src="./phone.png"
              alt=""
              width={20}
              height={20}
              className=" object-cover"
            />
            <img
              src="./video.png"
              alt=""
              width={20}
              height={20}
              className=" object-cover"
            />
            <img
              src="./info.png"
              alt=""
              width={20}
              height={20}
              className=" object-cover"
            />
          </div>
        </div>
        <div className="center flex-1 overflow-scroll text-white flex flex-col p-5  gap-10">
          <MessageComponent isOwnMessage={false} />
          <MessageComponent isOwnMessage={true} />

          <MessageComponent isOwnMessage={false} />
          <MessageComponent isOwnMessage={true} />
          <MessageComponent isOwnMessage={true} />

          <MessageComponent isOwnMessage={false} />
          <div ref={endRef}></div>
        </div>

        <div className="bottom p-5 flex items-center justify-between gap-3 border-t-[1px] border-gray-600">
          <div className="icons flex gap-2">
            <img
              src="./img.png"
              alt=""
              width={20}
              height={20}
              className="object-cover cursor-pointer"
            />
            <img
              src="./camera.png"
              alt=""
              width={20}
              height={20}
              className="object-cover cursor-pointer"
            />
            <img
              src="./mic.png"
              alt=""
              width={20}
              height={20}
              className="object-cover cursor-pointer"
            />
          </div>

          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-green-900 bg-opacity-90 p-3 rounded text-md outline-none text-white placeholder-gray-400 "
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
          />

          <div className="emoji cursor-pointer relative">
            <img
              src="./emoji.png"
              alt=""
              width={20}
              height={20}
              className="object-cover"
              onClick={() => setShowPicker((val) => !val)}
            />
            <div className="picker  absolute  bottom-3 left-0">
              {showPicker && (
                <Picker
                  pickerStyle={{ width: "100%" }}
                  onEmojiClick={onEmojiClick}
                />
              )}
            </div>
          </div>
          <button className="send-btn bg-green-600 rounded p-3 text-white hover:bg-green-700 transition-colors duration-100 ease-linear">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;

function MessageComponent({ isOwnMessage }) {
  return (
    <div
      className={`generalMessage ${
        isOwnMessage ? "ownMessage" : "notownMessage"
      }`}
    >
      {/* Conditionally render avatar image based on showAvatar */}
      {!isOwnMessage && (
        <img
          src="./avatar.png"
          alt="avatar"
          width={20}
          height={20}
          className="self-start  rounded-[50%]"
        />
      )}

      <div className="flex flex-col gap-1">
        {/* <img
          src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-foliage-face-1036x780.jpg"
          alt=""
          className=" rounded"
        /> */}

        <p className={`generalText ${isOwnMessage ? "ownText" : "notOwnText"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          inventore, laudantium molestias iusto quod, reprehenderit consequuntur
          ex quo quia dicta fugiat eveniet voluptatum consequatur? Eligendi.
        </p>
        <span>1 min ago</span>
      </div>
    </div>
  );
}
