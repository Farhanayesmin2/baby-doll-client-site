import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllToys from '../AllToys/AllToys';
import Main from '../Layout/Main';
import AddToys from '../Pages/AddToys/AddToys';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';
import Login from '../Register/Login/Login';
import Register from '../Register/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/alltoys",
                element: <AllToys></AllToys>
            },
            {
                path: "/addtoys",
                element: <AddToys></AddToys>
            }
        ]


    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }




])
export default router;