import { useState } from "react";
import Image from "next/image";
import SelectQuantity from "./SelectQuantity";
import SelectSize from "./SelectSize";

/* eslint-disable react/prop-types */
export default function GalleryItem(props) {
    const { shoe, category, itemOrder, setItemOrder, setOrderData } = props;
    const [quantity, setQuantity] = useState(0);
    const [selectedSize, setSelectedSize] = useState("6");

    const addToBag = () => {
        setItemOrder([shoe, quantity, selectedSize]);
        setOrderData(orderData => [...orderData, itemOrder]);
        console.log(itemOrder);
    };

    return (
        <>
            {shoe.category === category ||
            (shoe.newArrival === true && category === "new arrivals") ? (
                <div className="galleryItem">
                    <p className="brand">{shoe.brand}</p>
                    <p className="style">{shoe.style}</p>
                    <Image
                        className="shoeImg"
                        src={shoe.image}
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
                    <p className="price">${shoe.price}</p>
                    <div className="galleryItemInputs">
                        <SelectQuantity
                            quantity={quantity}
                            setQuantity={setQuantity}
                        ></SelectQuantity>
                        <SelectSize
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}
                        ></SelectSize>
                    </div>

                    <button className="addToBag galleryAdd" onClick={addToBag}>
                        Add To Bag
                    </button>
                </div>
            ) : null}
        </>
    );
}
/* eslint-enable react/prop-types */
