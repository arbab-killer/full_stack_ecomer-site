import { Link } from "react-router-dom";

const Btn = () => {
  return (
    <Link to="/products">
      <button
        className="relative px-8 ml-2 py-2  rounded-md bg-[#088179d1] isolation-auto z-10 border-2 border-lime-500 text-gray-300 hover:text-green-700 transition-all
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-orange-500  before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
      >
        Shop Now
      </button>
    </Link>
  );
};

export default Btn;
