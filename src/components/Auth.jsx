import { useState } from "react";
import { toast } from "react-toastify";

export default function AuthPage() {
  const [avatar, setAvatar] = useState(null);
  const handleAvatar = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);
    console.log(username, email, password);
  };

  return (
    <>
      {/* Left Section - Register */}
      <div className=" p-8  flex flex-col items-center justify-center text-white flex-1">
        <h2 className="text-xl font-bold mb-6">Register</h2>

        <form
          className="flex flex-col w-3/4 space-y-4"
          onSubmit={handleRegister}
        >
          <div className="flex items-center gap-4">
            <img
              src={avatar ? avatar : "./avatar.png "}
              alt=""
              className="rounded-[50%] w-20 h-20 bg-cover object-cover opacity-80"
            />
            <label htmlFor="file" className=" cursor-pointer underline">
              Choose Avatar
            </label>
          </div>

          <input
            type="file"
            id="file"
            className="  hidden"
            onChange={handleAvatar}
          />
          <input
            type="text"
            placeholder="username"
            name="username"
            className="p-2 rounded bg-green-900 placeholder-green-100 text-white bg-opacity-80"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            className="p-2 rounded bg-green-900 placeholder-green-100 text-white bg-opacity-80"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="p-2 rounded bg-green-900 placeholder-green-100 text-white bg-opacity-80"
          />
          <button
            type="submit"
            className="p-3 rounded bg-green-600 hover:bg-opacity-100 hover:bg-green-700 font-semibold"
          >
            Register
          </button>
        </form>
      </div>
      <div className="w-[2px] h-[80%] bg-slate-600 self-center"></div>

      {/* Right Section - Login */}
      <div className="flex flex-col items-center justify-center text-white flex-1 ">
        <h2 className="text-xl font-bold mb-6">Welcom Back, Please Login!</h2>

        <form className="flex flex-col w-1/2 gap-5">
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded bg-green-900 placeholder-green-100 text-white bg-opacity-80"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded bg-green-900 placeholder-green-100 text-white bg-opacity-80"
          />
          <button
            type="submit"
            className="p-3 rounded bg-green-600 hover:bg-opacity-100 hover:bg-green-700 font-semibold "
          >
            Login
          </button>
        </form>

        {/* Switch Button */}
      </div>
    </>
  );
}
