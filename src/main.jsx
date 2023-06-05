import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './Pages/Home/Layout.jsx';
import Home from './Pages/Home/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>
    ,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
