import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SelectQuantity from "@/components/SelectQuantity";
import SelectSize from "@/components/SelectSize";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [sioImages, setSIOImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    if (productId) {
      const fetchProductData = async () => {
        try {
          // Fetch the product details
          const productResponse = await fetch(`/api/fetchProductById?productId=${productId}`);
          const productData = await productResponse.json();

          if (!productData.product) {
            setError("Product not found");
            setLoading(false);
            return;
          }

          setProduct(productData.product);

          // Fetch the See It On Images for this specific product
          const sioResponse = await fetch(`/api/fetchSIOUrls?productId=${productId}`);
          const sioData = await sioResponse.json();
          if (sioData.sio_urls) {
            setSIOImages(sioData.sio_urls);
          }

          setLoading(false);
        } catch (err) {
          console.error("Error fetching product data:", err);
          setError("Failed to load product data");
          setLoading(false);
        }
      };

      fetchProductData();
    }
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!product) return <p>Product data is not available</p>;

  const updateItem = () => {
    // Logic to add the item to the shopping bag
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
      <SelectQuantity quantity={1} setQuantity={() => {}} />
      <SelectSize selectedSize={product.sizes[0]} setSelectedSize={() => {}} sizes={product.sizes} />
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
