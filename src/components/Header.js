import NavBar from "./NavBar";
import Image from "next/image";
import ShopBag from "../assets/shopping-bag.png";
import Link from "next/link";
import { useState } from "react";
import ShoppingBag from "./ShoppingBag";

/* eslint-disable react/prop-types */
export default function Header(props) {
    const { orderData } = props;

    const [open, setOpen] = useState(false);
    const css =
        open === true
            ? { transform: `translateY(0vh)` }
            : { transform: `translateY(-500vh)` };
    const toggleMenu = () => {
        open === false ? setOpen(true) : setOpen(false);
    };

    const [category, setCategory] = useState();

    return (
        <header id="top">
            <div className="topBar wrapper">
                <Link href="/">
                    <h1>shoos.</h1>
                </Link>
                <div className="shoppingBagIcon" onClick={toggleMenu}>
                    <Image
                        src={ShopBag}
                        alt="Shopping bag icon"
                        className="shopping"
                    />
                </div>
            </div>
            <NavBar setCategory={setCategory} />
            <ShoppingBag
                css={css}
                orderData={orderData}
                setOpen={setOpen}
                open={open}
            />
        </header>
    );
}
