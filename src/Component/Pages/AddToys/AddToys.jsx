import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';

const AddToys = () => {
     const { user } = useContext(AuthContext);
const handleAddToys = (event) => {
  event.preventDefault();
  const form = event.target;
  const picture = form.photourl.value;
  const name = form.name.value;
  const sellerName = user.displayName;
  const sellerEmail = user.email;
  const subCategory = form.subcategory.value;
  const price = form.price.value;
  const rating = form.rating.value;
  const availableQuantity = form.quantity.value;
  const description = form.description.value;

  const addToy = {
    picture: picture,
    name: name,
    sellerName: sellerName,
    sellerEmail: sellerEmail,
   subCategoryName: subCategory,
    price: price,
    rating: rating,
    availableQuantity: availableQuantity,
    description: description,
  };

    
  fetch("http://localhost:5000/alltoys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addToy),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.acknowledged) {
        // Show success toast notification
        toast.success('Toy added successfully');
        form.reset();
      }
    })
    .catch((error) => {
      console.error(error);
      toast.error("Failed to toy added");
    });
};

      

       

  return (
   <div className='w-[100%]'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
     <div className="mx-auto container flex items-center" id="nav">
  <div className="w-full pt-2 p-4">
    <div className="mx-auto md:p-6 md:w-1/2">
      <div className="flex flex-wrap justify-between">
        <h1 className="text-3xl font-extrabold text-rose-500 hover:text-rose-500 transition duration-500 p-4">
          <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
          Add Service
        </h1>
        <Link
          to={"/"}
          className="mt-8 text-rose-400 hover:text-rose-600 transition duration-500"
        >
          <svg
            className="w-6 h-6 inline-block align-bottom"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          Back to Home
          <i className="fas fa-chevron-circle-left fa-fw"></i>
        </Link>
      </div>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleAddToys} action="#login">
          <table className="w-full">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name" className="text-sm">
                    Name
                  </label>
                </td>
                <td>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-yellow-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="sellername" className="text-sm">
                    Seller Name
                  </label>
                </td>
                <td>
                  <input
                    id="sellername"
                    type="text"
                    placeholder={user ? user.displayName : "Seller Name"}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-yellow-400 dark:border-gray-700 dark:text-gray-900"
                    onChange={(e) => console.log(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="selleremail" className="text-sm">
                    Seller Email
                  </label>
                </td>
                <td>
                  <input
                    id="selleremail"
                    type="email"
                    placeholder={user ? user.email : "Email"}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-yellow-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="subcategory" className="text-sm">
                    Sub-category
                  </label>
                </td>
                <td>
                  <select
                    id="subcategory"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-yellow-400 dark:border-gray-700 dark:text-gray-900"
                  >
                    <option value="Baby Dolls">Baby Dolls</option>
                    <option value="Barbie Dolls">Barbie Dolls</option>
                    <option value="Lati Yellow Dolls">
                      Lati Yellow Dolls
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="photourl" className="text-sm">
                    Photo URL
                  </label>
                </td>
                <td>
                  <input
                    id="photourl"
                    type="text"
                    placeholder="Photo URL"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-yellow-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="price" className="text-sm">
                    Price
                  </label>
                </td>
                <td>
                  <input
                    id="price"
                    type="number"
                    placeholder="Price"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-yellow-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="rating" className="text-sm">
                    Rating
                  </label>
                </td>
                <td>
                  <select
                    id="rating"
                    type="number"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-yellow-400 dark:border-gray-700 dark:text-gray-900"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="quantity" className="text-sm">
                    Available Quantity
                  </label>
                </td>
                <td>
                  <input
                    id="quantity"
                    type="number"
                    placeholder="Available Quantity"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-yellow-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="description" className="text-sm">
                    Description
                  </label>
                </td>
                <td>
                  <textarea
                    id="description"
                    placeholder="Description"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-yellow-400 dark:border-gray-700 dark:text-gray-900"
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="submit"
            className="transition duration-500 bg-pink-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
            Add To Toy
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default AddToys;
