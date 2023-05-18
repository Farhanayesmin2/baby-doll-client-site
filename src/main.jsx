import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import UserContext from './Component/Context/UserContext'
import router from './Component/Routes/router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
    <RouterProvider router={router} ></RouterProvider>
    </UserContext>

  </React.StrictMode>,
)
