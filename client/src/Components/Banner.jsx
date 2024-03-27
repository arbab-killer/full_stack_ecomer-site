import Btn from "./Btn";

const Banner = () => {
  return (
    <>
      <hr className=" ml-5 h-[2px] bg-[#2b1f19] m-5" />
      <div className="text-center p-10">
        <h1 className="text-5xl font-sans font-bold">New Arrivals</h1>
        <p className="text-xl font-sans font-light">
          Sammar Collaction New Morden Design
        </p>
      </div>

      <div className="banner  h-[80vh] p-10 gap-[2vw] flex-wrap flex justify-between items-center w-full ">
        <div className="right rounded-md relative min-w-[48%] h-full bg-banner-pattern-r bg-no-repeat bg-right-top  bg-[#ED7B4E]  ">
          <div className="p-10 absolute bottom-2">
            <h3 className="text-3xl font-sans font-bold text-white ">
              Crazy Deal{" "}
            </h3>
            <h1 className="text-5xl font-sans font-bold text-white">
              Buy 1 Get 1 Free
            </h1>
            <p className="text-xl font-sans font-light text-white">
              The Best Classic Dress On One Sale At Cara
            </p>
            <Btn />
          </div>
        </div>
        <div className="left rounded-md relative min-w-[48%] bg-no-repeat md:bg-cover  bg-contain h-full bg-banner-pattern ">
          <div className="p-10 absolute bottom-1">
            <h3 className="text-3xl font-sans font-bold text-slate-600">
              Spring/Sammar{" "}
            </h3>
            <h1 className="text-5xl font-sans font-bold text-slate-600">
              Up Comming Seasion
            </h1>
            <p className="text-xl font-sans font-light text-slate-600">
              The Best Classic Dress On One Sale At Cara
            </p>
            <Btn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
