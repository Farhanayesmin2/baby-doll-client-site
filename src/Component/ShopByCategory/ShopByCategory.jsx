import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AuthContext } from "../Context/UserContext";
import { useContext } from "react";
import { MdClose, MdShoppingCart } from 'react-icons/md';

import AOS from 'aos';
import 'aos/dist/aos.css';
const ShopByCategory = () => {
  const [loading, setLoading] = useState(true);
  const { user, Spinner } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("babyDolls");
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);


   // Router variables and functions
  const location = useLocation();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";

  // data fetch
  useEffect(() => {
    fetch("http://localhost:5000/home")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        
        setLoading(false); // set loading to false after data is fetched
       
    AOS.init({
      duration: 2000,
    });
      })
      .catch((error) => console.log(error));
  }, []);

  // for loading
  if (loading) {
    return Spinner();
  }

  // Function to handle tab selection
  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    // // Navigate to previous page
    //     navigate(from, { replace: true });
  };

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  

  return (
    <div className="text-center items-center my-6" >
      <h1 data-aos="fade-up-right"  className="text-3xl font-bold leading-tight md:text-5xl font-serif  text-[#56d3c4]">
        {" "}
        Shop By Category
      </h1>
      <Tabs>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <TabList className="flex flex-wrap -mb-px">
            <Tab className="mr-2">
              <Link
               to="/#baby-doll"
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "babyDolls" ? "bg-[#c09da9] text-white" : ""
                }`}
                onClick={() => handleTabSelect("babyDolls")}
              >
                Baby Dolls
              </Link>
            </Tab>
            <Tab className="mr-2">
              <Link
               to="/#barbie-doll"
                className={`inline-block p-4 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 ${
                  activeTab === "barbieDolls" ? "bg-[#c09da9] text-white" : ""
                }`}
                onClick={() => handleTabSelect("barbieDolls")}
              >
                Barbie Dolls
              </Link>
            </Tab>
            <Tab className="mr-2">
              <Link
               to="/#lati-yellow-doll"
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "latiYellowDolls"
                    ? "bg-[#c09da9] text-white"
                    : ""
                }`}
                onClick={() => handleTabSelect("latiYellowDolls")}
              >
                Lati Yellow Dolls
              </Link>
            </Tab>
           
          </TabList>
        </div>
        {/* TabPanel for Baby Dolls */}  
   
        <TabPanel >
          <h1 className="lg:text-4xl leading-tight font-bold sm:text-xl font-serif  text-[#c09da9]">
            {" "}
            Baby Dolls
          </h1>

          <div  className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 mx-4">
            {data[0].babyDoll.map((doll) => (
              <div
                key={doll.id}
                className="bg-white shadow-xl shadow-gray-400 rounded-lg overflow-hidden "
              >
                <div className="flex justify-between p-2">
                  <p className="text-base font-bold">Today's Best Offer</p>
                  <div className="bg-info rounded-full flex items-center justify-center bg-[#c09da9]  shadow-sm w-7 h-7">
                    <p className="text-white text-xs font-medium">x4</p>
                  </div>
                </div>
                <img
                  src={doll.picture}
                  alt={doll.name}
                  className="object-cover w-96 h-96 items-center container mx-auto"
                />
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="text-2xl text-gray-800 font-bold">
                      {doll.name}
                    </p>

                    <p className="text-xs line-through text-red-500">
                      Offer Price: $1099
                    </p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <h5 className="text-sm font-bold animate-pulse ">
                                              <div className="indicator">
  <span className="indicator-item badge badge-secondary"><h1>Baby</h1></span>

</div>
                    </h5>
                    <h5 className="text-lg font-bold text-gray-900">
                      Price: ${doll.price}
                    </h5>
                  </div>
                  <div className="flex justify-between mb-1">
                    <p className="text-xs text-gray-500">
                      Available: <span className="font-bold">8</span>
                    </p>
                    <div className="flex items-center font-bold text-yellow-500">
                      Rating: {doll.rating}
                      <FaStar className="ml-3" />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                    {user?.uid ? ( <Link
          to={`/#baby-doll/${doll.id}`}
          type="button"
          className="w-[50%] bg-gradient-to-r from-[#56d3c4] via-pink-100 to-[#56d3c4] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 text-center mr-2 mb-2 rounded-xl py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300"
          onClick={() => openModal(doll)}
        >
          View Details
        </Link> 
         
      ) : (
         <Link
          to={{
            pathname: '/login',
   hash: '#baby-doll',
    state: { from: location },
                          
            
                        }}
                        replace={true}
          type="button"
          className="w-[50%] bg-gradient-to-r from-[#56d3c4] via-pink-100 to-[#56d3c4] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 text-center mr-2 mb-2 rounded-xl py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300"
        >
          View Details
        </Link>
      )}

           
                   
                </div>
              </div>
            ))}

            {/* Modal for baby dolls */}

               
      {selectedItem && (
        <div className="text-start fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4 overflow-x-hidden overflow-y-auto">
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
          </div>
        </TabPanel>
      {/* This tab for barbie dolls */}
        <TabPanel>
      
           <h1 className="lg:text-4xl leading-tight font-bold sm:text-xl font-serif  text-[#c09da9]">
            {" "}
          Barbie Dolls
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 mx-4">
            {data[0].barbieDolls.map((doll) => (
              <div
                key={doll.id}
                className="bg-white shadow-xl shadow-gray-400 rounded-lg overflow-hidden "
              >
                <div className="flex justify-between p-2">
                  <p className="text-base font-bold">Today's Best Offer</p>
                  <div className="bg-info rounded-full flex items-center justify-center bg-[#c09da9]  shadow-sm w-7 h-7">
                    <p className="text-white text-xs font-medium">x4</p>
                  </div>
                </div>
                <img
                  src={doll.picture}
                  alt={doll.name}
                  className="object-cover w-96 h-96 items-center container mx-auto"
                />
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="text-2xl text-gray-800 font-bold">
                      {doll.name}
                    </p>

                    <p className="text-xs line-through text-red-500">
                      Offer Price: $1099
                    </p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <h5 className="text-sm font-bold animate-pulse ">
                                              <div className="indicator">
  <span className="indicator-item badge badge-secondary"><h1>Baby</h1></span>

</div>
                    </h5>
                    <h5 className="text-lg font-bold text-gray-900">
                      Price: ${doll.price}
                    </h5>
                  </div>
                  <div className="flex justify-between mb-1">
                    <p className="text-xs text-gray-500">
                      Available: <span className="font-bold">8</span>
                    </p>
                    <div className="flex items-center font-bold text-yellow-500">
                      Rating: {doll.rating}
                      <FaStar className="ml-3" />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  {user?.uid ? ( <Link
          to={`/#barbie-doll/${doll.id}`}
          type="button"
          className="w-[50%] bg-gradient-to-r from-[#56d3c4] via-pink-100 to-[#56d3c4] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 text-center mr-2 mb-2 rounded-xl py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300"
          onClick={() => openModal(doll)}
        >
          View Details
        </Link> 
         
      ) : (
         <Link
          to={{
            pathname: '/login',
   hash: '#barbie-doll',
    state: { from: location },
                          
            
                        }}
                        replace={true}
          type="button"
          className="w-[50%] bg-gradient-to-r from-[#56d3c4] via-pink-100 to-[#56d3c4] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 text-center mr-2 mb-2 rounded-xl py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300"
        >
          View Details
        </Link>
      )}
                </div>
              </div>
            ))}

            {/* Modal for baby dolls */}

            {selectedItem && (
              <div className="fixed mb-5 inset-0 top-0 left-0 flex items-center justify-center bg-black bg-opacity-75 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="bg-white w-full md:max-w-md mx-auto rounded-lg overflow-hidden">
                  {/* Close Button */}
                  <div className=" relative top-0 right-0">
                    <div className="rounded-full flex items-center justify-center bg-red-700 shadow-sm w-8 h-8 absolute">
                      <p className="text-white text-xs font-medium">
                        <button onClick={closeModal}>&times;</button>
                      </p>
                    </div>
                  </div>

                  <div className="md:flex">
                    {/* Image */}
                    <img
                      src={selectedItem.picture}
                      alt={selectedItem.name}
                      className="h-64 md:h-auto w-full md:w-2/5 object-cover"
                    />

                    {/* Details */}
                    <div className="p-4 md:p-6">
                      <h2 className="text-xl font-semibold mb-2">
                        {selectedItem.name}
                      </h2>
                      <p className="text-gray-600 mb-2">
                        Seller:{" "}
                        {user.displayName
                          ? user.displayName
                          : selectedItem.seller}
                      </p>
                      <p className="text-gray-600 mb-2">
                        Email: {user.email ? user.email : selectedItem.email}
                      </p>
                      <p className="text-gray-600 mb-2">
                        Price: ${selectedItem.price}
                      </p>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center mb-2">
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
                        <p className="text-gray-600 ml-2">
                          Rating: {selectedItem.rating}
                        </p>
                      </div>
                      <p className="text-gray-600 mb-2">
                        Available Quantity: {selectedItem.quantity}
                      </p>
                      <p className="text-gray-600">
                        {selectedItem.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Close Button */}


                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 text-gray-600 hover:bg-gray-300 hover:text-gray-800 focus:outline-none"
                >
                  &times;
                </button>
              </div>
            )}
          </div>

        </TabPanel>
        {/* This tab is for Lati Yellow Dolls  */}
        <TabPanel>
         
           <h1 className="lg:text-4xl leading-tight font-bold sm:text-xl font-serif  text-[#c09da9]">
            {" "}
         Lati Yellow Dolls
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 mx-4">
            {data[0].latiYellowDolls.map((doll) => (
              <div
                key={doll.id}
                className="bg-white shadow-xl shadow-gray-400 rounded-lg overflow-hidden "
              >
                <div className="flex justify-between p-2">
                  <p className="text-base font-bold">Today's Best Offer</p>
                  <div className="bg-info rounded-full flex items-center justify-center bg-[#c09da9]  shadow-sm w-7 h-7">
                    <p className="text-white text-xs font-medium">x4</p>
                  </div>
                </div>
                <img
                  src={doll.picture}
                  alt={doll.name}
                  className="object-cover w-96 h-96 items-center container mx-auto"
                />
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="text-2xl text-gray-800 font-bold">
                      {doll.name}
                    </p>

                    <p className="text-xs line-through text-red-500">
                      Offer Price: $1099
                    </p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <h5 className="text-sm font-bold animate-pulse ">
                                              <div className="indicator">
  <span className="indicator-item badge badge-secondary"><h1>Baby</h1></span>

</div>
                    </h5>
                    <h5 className="text-lg font-bold text-gray-900">
                      Price: ${doll.price}
                    </h5>
                  </div>
                  <div className="flex justify-between mb-1">
                    <p className="text-xs text-gray-500">
                      Available: <span className="font-bold">8</span>
                    </p>
                    <div className="flex items-center font-bold text-yellow-500">
                      Rating: {doll.rating}
                      <FaStar className="ml-3" />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </div>
                </div>
                <div className="p-5">
 {user?.uid ? ( <Link
        to={`/#lati-yellow-doll/${doll.id}`}
          type="button"
          className="w-[50%] bg-gradient-to-r from-[#56d3c4] via-pink-100 to-[#56d3c4] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 text-center mr-2 mb-2 rounded-xl py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300"
          onClick={() => openModal(doll)}
        >
          View Details
        </Link> 
         
      ) : (
         <Link
          to={{
            pathname: '/login',
   hash: '#lati-yellow-doll',
    state: { from: location },
                          
            
                        }}
                        replace={true}
          type="button"
          className="w-[50%] bg-gradient-to-r from-[#56d3c4] via-pink-100 to-[#56d3c4] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 text-center mr-2 mb-2 rounded-xl py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300"
        >
          View Details
        </Link>
      )}

                 
                </div>
              </div>
            ))}

            {/* Modal for baby dolls */}

            {selectedItem && (
              <div className="fixed mb-5 inset-0 top-0 left-0 flex items-center justify-center bg-black bg-opacity-75 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="bg-white w-full md:max-w-md mx-auto rounded-lg overflow-hidden">
                  {/* Close Button */}
                  <div className=" relative top-0 right-0">
                    <div className="rounded-full flex items-center justify-center bg-red-700 shadow-sm w-8 h-8 absolute">
                      <p className="text-white text-xs font-medium">
                        <button onClick={closeModal}>&times;</button>
                      </p>
                    </div>
                  </div>

                  <div className="md:flex">
                    {/* Image */}
                    <img
                      src={selectedItem.picture}
                      alt={selectedItem.name}
                      className="h-64 md:h-auto w-full md:w-2/5 object-cover"
                    />

                    {/* Details */}
                    <div className="p-4 md:p-6">
                      <h2 className="text-xl font-semibold mb-2">
                        {selectedItem.name}
                      </h2>
                      <p className="text-gray-600 mb-2">
                        Seller:{" "}
                        {user.displayName
                          ? user.displayName
                          : selectedItem.seller}
                      </p>
                      <p className="text-gray-600 mb-2">
                        Email: {user.email ? user.email : selectedItem.email}
                      </p>
                      <p className="text-gray-600 mb-2">
                        Price: ${selectedItem.price}
                      </p>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center mb-2">
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
                        <p className="text-gray-600 ml-2">
                          Rating: {selectedItem.rating}
                        </p>
                      </div>
                      <p className="text-gray-600 mb-2">
                        Available Quantity: {selectedItem.quantity}
                      </p>
                      <p className="text-gray-600">
                        {selectedItem.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 text-gray-600 hover:bg-gray-300 hover:text-gray-800 focus:outline-none"
                >
                  &times;
                </button>
              </div>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;

//  <div className="fixed inset-0 top-0 left-0 flex items-center justify-center bg-black bg-opacity-75 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
//         <div className="bg-white w-full md:max-w-md mx-auto rounded-lg overflow-hidden">
//                        {/* Close Button */}
//        <div className="bg-info rounded-full flex items-center justify-center bg-red-700 shadow-sm w-7 h-7">
//                     <p className="text-white text-xs font-medium"> <button
//             onClick={closeModal}
//            >
//             &times;
//                     </button>
//                     </p>
//                   </div>

//                   <div className="md:grid md:grid-cols-2">

//             {/* Image */}
//             <img src={selectedItem.picture} alt={selectedItem.name} className="h-64 md:h-auto w-full object-cover col-span-1" />

//             {/* Details */}
//             <div className="p-4 md:p-6 col-span-1">
//               <h2 className="text-xl font-semibold mb-2">{selectedItem.name}</h2>
//               <p className="text-gray-500 mb-2">${selectedItem.price}</p>
//               <p className="mb-4">{selectedItem.description}</p>

//               <a
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg inline-block"
//                to={}
//               >
//                 View Details
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
