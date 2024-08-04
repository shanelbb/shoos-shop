import Link from "next/link";

export default function NavBar() {
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

        <li className='hamburger'></li>
      </ul>
      <div className='menu'></div>
    </nav>
  );
}
