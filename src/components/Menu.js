import Link from "next/link";

export default function Menu({ toggleMenu }) {
    const handleClick = e => {
        toggleMenu();
    };

    return (
        <>
            <Link href="/" onClick={toggleMenu}>
                <h4>shoos.</h4>
            </Link>
            <ul>
                <Link
                    href={{
                        pathname: "/gallery",
                        query: { category: "new arrivals" },
                    }}
                >
                    <li onClick={handleClick} className="menuLi">
                        New Arrivals
                    </li>
                </Link>
                <Link
                    href={{
                        pathname: "/gallery",
                        query: { category: "sneakers" },
                    }}
                >
                    <li onClick={handleClick} className="menuLi">
                        Sneakers
                    </li>
                </Link>
                <Link
                    href={{
                        pathname: "/gallery",
                        query: { category: "dress shoes" },
                    }}
                >
                    <li onClick={handleClick} className="menuLi">
                        Dress Shoes
                    </li>
                </Link>
                <Link
                    href={{
                        pathname: "/gallery",
                        query: { category: "boots" },
                    }}
                >
                    <li onClick={handleClick} className="menuLi">
                        Boots
                    </li>
                </Link>
                <li className="menuLi" onClick={toggleMenu}>
                    About Us
                </li>
                <li className="menuLi" onClick={toggleMenu}>
                    Contact Us
                </li>
            </ul>
        </>
    );
}
