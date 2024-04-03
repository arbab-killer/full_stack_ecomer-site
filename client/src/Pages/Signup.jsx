import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../Context";
import { Backendurl } from "../../Constant";
import Loding from "../Components/Loding";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const { settoken } = useContext(Context);
  const [loding, setloding] = useState(false);
  const [user, setsuser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const onchanehandler = (e) => {
    setsuser({ ...user, [e.target.name]: e.target.value });
  };

  const signupcontrolar = async (e) => {
    e.preventDefault();
    if (
      !(user.name && user.email && user.password && user.phone && user.address)
    ) {
      return toast.error("All fields are required");
    }
    try {
      setloding(true);
      const data = await axios.post(`${Backendurl}/signup`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (localStorage.getItem) {
        await localStorage.removeItem("token");
      }
      await localStorage.setItem("token", data.data.token);
      await settoken(localStorage.getItem("token"));
      setloding(false);
      navigate("/");
      toast.success(data.data.message);
    } catch (error) {
      console.log(error.message);
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
          Sign in to your account
        </p>
        <form onSubmit={signupcontrolar} className="space-y-6">
          <div className="relative">
            <input
              onChange={onchanehandler}
              value={user.name}
              placeholder="arbab"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required=""
              id="name"
              name="name"
              type="text"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              id="name"
            >
              Name
            </label>
          </div>
          <div className="relative">
            <input
              onChange={onchanehandler}
              value={user.email}
              placeholder="john@example.com"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required=""
              id="email"
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
              onChange={onchanehandler}
              value={user.phone}
              placeholder="Enter your phone number"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required=""
              id="phone"
              name="phone"
              type="number"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              id="phone"
            >
              Phone Number
            </label>
          </div>

          <div className="relative">
            <input
              onChange={onchanehandler}
              value={user.password}
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required=""
              id="password"
              name="password"
              type="password"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              id="password"
            >
              Password
            </label>
          </div>
          <div className="relative">
            <textarea
              onChange={onchanehandler}
              value={user.address}
              id="address"
              name="address"
              rows="2"
              cols="50"
              placeholder="Enter your address"
              className="peer p-4 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-700"
              required=""
              type="text"
            />{" "}
            <label
              className="absolute left-4 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              id="password"
            >
              Address
            </label>
          </div>
          <button
            className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="text-center text-gray-300">
          <pre> You have no account?</pre>
          <Link
            className="text-purple-300 hover:text-purple-500 hover:underline"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
