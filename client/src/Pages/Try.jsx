import { useEffect } from "react";
import axios from "axios";
import { Backendurl } from "../../Constant";

const Try = () => {
  
  useEffect(() => {
    const fatch = async () => {
      const data = await axios.get(`${Backendurl}/user`, {
        headers: {
          authorization: localStorage.getItem('token'),
        },
      });
      console.log(data);
    };
    fatch();
  }, []);

  return <div>try</div>;
};

export default Try;
