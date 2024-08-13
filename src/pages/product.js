import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SelectQuantity from "@/components/SelectQuantity";
import SelectSize from "@/components/SelectSize";
import ReviewForm from "../components/ReviewForm";
import UserReviews from "../components/UserReviews";

/* eslint-disable react/prop-types */
export default function ProductPage(props) {
  const { itemOrder, setItemOrder, orderData, setOrderData, productInfo, setProductInfo, setOrderTotal, product, setProduct } = props;
  const [sioImages, setSIOImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("6");
  const { productId } = router.query;

  useEffect(() => {
    const fetchSIOImages = async () => {
      fetch(`/api/fetchSIOUrls?productId=${productId}`)
        .then(res => res.json())
        .then(data => {
          const { sio_urls } = data;
          const sios = sio_urls.filter(img => img.product_id === Number(productId));
          setSIOImages(sios);
        });
    };

    // Fetch the See It On Images for this specific product
    if (productId) {
      setLoading(false);
      fetchSIOImages();
    } else {
      setLoading(false);
      return;
    }
  }, [productId]);

  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='errorMessage'>{error}</p>;

  if (!product) return <p className='errorMessage'>Sorry, there is no info available for that shoo.</p>;

  const updateItem = () => {
    // Logic to add the item to the shopping bag
  };

  return (
    <div className='wrapper'>
      <section className='productInfo'>
        <Image src={product.image_url} alt={product.style} width={400} height={400} style={{ width: "100%", maxWidth: "400px", height: "auto", objectFit: "cover" }} />
        <div className='productDetails'>
          <p className='brand'>{product.brand}</p>
          <p className='style'>{product.style}</p>
          <p className='price'>${product.price}</p>
          <div className='galleryItemInputs'>
            <SelectQuantity quantity={quantity} setQuantity={setQuantity} />
            <SelectSize setSelectedSize={setSelectedSize} />
          </div>
          <button className='addToBag galleryAdd' onClick={updateItem}>
            Add to Bag
          </button>
          <p className='legal'>Free standard shipping over $75</p>
          <p className='legal'>Free returns, always</p>
        </div>
      </section>
      <section className='seeItOn'>
        <h3>See them on:</h3>
        <div className='seeItOnImages'>
          {sioImages.length > 0 ? (
            sioImages.map((image, index) => <Image key={index} src={image.sio_url} alt={`See it on image ${index + 1}`} width={200} height={200} style={{ width: "100%", maxWidth: "320px", height: "auto", objectFit: "cover" }} />)
          ) : (
            <p className='errorMessage'>No images available</p>
          )}
        </div>
      </section>
      <UserReviews />
      <ReviewForm />
    </div>
  );
}
