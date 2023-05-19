
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';





const PrivateRoute = ({children}) => {
    const {user, loading,Spinner} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return Spinner();
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;

//  <Navigate
//           to="/login" state={{from: location}} replace
//           type="button"
//           className="w-[50%] bg-gradient-to-r from-[#56d3c4] via-pink-100 to-[#56d3c4] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 text-center mr-2 mb-2 rounded-xl py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300"
//         >
//           View Details
//         </Navigate>