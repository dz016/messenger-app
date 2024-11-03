const AddUser = () => {
  return (
    <>
      <div className=" w-max h-max p-8 bg-slate-900 bg-opacity-90 absolute top-[0]  left-[0] bottom-[0] right-[0] m-auto rounded">
        <form action="">
          <input
            type="text"
            placeholder="username"
            name="username"
            className=" p-1 rounded bg-green-800 bg-opacity-65  outline-none text-white placeholder-gray-200 flex-1"
          />
          <button className="send-btn bg-green-600 rounded p-1 text-white hover:bg-green-700 transition-colors duration-100 ease-linear ml-1">
            Search
          </button>
        </form>
        <br />

        <div className="user flex justify-between">
          <div className="details">
            <img
              src="./avatar.png"
              alt=""
              width={45}
              height={45}
              className="rounded-[50%]"
            />
            <div className="username"></div>
          </div>
          <button className="send-btn bg-green-600 rounded p-1 text-white hover:bg-green-700 transition-colors duration-100 ease-linear self-center">
            {" "}
            Add User
          </button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
