import { useEffect } from "react";
import axios from "axios";
import { Backendurl } from "../../Constant";
import { useContext } from "react";
import { Context } from "../Context";
const Try = () => {
  const { token } = useContext(Context);
  useEffect(() => {
    const fatch = async () => {
      const data = await axios.get(`${Backendurl}/user`, {
        headers: {
          authorization: token,
        },
      });
      console.log(data);
    };
    fatch();
  }, [token]);

  return <div>try</div>;
};

export default Try;
