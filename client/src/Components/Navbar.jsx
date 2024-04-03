import img from "../assets/logo.png";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import Search from "./Search";
import { Context } from "../Context";
import { useContext } from "react";
import toast from "react-hot-toast";
const Navbar = () => {
  const { token ,settoken } = useContext(Context);
  
  const nagationtext = ["Home", "Shop", "Blog", "About", "Contact Us"];
  return (
    <>
      <div className="navbar h-[15vh] shadow-lg shadow-gray-400  w-full flex items-center p-10 justify-between bg-[#F1F1F1]">
        <div className="left w-[100px]">
          <Link to={"/count"}>
            <img src={img} alt="logo" loading="lazy" />
          </Link>
        </div>
        {/* serch conponent */}

        <div className="right">
          <ul className="list-none flex justify-center items-center gap-8 ">
            {nagationtext.map((item, index) => {
              return (
                <li key={index} className="relative">
                  <Link
                    className="text-xl font-medium hover:after:contents[''] after:transition-all  after:transition-duration-1000 ease-in after:bg-gradient-to-tr hover:after:w-1/2 after:h-[3px] after:absolute after:bottom-0 after:left-0 font-sans hover:cursor-pointer hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-t from-blue-600 to-red-500 "
                    to={`/${item}`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
            <Search />
            <Link to="/cart">
              <IoCart className="text-3xl  hover:cursor-pointer hover:text-green-700" />
            </Link>
            <Link to="/wishlist">
              <IoMdHeart className="text-3xl  hover:cursor-pointer hover:text-green-700" />
            </Link>
            
              {token===null ? (
               <Link to="/signup"> <button className="text-[16px] font-serif  bg-gray-400 rounded-md hover:cursor-pointer w-[110px] hover:border-[1px] p-1 border-lime-500 hover:text-green-700">
                  Signup/Login
                </button></Link>
              ) : (
                <button onClick={() =>{ 
                  settoken(null)
                  localStorage.clear()
                  toast.success("Logout Successfully")
                  }} className="text-[16px] font-serif bg-purple-700 rounded-md hover:cursor-pointer w-[110px] hover:border-[1px] p-1 border-lime-500 hover:text-green-700">
                  Logout
                </button>
              )}
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
