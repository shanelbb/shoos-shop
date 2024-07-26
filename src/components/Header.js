import NavBar from "./NavBar";
import Image from "next/image";
import ShopBag from "../assets/shopping-bag.png";
import {Gruppo} from "next/font/google";

const gruppo = Gruppo({
  weight: "400",
  subsets: ["latin"]
});

export default function Header() {

  return (
    <header id='top'>
      <div className='topBar wrapper'>
        
        <h1>shoos.</h1>
        <div className='shoppingBagIcon' >
          <Image src={ShopBag} alt='Shopping bag icon' className='shopping' />
        </div>
      </div>
      <NavBar/>
    </header>
  );
}

