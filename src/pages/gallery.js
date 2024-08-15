import Category from "@/components/Category";
import GalleryItem from "@/components/GalleryItem";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

/* eslint-disable react/prop-types */
export default function Gallery(props) {
  const { itemOrder, setItemOrder, productInfo, setProductInfo, setOrderTotal, setProduct, addItemToBag } = props;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    fetch("./api/fetchProducts")
      .then(res => res.json())
      .then(data => {
        const { products } = data;
        setProductInfo(products);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        return <p className='errorMessage'>Sorry! We are having trouble displaying the shoos. {err}</p>;
      });
  }, []);

  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='errorMessage'>{error}</p>;

  return (
    <>
      <Category category={category} />
      <div className='gallery wrapper'>
        {productInfo.map((shoe, index) => {
          return <GalleryItem shoe={shoe} key={index} category={category} itemOrder={itemOrder} setItemOrder={setItemOrder} setProduct={setProduct} setOrderTotal={setOrderTotal} addItemToBag={addItemToBag} />;
        })}
      </div>
    </>
  );
}
