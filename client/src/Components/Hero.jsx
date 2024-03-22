import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero w-full h-[85vh] bg-[#f0ebe88b] pr-32 ">
        <div className=" w-full h-full bg-hero-pattern bg-no-repeat bg-contain bg-right  ">
          <div className=" h-full w-[40vw] pl-16 pt-36 ">
            <h3 className="text-3xl font-sans mb-2">Trade-In-Offer</h3>
            <h3 className="text-[4vw]  font-medium font-sans tracking-[.001px] leading-tight ">
              Super Value Deals{" "}
              <samp className=" text-5xl tracking-[.001px] font-bold text-[#088178]">
                On All Products{" "}
              </samp>{" "}
            </h3>
            <p className="font-serif text-[15px] m-2 ">
              Save more with coupons & upto 70% off
            </p>
            <Link to="/products">
              <button
                className="relative px-8 ml-2 py-2 rounded-md bg-[#088179d1] isolation-auto z-10 border-2 border-lime-500 text-gray-300 hover:text-green-700 transition-all
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-orange-500  before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
              >
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
