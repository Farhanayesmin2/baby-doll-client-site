import React, { useContext, useEffect, useState } from "react";
import {
  FaTrashAlt,
  FaEye,
  FaPlus,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaSync } from "react-icons/fa";
import { MdClose, MdShoppingCart } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";
import Modal from "react-modal";
Modal.setAppElement('#root') //replace #root with your app element
const MyToys = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [toyData, setToyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
const [isLoading, setIsLoading] = useState(false);


  const { user ,Spinner} = useContext(AuthContext);
    
    
 // State for the modal, form fields, and the toy to be updated
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [price, setPrice] = useState('');
  const [availableQuantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
    const [toyId, setToyId] = useState(null);
    
    // Open the modal and prepare to update the given toy
  const openModals = (toy) => {
    setModalIsOpen(true);
    setToyId(toy._id);
    setPrice(toy.price);
    setQuantity(toy.quantity);
    setDescription(toy.description);
  };
const closeModals = () => {
    setModalIsOpen(false);
  };

const handleSubmit = (event) => {
  event.preventDefault();
   setIsLoading(true);  // start loading
  // form data
  const data = { price, availableQuantity, description };

    // send data to server
    fetch(`http://localhost:5000/mytoys/${toyId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
          setIsLoading(false);  // stop loading
    })
    .catch((error) => {
        console.error('Error:', error);
          setIsLoading(false);  // stop loading
    });

    setModalIsOpen(false);
  };

    
  useEffect(() => {
    if (user && user.email) {
      const email = user.email;
      fetch(`http://localhost:5000/mytoys?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setToyData(data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

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
      toast.error("No matching toy names found", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => setShowToast(false),
      });
    }
  }, [filteredToys, searchQuery, showToast]);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };
  // for alert

  const handleDeleteToy = (toyId) => {
    // Ask for confirmation
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to delete this toy?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // Send DELETE request to the server
        fetch(`http://localhost:5000/mytoys/${toyId}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.ok) {
              // If the deletion was successful, update the toy list by removing the deleted toy
              setToyData(toyData.filter((toy) => toy._id !== toyId));

              // Show success alert using SweetAlert
              Swal.fire("Success", "Toy deleted successfully", "success");
            } else {
              throw new Error("An error occurred while deleting the toy");
            }
          })
          .catch((error) => {
            console.log(error);
            // Show error toast using react-toastify or any other notification library
            toast.error("An error occurred while deleting the toy");
          });
      }
    });
    };
    
    if (loading) {
        return Spinner();
    }

  // Set the app element
  Modal.setAppElement(document.getElementById("root")); 

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-2xl font-bold mb-4">My Toys</h1>
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
              <td className="border px-4 py-2">
                {toy.sellerName ? toy.sellerName : "-"}
              </td>
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

                {user?.uid ? (
                  <Link
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
                      pathname: "/login",

                      state: { from: location },
                    }}
                    replace={true}
                    type="button"
                    className="w-[50%] bg-gradient-to-r from-[#56d3c4] via-pink-100 to-[#56d3c4] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 text-center mr-2 mb-2 rounded-xl py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300"
                  >
                    View Details
                  </Link>
                )}

                      <button
                        onClick={() => openModals(toy)}
                        //   to={`/mytoys/${toy._id}`}
                //   onClick={() => openModalUpdate(toy._id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  <FaSync className="inline-block mr-1" />
                  Update
                </button>
                <button
                  onClick={() => handleDeleteToy(toy._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
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
              <span
                onClick={closeModal}
                className="bg-red-700 cursor-pointer p-2 text-white rounded-full hover:bg-purple-700"
              >
                <MdClose size={24} />
              </span>
                      </div>
                      
            <div className="card-body">
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/2">
                  <img
                    src={selectedItem.picture}
                    alt={selectedItem.name}
                    className="object-cover h-64 w-full md:h-auto"
                  />
                </div>
                {/* Details */}
                <div className="md:w-1/2 p-4 md:p-6">
                  <h2 className="text-xl font-semibold mb-2">
                    {selectedItem.name}
                  </h2>
                  <p className="text-gray-600 mb-2">
                    Seller:{" "}
                    {user.displayName ? user.displayName : selectedItem.seller}
                  </p>
                  <p className="text-gray-600 mb-2">
                    Email: {user.email ? user.email : selectedItem.email}
                  </p>
                  <p className="text-gray-600 mb-2">
                    Price: ${selectedItem.price}
                  </p>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center mb-2">
                      <p className="text-gray-600">
                        Rating: {selectedItem.rating}
                      </p>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <FaStar
                          key={i}
                          className={`text-yellow-500 ${
                            selectedItem.rating >= i
                              ? "fill-current"
                              : "fill-current text-gray-300 hidden"
                          }`}
                        />
                      ))}
                      {selectedItem.rating % 1 !== 0 && (
                        <FaStarHalfAlt className="text-yellow-500 fill-current" />
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">
                    Available Quantity: {selectedItem.availableQuantity}
                  </p>
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
         <Modal 
  isOpen={modalIsOpen}
  onRequestClose={closeModals}
  className="flex items-center justify-center outline-none"  
  overlayClassName="fixed inset-0 bg-black bg-opacity-50" // semi-transparent black overlay
>
  <div className="relative bg-white rounded-lg px-6 py-4 w-full max-w-xl mx-auto"> 
    <button 
      onClick={closeModals}
      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-700 focus:outline-none"
    >
      <MdClose size={24} />
    </button>

    <h2 className="text-2xl font-semibold mb-4">Update Form</h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="number" 
        value={price} 
        onChange={e => setPrice(e.target.value)} 
        placeholder="Price"
        className="w-full border rounded p-2"
      />
      <input 
        type="number" 
        value={availableQuantity} 
        onChange={e => setQuantity(e.target.value)} 
        placeholder="Quantity"
        className="w-full border rounded p-2"
      />
      <input 
        type="text" 
        value={description} 
        onChange={e => setDescription(e.target.value)} 
        placeholder="Description"
        className="w-full border rounded p-2"
      />
      <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded hover:bg-blue-600">
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>

  </div>
</Modal>
      <ToastContainer />
    </div>
  );
};

export default MyToys;
