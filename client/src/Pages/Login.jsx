import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Backendurl } from "../../Constant";
import toast from "react-hot-toast";
import Loding from "../Components/Loding";
const Login = () => {
  
  const navigate = useNavigate();
  const [loding, setloding] = useState(false);
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  

  const onchanehandler = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const loginhandler = async (e) => {
    e.preventDefault();
    try {
      setloding(true);
      const data = await axios.post(`${Backendurl}/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);
      if (localStorage.getItem) {
        localStorage.removeItem("token");
      }
      await localStorage.setItem("token", data.data.token);
      await setloding(false);
      toast.success(data.data.message);
      navigate("/home");
    } catch (error) {
      if (error.message) {
        toast.error("wrong credentials");
      }
      setloding(false);
    }
  };
  if (loding) {
    return <Loding />;
  }

  return (
    <>
      <div
        style={{ animation: "slideInFromLeft 1s ease-out" }}
        className="max-w-md w-full bg-gradient-to-r m-auto mt-3 mb-9  from-blue-700 to-purple-700 rounded-xl hover:shadow-2xl overflow-hidden p-6 space-y-8"
      >
        <h2
          style={{ animation: "appear 2s ease-out" }}
          className="text-center text-4xl font-extrabold text-white"
        >
          Welcome
        </h2>
        <p
          style={{ animation: "appear 3s ease-out" }}
          className="text-center text-gray-200"
        >
          Login to your account
        </p>
        <form onSubmit={loginhandler} className="space-y-6">
          <div className="relative">
            <input
              placeholder="john@example.com"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required=""
              id="email"
              onChange={onchanehandler}
              value={user.email}
              name="email"
              type="email"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              id="email"
            >
              Email address
            </label>
          </div>

          <div className="relative">
            <input
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required=""
              id="password"
              name="password"
              onChange={onchanehandler}
              value={user.password}
              type="password"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              id="password"
            >
              Password
            </label>
          </div>

          <button
            className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="text-center text-gray-300">
          <pre> Don‘t have an account?</pre>
          <Link
            className="text-purple-300 hover:text-purple-500 hover:underline"
            to="/signup"
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
