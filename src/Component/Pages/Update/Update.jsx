import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const data = useLoaderData();

  const  { price,availableQuantity,description } = data;

     
    console.log(data);
    return (
        <div>
            <h1>{data._id}</h1>
          <h2 className="text-xl font-semibold leading-tight tracking-wide mb-4">
            Update Toy
          </h2>
          <form onSubmit={handleUpdateToys}>
            <div className="flex flex-col gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium">Price:</span>
                <input
                  id="price"
                  type="text"
                  placeholder="Price"
                  className="px-3 py-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium">Quantity:</span>
                <input
                  id="quantity"
                  type="text"
                  placeholder="Quantity"
                  className="px-3 py-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium">Description:</span>
                <input
                  id="description"
                  type="text"
                  placeholder="Description"
                  className="px-3 py-2 border border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-4 py-2 mr-2 rounded-md bg-blue-500 text-white font-medium"
              >
                Update
              </button>
              <button
                type="button"
               
                className="px-4 py-2 rounded-md bg-gray-300 text-gray-700 font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
    );
};

export default Update;









//  {selectedItemUpdate && (
//         <Modal
//           isOpen={isModalOpen}
//           onRequestClose={closeModal}
//           contentLabel="Update Modal"
//           className="Modal bg-white rounded-md shadow-md p-6"
//           overlayClassName="Overlay fixed inset-0 bg-gray-900 bg-opacity-75"
//           onSubmit={() => handleUpdateToys(selectedItemUpdate._id)}
//         >
//           <h1>{selectedItemUpdate._id}</h1>
//           <h2 className="text-xl font-semibold leading-tight tracking-wide mb-4">
//             Update Toy
//           </h2>
//           <form onSubmit={handleUpdateToys}>
//             <div className="flex flex-col gap-4">
//               <label className="flex flex-col">
//                 <span className="text-sm font-medium">Price:</span>
//                 <input
//                   id="price"
//                   type="text"
//                   placeholder="Price"
//                   className="px-3 py-2 border border-gray-300 rounded-md"
//                 />
//               </label>
//               <label className="flex flex-col">
//                 <span className="text-sm font-medium">Quantity:</span>
//                 <input
//                   id="quantity"
//                   type="text"
//                   placeholder="Quantity"
//                   className="px-3 py-2 border border-gray-300 rounded-md"
//                 />
//               </label>
//               <label className="flex flex-col">
//                 <span className="text-sm font-medium">Description:</span>
//                 <input
//                   id="description"
//                   type="text"
//                   placeholder="Description"
//                   className="px-3 py-2 border border-gray-300 rounded-md"
//                 />
//               </label>
//             </div>
//             <div className="flex justify-end mt-6">
//               <button
//                 type="submit"
//                 className="px-4 py-2 mr-2 rounded-md bg-blue-500 text-white font-medium"
//               >
//                 Update
//               </button>
//               <button
//                 type="button"
//                 onClick={closeModal}
//                 className="px-4 py-2 rounded-md bg-gray-300 text-gray-700 font-medium"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </Modal>
//       )}

      {/* {showUpdateForm && (
        <Modal
          isOpen={showUpdateForm}
          onRequestClose={() => setShowUpdateForm(false)}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <form onSubmit={handleAddToys}>
            <label>
              Price:
              <input id="price" type="number" name="price" />
            </label>
            <label>
              Available Quantity:
              <input id="quantity" type="number" name="quantity" />
            </label>
            <label>
              Description:
              <textarea id="description" name="description" />
            </label>
            <div className="modal-buttons">
              <button type="submit">Update</button>
              <button type="button" onClick={() => setShowUpdateForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </Modal> */}