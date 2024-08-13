import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SelectQuantity from "./SelectQuantity";
import SelectSize from "./SelectSize";

/* eslint-disable react/prop-types */
export default function GalleryItem(props) {
  const { shoe, category, setItemOrder, setProduct } = props;

  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("6");
  const [shoeId, setShoeId] = useState(shoe.id);

  const updateItem = () => {
    const itemData = {
      brand: shoe.brand,
      style: shoe.style,
      src: shoe.image_url,
      price: shoe.price,
      product_id: shoe.id,
      size: Number(selectedSize),
      quantity: quantity,
    };
    if (itemData.quantity > 0) {
      setItemOrder(itemData);
    }
  };

  const linkToProduct = () => {
    setProduct(shoe);
    setShoeId(shoe.id);
  };

  return (
    <>
      {shoe.category === category || (shoe.new_arrival === true && category === "new arrivals") ? (
        <div className='galleryItem'>
          <p className='brand'>{shoe.brand}</p>
          <p className='style'>{shoe.style}</p>
          <span onClick={linkToProduct}>
            <Link
              href={{
                pathname: "/product",
                query: { productId: shoeId },
              }}
            >
              <Image
                className='shoeImg'
                src={shoe.image_url}
                alt={shoe.style}
                width={200}
                height={200}
                style={{
                  width: "100%",
                  height: "auto",
                  cursor: "pointer",
                  objectFit: "cover",
                }}
              />
            </Link>
          </span>
          <p className='price'>${shoe.price}</p>
          <div className='galleryItemInputs'>
            <SelectQuantity quantity={quantity} setQuantity={setQuantity} />
            <SelectSize selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
          </div>

          <button className='addToBag galleryAdd' onClick={updateItem}>
            Add To Bag
          </button>
        </div>
      ) : null}
    </>
  );
}
