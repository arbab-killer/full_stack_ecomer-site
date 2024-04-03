import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaYoutube,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="h-[70vh] capitalize w-full bg-[#DCD9D9]">
      <div className="h-full w-full flex justify-between p-10">
        <div className=" text-black flex flex-col justify-center  items-left  ">
          <h4 className="text-3xl">Contect </h4>
          <div className="text-xl">
            <strong>Address :- </strong>
            <samp>543 Wesingtont Road Street 92 Sun Frances Meerut</samp>
          </div>
          <div className="text-xl">
            <strong>Phone-No :- </strong>
            <p> +99 112930 494 / (+11) 9863098136</p>
          </div>
          <div>
            <strong>Open-time :- </strong>
            <p>8:00am Morning To 11:00pm Evening</p>
          </div>
          <div className="text-xl">
            <strong>Follow us</strong>
          </div>
          <div className="flex  gap-2">
            {" "}
            <FaInstagram />
            <FaFacebookSquare />
            <FaLinkedin />
            <FaYoutube />
            <FaSquareXTwitter />
          </div>
        </div>
        <div className=" text-black flex flex-col justify-center items-left">
          <h4 className="text-3xl">My-account</h4>
          <div>
            {" "}
            <strong>
              <Link to="/cart">view card</Link>
            </strong>
          </div>
          <div>
            {" "}
            <strong>
              <Link to="/signup">sign in</Link>
            </strong>{" "}
          </div>
          <div>
            {" "}
            <strong>
              <Link to="/wishlist">wishlist</Link>
            </strong>
          </div>
          <div>
            <strong>track my order</strong>
          </div>
          <div>
            {" "}
            <strong>
              <Link to="/contact">help</Link>
            </strong>
          </div>
        </div>
        <div className=" text-black flex flex-col justify-center items-left">
          <h4 className="text-3xl">About</h4>
          <div>
            <strong>about us</strong>
          </div>
          <div>
            <strong>delivery information</strong>
          </div>
          <div>
            {" "}
            <strong>private police</strong>
          </div>
          <div>
            {" "}
            <strong>term and conditionsterm and conditions</strong>
          </div>
          <div>
            <strong> connet us</strong>{" "}
          </div>
        </div>
        <div className=" text-black flex flex-col justify-center items-left">
          <h4 className="text-3xl">Install app</h4>
          <div>
            {" "}
            <strong>form app store and playstore</strong>
          </div>
          <div className="text-3xl">
            <IoLogoGooglePlaystore />
          </div>
          <div className="text-3xl">
            <IoLogoAppleAppstore />
          </div>
          <div> payment getway </div>
          <div className="flex  text-2xl gap-2">
            {" "}
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcVisa />
            <FaCcPaypal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
