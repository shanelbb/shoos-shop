const shoeInfo = [
    {
        category: "sneakers",
        brand: "Nike",
        style: "Forta Run K Sneaker",
        price: 114.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/sneakers/sneakers1.jpg",
    },
    {
        category: "sneakers",
        subCategory: "new arrivals",
        brand: "Puma",
        style: "GV Special+ Sneaker",
        price: 104.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: true,
        rating: 0,
        image: "/assets/sneakers/sneakers2.jpg",
    },
    {
        category: "sneakers",
        brand: "Puma",
        style: "Suede XXI Sneaker",
        price: 124.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/sneakers/sneakers3.jpg",
    },
    {
        category: "sneakers",
        brand: "DNA Athletics",
        style: "Low-rise Crew Sneaker",
        price: 164.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/sneakers/sneakers4.jpg",
    },
    {
        category: "sneakers",
        subCategory: "new arrivals",
        brand: "DNA Athletics",
        style: "Cruise Rider Sneaker",
        price: 194.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: true,
        rating: 0,
        image: "/assets/sneakers/sneakers5.jpg",
    },
    {
        category: "sneakers",
        brand: "Nike",
        style: "Air Max 3250",
        price: 159.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/sneakers/sneakers6.jpg",
    },
    {
        category: "sneakers",
        brand: "DNA Athletics",
        style: "Suede Yael Sneaker",
        price: 114.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/sneakers/sneakers7.jpg",
    },
    {
        category: "sneakers",
        subCategory: "new arrivals",
        brand: "Calvin Klein",
        style: "Solaris Sneaker",
        price: 214.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: true,
        rating: 0,
        image: "/assets/sneakers/sneakers8.jpg",
    },
    {
        category: "sneakers",
        subCategory: "new arrivals",
        brand: "Nike",
        style: "Revolution 8 Sneaker",
        price: 134.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: true,
        rating: 0,
        image: "/assets/sneakers/sneakers9.jpg",
    },

    {
        category: "dress shoes",
        brand: "Jimmy Choo",
        style: "Champagne Sparkle Pump",
        price: 449.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/dressShoes/dressShoe1.jpg",
    },
    {
        category: "dress shoes",
        subCategory: "new arrivals",
        brand: "Aldo",
        style: "Floral Stiletto Pump",
        price: 74.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: true,
        rating: 0,
        image: "/assets/dressShoes/dressShoe2.jpg",
    },
    {
        category: "dress shoes",
        brand: "Michael Kors",
        style: "Classic Black Pump",
        price: 249.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/dressShoes/dressShoe3.jpg",
    },
    {
        category: "dress shoes",
        brand: "Pokemaoke",
        style: "Black Leather Mule",
        price: 154.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/dressShoes/dressShoe4.jpg",
    },
    {
        category: "dress shoes",
        brand: "Chanel",
        style: "Cap Toe Slingback Pump",
        price: 649.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/dressShoes/dressShoe5.jpg",
    },
    {
        category: "dress shoes",
        brand: "Pokemaoke",
        style: "Teal Oxford",
        price: 124.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/dressShoes/dressShoe6.jpg",
    },
    {
        category: "dress shoes",
        subCategory: "new arrivals",
        brand: "Michael Kors",
        style: "Suede Laceup Bootie",
        price: 314.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: true,
        rating: 0,
        image: "/assets/dressShoes/dressShoe7.jpg",
    },
    {
        category: "dress shoes",
        brand: "Franco Sarto",
        style: "Velvet Gem Loafers",
        price: 114.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/dressShoes/dressShoe8.jpg",
    },
    {
        category: "dress shoes",
        subCategory: "new arrivals",
        brand: "Chie Mihar",
        style: "Goldie Oxford",
        price: 174.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: true,
        rating: 0,
        image: "/assets/dressShoes/dressShoe9.jpg",
    },
    {
        category: "boots",
        brand: "Columbia",
        style: "Montana Hiking Boot",
        price: 124.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/boots/boot1.jpg",
    },
    {
        category: "boots",
        subCategory: "new arrivals",
        brand: "Timberland",
        style: "Classic Boot - Rouge",
        price: 169.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: true,
        rating: 0,
        image: "/assets/boots/boot2.jpg",
    },
    {
        category: "boots",
        brand: "Florsheim Shoes",
        style: "Cap Toe Lace Boot",
        price: 149.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/boots/boot3.jpg",
    },
    {
        category: "boots",
        brand: "Outdoors",
        style: "Waterproof Hiking Boot",
        price: 89.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/boots/boot4.jpg",
    },
    {
        category: "boots",
        subCategory: "new arrivals",
        brand: "Moncler",
        style: "Ridge Hiking Boot",
        price: 144.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: true,
        rating: 0,
        image: "/assets/boots/boot5.jpg",
    },
    {
        category: "boots",
        brand: "Blundstone",
        style: "Classic Rustic Boot",
        price: 214.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/boots/boot6.jpg",
    },
    {
        category: "boots",
        brand: "Timberland",
        style: "Classic Boot - Tobacco",
        price: 169.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/boots/boot7.jpg",
    },
    {
        category: "boots",
        brand: "Timberland",
        style: "Maddsen Waterproof Boot",
        price: 134.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/boots/boot8.jpg",
    },
    {
        category: "boots",
        brand: "Michael Kors",
        style: "Rosé Hiking Boot",
        price: 249.99,
        sizes: [6, 7, 8, 9, 10, 11],
        newArrival: false,
        rating: 0,
        image: "/assets/boots/boot9.jpg",
    },
];

export default shoeInfo;