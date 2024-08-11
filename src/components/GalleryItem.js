import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SelectQuantity from "./SelectQuantity";
import SelectSize from "./SelectSize";

/* eslint-disable react/prop-types */
export default function GalleryItem(props) {
  const { shoe, category, setItemOrder } = props;
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("6");
  const router = useRouter();

  const updateItem = () => {
    const itemData = {
      brand: shoe.brand,
      style: shoe.style,
      src: shoe.image_url,
      price: shoe.price,
      size: selectedSize,
      quantity: quantity,
    };
    setItemOrder(itemData);
  };

  const handleProductClick = () => {
    router.push(`/product/${shoe.id}`);
  };

  return (
    <>
      {shoe.category === category || (shoe.new_arrival && category === "new arrivals") ? (
        <div className="galleryItem" onClick={handleProductClick} style={{ cursor: "pointer" }}>
          <p className="brand">{shoe.brand}</p>
          <p className="style">{shoe.style}</p>
          <Image
            className="shoeImg"
            src={shoe.image_url}
            alt={shoe.style}
            width={200}
            height={200}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <p className="price">${shoe.price}</p>
          <div className="galleryItemInputs">
            <SelectQuantity quantity={quantity} setQuantity={setQuantity} />
            <SelectSize selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
          </div>

          <button className="addToBag galleryAdd" onClick={updateItem}>
            Add To Bag
          </button>
        </div>
      ) : null}
    </>
  );
}
/* eslint-enable react/prop-types */
