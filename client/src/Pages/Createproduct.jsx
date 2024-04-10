// const Createproduct = () => {
//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center h-screen dark">
//         <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
//           <h2 className="text-2xl capitalize font-bold text-gray-200 mb-4">
//            create porduct 
//           </h2>
//           <form className="flex flex-col">
//             <input
//               placeholder="product Name"
//               className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//               type="text"
//               name="name"
//             />
//             <input
//               placeholder="product category"
//               className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//               type="text"
//               name="category"
//             />
//             <input
//               placeholder="enter brand name"
//               className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//               type="text"
//               name="brand"
//             />
//             <input
//               placeholder="Price"
//               className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//               type="number"
//               name="price"
//             />
//             <input
//               placeholder="Price"
//               className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//               type="namber"
//               name="rating"
//             />
//             <input
//               placeholder="quantity"
//               className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//               type="namber"
//               name="countInStock"
//             />
//             <input
//               placeholder="quantity"
//               className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//               type="namber"
//               name="numReviews"
//             />
//             <textarea
//               placeholder="Cover Letter"
//               className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//               name="description"
//               type="text"
//               defaultValue={""}
//             />
//             <input
//               placeholder="Resume"
//               className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//               type="file"
//               name="image"
//             />
//             <button
//               className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
//               type="submit"
//             >
//               create product
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Createproduct;
import axios from "axios";
import { useState } from "react";

const Createproduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    rating: "",
    countInStock: "",
    numReviews: "",
    description: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await axios.post(
        "http://localhost:4444/api/v1/createnewproducts",
        formDataToSend
      );
      console.log("Response:", response.data);
      // Handle success or redirect
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col items-center justify-center h-screen dark">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl capitalize font-bold text-gray-200 mb-4">
            Create product
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col">
            {/* Your input fields */}
            {/* Use handleChange for text inputs and handleFileChange for file input */}
            {/* Example: */}
            <input
              placeholder="Product Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            />
            <input
              placeholder="Price"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            />
            <input
              placeholder="Quantity"
              type="number"
              name="countInStock"
              value={formData.countInStock}
              onChange={handleChange}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            />
            <input
              placeholder="Product Brand"
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            />
            <input
              placeholder="Product Category"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            />
            <input
              placeholder="Rating"
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            />
            <textarea
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            />
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Create Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Createproduct;
