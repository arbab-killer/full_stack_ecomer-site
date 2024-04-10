
import axios from 'axios';
import { useEffect, useState } from 'react';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4444/api/v1/allproducts');
        await setProducts(response.data.data[0].image);
        await setLoading(false);
        await console.log(products);
      } catch (error) {
        console.log('Error fetching products:', error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
if (loading){
    return <div>Loading...</div>
}
  return (
    <div>
     <img src='uploads\\1712643251078-82093163.jpg' alt="" />
    </div>
  );
};

export default AllProducts;
