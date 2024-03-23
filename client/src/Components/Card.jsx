import { IoCart, IoStarSharp } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";

const Card = ({ productUrl, productName, productPrice, productRating }) => {
  return (
    <>
      <div className="h-[330px] w-[230px] p-4  rounded-md hover:shadow-xl hover:shadow-gray-600 transition-all ease-in duration-100 bg-white border-2 border-black">
        <div className="imgdiv mb-1  w-full h-[60%]  ">
          <img
            className="w-full h-full rounded-md"
            src={productUrl}
            alt="product"
          />
        </div>
        <h4 className="  text-center text-4xl font-mono font-[500]">
          {productName}
        </h4>
        <div className="text-left flex items-center justify-left  font-bold mt-2 mb-2 text-2xl">
          {(() => {
            switch (productRating) {
              case 1:
                return (
                  <>
                    <IoStarSharp  color="orange"  />
                  </>
                );
              case 1.5:
                return (
                  <>
                    <IoStarSharp  color="orange"/> <IoIosStarHalf color="orange" />
                  </>
                );
              case 2:
                return (
                  <>
                    <IoStarSharp  color="orange"/> <IoStarSharp color="orange" />
                  </>
                );
              case 2.5:
                return (
                  <>
                    <IoStarSharp color="orange" /> <IoStarSharp color="orange" /> <IoIosStarHalf color="orange" />
                  </>
                );
              case 3:
                return (
                  <>
                    <IoStarSharp color="orange" /> <IoStarSharp color="orange" /> <IoStarSharp color="orange" />
                  </>
                );
                
              case 3.5:
                return (
                  <>
                    <IoStarSharp  color="orange"/> <IoStarSharp  color="orange"/> <IoStarSharp color="orange" />{" "}
                    <IoIosStarHalf color="orange" />
                  </>
                );
              case 4:
                return (
                  <>
                    <IoStarSharp color="orange" /> <IoStarSharp color="orange"p /> <IoStarSharp color="orange" />{" "}
                    <IoStarSharp  color="orange"/>
                  </>
                );
              case 4.5:
                return (
                  <>
                    <IoStarSharp color="orange" /> <IoStarSharp color="orange" /> <IoStarSharp color="orange" />{" "}
                    <IoStarSharp color="orange" /> <IoIosStarHalf color="orange" />
                  </>
                );
              case 5:
                return (
                  <>
                    <IoStarSharp color="orange" /> <IoStarSharp color="orange" /> <IoStarSharp color="orange" />{" "}
                    <IoStarSharp  color="orange"/> <IoStarSharp  color="orange"/>
                  </>
                );
            }
          })()}
        </div>
        <div className="flex justify-between">
          <div className=" text-2xl font-bold font-sans">{productPrice}</div>
          <div>
            <button className="  text-3xl">
              <IoCart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
