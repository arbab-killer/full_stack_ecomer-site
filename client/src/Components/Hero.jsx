
import Btn from "./Btn";

const Hero = () => {
  return (
    <>
      <div className="hero w-full h-[85vh] bg-[#f0ebe88b] pr-32 ">
        <div className=" w-full h-full bg-hero-pattern bg-no-repeat bg-contain bg-right  ">
          <div className=" h-full w-[40vw] pl-16 pt-36 ">
            <h3 className="text-3xl font-sans mb-2">Trade-In-Offer</h3>
            <h3 className="text-[4vw]  font-medium font-sans tracking-[.001px] leading-tight ">
              Super Value Deals{" "}
              <samp className=" text-5xl tracking-tight font-bold text-[#088178]">
                On All Products{" "}
              </samp>{" "}
            </h3>
            <p className="font-serif text-[15px] m-2 ">
              Save more with coupons & upto 70% off
            </p>
            <Btn />
          </div>
        </div>
      </div>
      <hr className=" ml-5 h-[2px] bg-[#2b1f19] m-5" />
    </>
  );
};

export default Hero;
