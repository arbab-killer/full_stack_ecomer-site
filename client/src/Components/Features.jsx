import { Link } from "react-router-dom";
import buy from "../assets/buy-online.png";
import f24 from "../assets/f24,7.png";
import free from "../assets/free-delivery.png";
import happy from "../assets/happy-delivery.png";
import promotion from "../assets/promotion.png";
import save from "../assets/save-time.png";
const Features = () => {
  const features = [
    {
      img: free,
      text: "Free Delivery",
    },
    {
      img: buy,
      text: "Buy online",
    },
    {
      img: promotion,
      text: "Promotions",
    },
    {
      img: save,
      text: "Save Time",
    },
    {
      img: happy,
      text: "Happness",
    },
    {
      img: f24,
      text: "24/7 Support",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-row items-center overflow-x-scroll no-scrollbar p-20 gap-20">
        {features.map((item, index) => {
          return (
            <div
              className=" p-4  max-w-[13rem] min-w-[12rem] h-[15rem] bg-[#f8f6f6dc] border-black border-[1.5px] rounded-lg transition-all ease-in  hover:shadow-md shadow-gray-600"
              key={index}
            >
              <img
                className="w-full mb-4 h-[70%]"
                src={item.img}
                alt={item.text}
              />
              <Link to="/products" className="w-full h-full">
                <button className="text-center mx-[19px] bg-red-400 p-2 rounded font-sans w-[70%] text-white hover:bg-red-500 transition-all ease-in">
                  {item.text}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <hr className=" ml-5 h-[2px] bg-[#2b1f19]  m-5" />
    </>
  );
};

export default Features;
