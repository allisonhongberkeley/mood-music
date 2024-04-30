import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div class="bar">
        <nav>
            <div class="flex-end">
            <button class="button">
            <Link to='/'>Home</Link>
            </button>
            <button class="button">
            <Link to='/feature'>Browse</Link>
            </button>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
