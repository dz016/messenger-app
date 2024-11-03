const Detail = () => {
  return (
    <>
      <div className="flex-[1] details flex  items-center justify-center">
        <div className="user flex items-center  flex-col gap-5">
          <img src="./avatar.png" alt="" className=" rounded-xl " />

          <h1 className="text-white text-3xl font-semibold">John Doe</h1>
          <p className="text-gray-400 text-xs">Lorem ipsum dolor sitsdfs</p>
          <br />
          <br />

          <button className="block p-2 bg-red-600 rounded text-white text-md font-bold w-full bg-opacity-75 hover:bg-opacity-100">
            Block User
          </button>

          <button className="block p-2 bg-blue-600 rounded text-white text-md font-bold w-full bg-opacity-75 hover:bg-opacity-100">
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
