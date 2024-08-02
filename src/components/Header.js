import NavBar from "./NavBar";
import Image from "next/image";
import ShopBag from "../assets/shopping-bag.png";
import Link from "next/link";

export default function Header(props) {
    const { setCategory } = props;
    return (
        <header id="top">
            <div className="topBar wrapper">
                <Link href="/">
                    <h1>shoos.</h1>
                </Link>
                <div className="shoppingBagIcon">
                    <Image
                        src={ShopBag}
                        alt="Shopping bag icon"
                        className="shopping"
                    />
                </div>
            </div>
            <NavBar setCategory={setCategory} />
        </header>
    );
}
