import React, { useState , useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const boxHandler = () => {
    setToggle(false);
  };
  return (
    <>


<nav className="navbar navbar-light" >
  <div className="container-fluid">
  
    <div className="navbar-brand">
    <img src= "../images/monday_logo_new.jpg "/></div>

    <ul ref={linksContainer} className={toggle ? "active" : ""}>

          <li>
          <Link onClick={boxHandler} to="/about">About</Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/art">Art</Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/literature">Literature</Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/stage">Stage</Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/film">Film</Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/Science">Science</Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/Music">Music</Link>
          </li>
          
        </ul>
        

    <div >
      <h6 class="text-center text-">Use serach engine here</h6>
    <form className="d-flex input-group w-auto bg-info ">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-0" id="search-addon">
        <i className="fas fa-search"></i>
      </span>
    </form>
    </div>

    <div onClick={handleToggle} className="toggle-button">
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
  </div>
</nav>
</>

      
    );
};

export default Navbar