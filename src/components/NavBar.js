// import { useState } from 'react'
// import {useState} from "react";
import Link from "next/link";

export default function NavBar({ setCategory }) {
    const chosenCategory = e => {
        setCategory(e.target.textContent);
    };
    return (
        <nav className="categoryNav">
            <ul className="wrapper navBar">
                <li className="categoryLi">New Arrivals</li>
                <li className="categoryLi">Sneakers</li>
                <li className="categoryLi">Dress Shoes</li>
                <li className="categoryLi">Boots</li>

                <li className="hamburger"></li>
            </ul>
            <div className="menu"></div>
        </nav>
    );
}
