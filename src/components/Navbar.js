

import React from 'react';

import './Navbar.css'


 function Navbar() {
  
    return (
      <nav className="navbar">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white">Your Logo Here</div>
          <div className="flex items-center">
            <div className="relative">
              <input className="pl-8 pr-2 py-1 border border-white" type="text" placeholder="Search..." />
              
            </div>
            <button className="px-4 py-1 bg-gray-800 text-white">Search</button>
          </div>
          <ul className="flex items-center">
            <li className="mr-4"><a href="#" className="text-white">Categories</a></li>
            <li className="mr-4"><a href="#" className="text-white">Website Builders</a></li>
            <li><a href="#" className="text-white">Today's Deals</a></li>
          </ul>
        </div>
      </nav>
    );
  
}

export default Navbar;
