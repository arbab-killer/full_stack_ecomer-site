import img from "../assets/logo.png";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  const nagationtext = ["Home", "Shop", "Blog", "About", "Contact"];
  return (
    <>
      <div className="navbar h-[15vh] shadow-lg shadow-gray-400  w-full flex items-center p-10 justify-between bg-[#F1F1F1]">
        <div className="left w-[100px]">
          <Link to={"/"}>
            <img src={img} alt="logo" loading="lazy" />
          </Link>
        </div>
        <div className="w-[350px] h-[40px]   overflow-hidden flex items-center justify-between">
          <input
            className="h-full border-2 w-full   font-serif rounded-tl-[13px] p-4 text-xl rounded-bl-[13px] bottom-black-1"
            type="text"
            placeholder="Search"
            name="quary"
          />
          {/* <div className="w-[350px] h-[40vh]  absolute bg-red-500"></div> */}

          <button className="h-full w-[50px] text-2xl bg-orange-500 rounded-tr-[13px] rounded-br-[13px] p-2 ">
            {" "}
            <LuSearch />
          </button>
        </div>
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
            <Link to="/cart">
              <IoCart className="text-3xl  hover:cursor-pointer hover:text-green-700" />
            </Link>
            <Link to="/wishlist">
              <IoMdHeart className="text-3xl  hover:cursor-pointer hover:text-green-700" />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
