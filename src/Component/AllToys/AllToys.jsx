import React, { useContext, useEffect, useState } from 'react';
import { FaTrashAlt, FaEye, FaPlus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Context/UserContext';



const AllToys = () => {
   const [searchQuery, setSearchQuery] = useState('');
  const [toyData, setToyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(true);

  // Fetch data
  useEffect(() => {
    fetch('http://localhost:5000/alltoys')
      .then((res) => res.json())
      .then((data) => {
        setToyData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setShowToast(true); // Reset the showToast state when search query changes
  };

  // Filter toys based on search query
  const filteredToys = toyData.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery)
  );

  // Show toast message when no data is found
  useEffect(() => {
    if (showToast && searchQuery && filteredToys.length === 0) {
      toast.error('No matching toy names found', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => setShowToast(false)
      });
    }
  }, [filteredToys, searchQuery, showToast]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Toys</h1>
      <div className="mb-4">
        <input
          type="text"
          id="searchInput"
          className="border border-gray-300 rounded px-4 py-2 w-full"
          placeholder="Search by Toy Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Seller</th>
            <th className="border px-4 py-2">Toy Name</th>
            <th className="border px-4 py-2">Sub-category</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Available Quantity</th>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.map((toy) => (
            <tr key={toy.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{toy.sellerName}</td>
              <td className="border px-4 py-2">{toy.name}</td>
              <td className="border px-4 py-2">{toy.subCategoryName}</td>
              <td className="border px-4 py-2">{toy.price}</td>
              <td className="border px-4 py-2">{toy.availableQuantity}</td>
              <td className="border px-4 py-2">
                <img
                  src={toy.picture}
                  alt={toy.name}
                  className="w-10 h-10 object-cover rounded"
                />
              </td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <FaEye className="inline-block mr-1" />
                 Details
                      </button>
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
      <FaPlus className="inline-block mr-1" />
      My Toy
    </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                  <FaTrashAlt className="inline-block mr-1" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
          </table>
      
    
      <ToastContainer />  
    </div>
  );
};

export default AllToys;
