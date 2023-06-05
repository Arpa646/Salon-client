import React from 'react';
import Navbar from '../../Share/Navbar/Navbar';
import Footer from '../../Share/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css'
const Layout = () => {
    return (
        <div>
        <Navbar></Navbar>
           <div className='layout'> <Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;