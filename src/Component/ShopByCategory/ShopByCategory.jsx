import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
    import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState("babyDolls");
    // Function to handle tab selection
const handleTabSelect = (tab) => {
  setActiveTab(tab);
};

    return (
      
      <div className='text-center items-center' >
<h1 className="text-3xl font-bold leading-tight md:text-5xl font-serif  text-[#56d3c4]"> Shop By Category</h1>
          <Tabs>
              


  <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <TabList className="flex flex-wrap -mb-px">
      <Tab className="mr-2">
        <a href="#" className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${activeTab === "babyDolls" ? "bg-[#c09da9] text-white" : ""}`} onClick={() => handleTabSelect("babyDolls")}>
          Baby Dolls
        </a>
      </Tab>
      <Tab className="mr-2">
        <a href="#" className={`inline-block p-4 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 ${activeTab === "barbieDolls" ? "bg-[#c09da9] text-white" : ""}`} onClick={() => handleTabSelect("barbieDolls")}>
          Barbie Dolls
        </a>
      </Tab>
      <Tab className="mr-2">
        <a href="#" className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${activeTab === "latiYellowDolls" ? "bg-[#c09da9] text-white" : ""}`} onClick={() => handleTabSelect("latiYellowDolls")}>
          Lati Yellow Dolls
        </a>
      </Tab>
      <Tab>
        <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
          Disabled
        </a>
      </Tab>
    </TabList>
</div>

        <TabPanel>
<h1 className="lg:text-4xl leading-tight font-bold sm:text-xl font-serif  text-[#c09da9]"> Baby Dolls</h1>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 mx-4">
    <div className="bg-white shadow-xl shadow-gray-400 rounded-lg overflow-hidden ">
      <div className="flex justify-between p-2">
        <p className="text-base font-bold">Today's Combo Offer</p>
        <div className="bg-info rounded-full flex items-center justify-center bg-[#c09da9]  shadow-sm w-7 h-7">
          <p className="text-white text-xs font-medium">x4</p>
        </div>
      </div>
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp" className="w-full h-auto" alt="Laptop" />
      <div className="p-5">
        <div className="flex justify-between">
          <p className="text-xs"><a href="#!" className="text-gray-500">Laptops</a></p>
          <p className="text-xs line-through text-red-500">$1099</p>
        </div>
        <div className="flex justify-between mb-2">
          <h5 className="text-sm font-bold">HP Notebook</h5>
          <h5 className="text-sm font-bold text-gray-900">$999</h5>
        </div>
        <div className="flex justify-between mb-1">
          <p className="text-xs text-gray-500">Available: <span className="font-bold">6</span></p>
          <div className="flex text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
                                    </div></div>
                            </div>
                            <div className="p-5">

 <button type="button" className=" w-[50%] bg-gradient-to-r from-[#56d3c4] via-pink-100 to-[#56d3c4] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium  text-sm px-5  text-center mr-2 mb-2 rounded-xl  py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300">View Details </button>
        </div>
      
                            </div>



                        
  </div>



        </TabPanel>
        <TabPanel>
          <h2>Sub-categories for Category 2</h2>
          <ul>
            <Link>Sub-category 4</Link>
            <Link>Sub-category 5</Link>
            <Link>Sub-category 6</Link>
          </ul>
        </TabPanel>
        <TabPanel>
          <h2>Sub-categories for Category 3</h2>
          <ul>
            <Link>Sub-category 7</Link>
            <Link>Sub-category 8</Link>
            <Link>Sub-category 9</Link>
          </ul>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
