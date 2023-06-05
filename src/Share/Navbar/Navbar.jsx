
import React, {  useState } from "react";
import { Link } from "react-router-dom";
// import { AuthMaster } from "../../ContexAuth";
// import { Link } from "react-router-dom";
// import { AuthMaster } from "./Contexapi";
// import ActiveLink from "./ActiveLink/ActiveLink";
// import '../App.css';
// import { FaUser } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
function Navbar() {
  // const { user,logOut,loading } = useContext(AuthMaster)
 const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const toggleNavbar = () => {
  setNavbarCollapsed(!navbarCollapsed);
  };
//   const handleLogout=()=>{
//     logOut()
// }
  return (
    <nav className="navbar navbar-expand-lg bg-design " >
    <div className="container-fluid ">
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarTogglerDemo01"
        aria-expanded={navbarCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse fs-6 fw-semibold ${
          navbarCollapsed ? "show" : ""
        }`}
        id="navbarTogglerDemo01"
      >
        <a className="navbar-brand ">
         <img className="w-50" src="https://themes-themegoods.b-cdn.net/grandspa/demo/wp-content/themes/grandspa/images/logo@2x.png" alt="" />
        </a>
        <ul className="navbar-nav nav-design m-auto mb-2 mb-lg-0">
          
          <li className="nav-item ">
            <Link className="nav-link active" to="/">
             Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/allToy">
              All Toy
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/addtoy">
              Add Toy
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/mytoy">
          My Toy
            </Link>
          </li>
          
        </ul>
        {/* {
                                      user ? <><span> {user.photoURL?<img  title={user.displayName} src={user.photoURL} className='userPhoto rounded' alt='img'></img>:  <FontAwesomeIcon icon={faUser} size="2x" title={user.displayName} />} </span>  <Link  onClick={handleLogout}><button className='button2 ms-2'>Logout</button></Link></> :<> <Link className='' to="/login"><button className='button2'>Login</button></Link> <Link  to="/reg"> <button className='button2 ms-2'>SignUp</button></Link></>
        } */}
      </div>
    </div>
  </nav>
  );
}

export default Navbar;


