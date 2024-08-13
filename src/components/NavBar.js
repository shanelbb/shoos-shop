import { useState } from "react";
import Link from "next/link";
import Menu from "./Menu";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const css = open === true ? { transform: `translateY(0)` } : { transform: `translateY(-500vh)` };

  const toggleMenu = () => {
    open === false ? setOpen(true) : setOpen(false);
  };

  return (
    <nav className='categoryNav'>
      <ul className='wrapper navBar'>
        <li className='categoryLi'>
          <Link
            href={{
              pathname: "/gallery",
              query: { category: "new arrivals" },
            }}
          >
            New Arrivals
          </Link>
        </li>
        <li className='categoryLi'>
          <Link
            href={{
              pathname: "/gallery",
              query: { category: "sneakers" },
            }}
          >
            Sneakers
          </Link>
        </li>
        <li className='categoryLi'>
          <Link
            href={{
              pathname: "/gallery",
              query: { category: "dress shoes" },
            }}
          >
            Dress Shoes
          </Link>
        </li>
        <li className='categoryLi'>
          <Link
            href={{
              pathname: "/gallery",
              query: { category: "boots" },
            }}
          >
            Boots
          </Link>
        </li>

        <li className='hamburger' onClick={toggleMenu}></li>
      </ul>
      <div className='menu' style={css}>
        <Menu toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
}
