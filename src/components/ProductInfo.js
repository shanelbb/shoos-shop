import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SelectQuantity from "./SelectQuantity";
import SelectSize from "./SelectSize";

export default function ProductInfo() {
  const [product, setProduct] = useState(null);
  const [sioImages, setSIOImages] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    if (productId) {
      // Fetch the product details
      fetch(`/api/fetchProductById?productId=${productId}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data.product);
          setSelectedSize(data.product.sizes[0]); 
        });

      // Fetch the See It On Images for this specific product
      fetch(`/api/fetchSIOUrls?productId=${productId}`)
        .then(res => res.json())
        .then(data => {
          setSIOImages(data.sio_urls);
        });
    }
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  const updateItem = () => {
    const itemData = {
      brand: product.brand,
      style: product.style,
      src: product.image_url,
      price: product.price,
      size: selectedSize,
      quantity: quantity,
    };
  };

  return (
    <div className="productInfo">
      <h1>{product.style}</h1>
      <Image
        src={product.image_url}
        alt={product.style}
        width={400}
        height={400}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <p className="price">${product.price}</p>
      <SelectQuantity quantity={quantity} setQuantity={setQuantity} />
      <SelectSize selectedSize={selectedSize} setSelectedSize={setSelectedSize} sizes={product.sizes} />
      <button onClick={updateItem}>Add to Bag</button>

      <div className="seeItOnImages">
        <h3>See It On:</h3>
        {sioImages.length > 0 ? (
          sioImages.map((image, index) => (
            <Image
              key={index}
              src={image.sio_url}
              alt={`See it on image ${index + 1}`}
              width={200}
              height={200}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
}
