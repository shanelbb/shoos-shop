import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <div
        className='banner'
        style={{
          backgroundImage: 'url("./assets/banners/newArrivals.jpg")',
        }}
      >
        <Link
          href={{
            pathname: "/gallery",
            query: { category: "new arrivals" },
          }}
        >
          <h2>New Arrivals</h2>
        </Link>
      </div>

      <div
        className='banner'
        style={{
          backgroundImage: 'url("./assets/banners/sneakers.jpg")',
        }}
      >
        <Link
          href={{
            pathname: "/gallery",
            query: { category: "sneakers" },
          }}
        >
          <h2>Sneakers</h2>
        </Link>
      </div>
      <div
        className='banner'
        style={{
          backgroundImage: 'url("./assets/banners/dressShoes.jpg")',
        }}
      >
        <Link
          href={{
            pathname: "/gallery",
            query: { category: "dress shoes" },
          }}
        >
          <h2>Dress Shoes</h2>
        </Link>
      </div>
      <div className='banner' style={{ backgroundImage: 'url("./assets/banners/boots.jpg")' }}>
        <Link
          href={{
            pathname: "/gallery",
            query: { category: "boots" },
          }}
        >
          <h2>Boots</h2>
        </Link>
      </div>
    </>
  );
}
