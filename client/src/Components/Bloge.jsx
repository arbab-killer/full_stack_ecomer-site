import { Link } from "react-router-dom";
import "../App.css";

const bloge = ({ title, body, imgurl, navgat, createdat }) => {
  return (
    <div className=" p-6 w-[90%] m-auto gap-6 h-full">
      <div className="post m-2">
        <img src={imgurl} alt={title} /> {/*Image*/}
        <div className="title">
          <b>{title}</b>
        </div>{" "}
        {/*Post title*/}
        <div className="description">{body}</div> {/* Post description*/}
        <div className="date">{createdat}</div> {/*Post data*/}
        <div className="follow">
          <Link to={navgat}>
            <b>Learn more</b>
          </Link>
        </div>{" "}
      </div>
    </div>
  );
};

export default bloge;
