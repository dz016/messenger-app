const UserInfo = () => {
  return (
    <>
      <div className="p-5 flex items-center justify-between">
        <div className="user flex items-center gap-2  ">
          <img
            src="./avatar.png"
            alt=""
            width={30}
            height={30}
            className=" rounded-[50%]"
          />
          <h1 className="text-white text-xl font-semibold">John Doe</h1>
        </div>
        <div className="icons flex gap-3">
          <img src="./more.png" alt="" width={20} height={20} />
          <img src="./video.png" alt="" width={20} height={20} />
          <img src="./edit.png" alt="" width={20} height={20} />
        </div>
      </div>
    </>
  );
};

export default UserInfo;
