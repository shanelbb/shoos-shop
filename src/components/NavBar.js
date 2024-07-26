// import { useState } from 'react'
// import {useState} from "react";


export default function NavBar() {
  
  return (
    <nav className='categoryNav'>
      <ul className='wrapper navBar'>
        <li  className='categoryLi'>
          New Arrivals
        </li>
        <li  className='categoryLi'>
          Sneakers
        </li>
        <li  className='categoryLi'>
          Dress Shoes
        </li>
        <li  className='categoryLi'>
          Boots
        </li>

        <li className='hamburger'></li>
      </ul>
      <div className='menu'>
        
      </div>
    </nav>
  );
}
