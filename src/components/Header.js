import NavBar from "./NavBar";
import Image from "next/image";
import ShopBag from "../assets/shopping-bag.png";

export default function Header(props) {
    const { setCategory } = props;
    return (
        <header id="top">
            <div className="topBar wrapper">
                <h1>shoos.</h1>
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
