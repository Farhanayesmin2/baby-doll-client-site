import React, { useContext, useEffect, useState } from 'react';
import { FaTrashAlt, FaEye, FaPlus, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Context/UserContext';
import { MdClose, MdShoppingCart } from 'react-icons/md';
import Swal from 'sweetalert2';




const AllToys = () => {
   const [searchQuery, setSearchQuery] = useState('');
  const [toyData, setToyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const { user } = useContext(AuthContext);
 

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
    
    
    // for modal
      const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
    };
   // for alert 
   const handleDelete = (toy) => {
     Swal.fire({
    title: 'Confirmation',
    text: 'Are you sure you want to delete this toy?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      // Perform the delete action here
      // You can show a toast or perform any other necessary actions
      toast.success('Toy deleted successfully');
    }
  });
};
 





  return (
    <div className="container mx-auto py-5">
      <h1 className="text-2xl font-bold mb-4">All Toys</h1>
      <div className="mb-4">
        <input
          type="text"
          id="searchInput"
          className="border border-gray-300 rounded px-4 py-2 w-[100%]"
          placeholder="Search by Toy Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <table className="w-[100%] border">
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
             <td className="border px-4 py-2">{toy.sellerName ? toy.sellerName : '-'}</td>
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
                      


                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <FaEye className="inline-block mr-1" />
                 Details
                      </button> */}

                      {user?.uid ? (<Link
                          to=""
        //   to={`/alltoys/${toy._id}`}
          type="button"
          className="w-auto bg-gradient-to-r from-[#56d3c4] via-pink-100 to-[#56d3c4] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 text-center mr-2 mb-2 rounded-xl py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300"
          onClick={() => openModal(toy)}
        >
        <FaEye className="inline-block mr-1" />
                 Details
        </Link> 
         
      ) : (
         <Link
          to={{
            pathname: '/login',
  
    state: { from: location },
                          
            
                        }}
                        replace={true}
          type="button"
          className="w-[50%] bg-gradient-to-r from-[#56d3c4] via-pink-100 to-[#56d3c4] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 text-center mr-2 mb-2 rounded-xl py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300"
        >
          View Details
        </Link>
      )}






                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
      <FaPlus className="inline-block mr-1" />
      My Toy
    </button>
                <button  onClick={() => handleDelete(toy)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                  <FaTrashAlt className="inline-block mr-1" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
          </table>
      
     {selectedItem && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4 overflow-x-hidden overflow-y-auto">
    <div className="card w-full md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] bg-base-100 shadow-xl">
      {/* Close Button */}
      <div className="flex justify-end">
        <span onClick={closeModal} className="bg-red-700 cursor-pointer p-2 text-white rounded-full hover:bg-purple-700">
          <MdClose size={24} />
        </span>
      </div>
      <div className="card-body">
        <div className="md:flex">
          {/* Image */}
          <div className="md:w-1/2">
            <img src={selectedItem.picture} alt={selectedItem.name} className="object-cover h-64 w-full md:h-auto" />
          </div>
          {/* Details */}
          <div className="md:w-1/2 p-4 md:p-6">
            <h2 className="text-xl font-semibold mb-2">{selectedItem.name}</h2>
            <p className="text-gray-600 mb-2">
              Seller: {user.displayName ? user.displayName : selectedItem.seller}
            </p>
            <p className="text-gray-600 mb-2">
              Email: {user.email ? user.email : selectedItem.email}
            </p>
            <p className="text-gray-600 mb-2">Price: ${selectedItem.price}</p>
            <div className="flex items-center mb-2">
              <div className="flex items-center mb-2">
                <p className="text-gray-600">Rating: {selectedItem.rating}</p>
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar
                    key={i}
                    className={`text-yellow-500 ${
                      selectedItem.rating >= i ? "fill-current" : "fill-current text-gray-300 hidden"
                    }`}
                  />
                ))}
                {selectedItem.rating % 1 !== 0 && (
                  <FaStarHalfAlt className="text-yellow-500 fill-current" />
                )}
              </div>
            </div>
            <p className="text-gray-600 mb-2">Available Quantity: {selectedItem.availableQuantity}</p>
            <p className="text-gray-600">{selectedItem.description}</p>
            <div className="mt-4">
              <button className="btn btn-primary">
                Shop Now <MdShoppingCart size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      <ToastContainer />  
    </div>
  );
};

export default AllToys;
