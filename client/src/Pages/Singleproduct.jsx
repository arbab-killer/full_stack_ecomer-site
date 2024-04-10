import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Singleproduct = () => {
  const [data, setdata] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4444/api/v1/product/${id}`);
        setdata(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={data.image} alt={data.name} className="w-full" />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8">
          <h2 className="text-3xl font-semibold">{data.name}</h2>
          <p className="text-gray-700 mt-2">{data.description}</p>
          <p className="text-lg font-bold text-gray-900 mt-4">${data.price}</p>
          {/* Add Add to Cart button here */}
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
