import Category from "@/components/Category";
import GalleryItem from "@/components/GalleryItem";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function Gallery(props) {
  const { itemOrder, setItemOrder, orderData, setOrderData, productInfo, setProductInfo, setOrderTotal, setProduct } = props;
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
        return <p className='errorMessage'>Sorry! We are having trouble displaying the shoos. </p>;
      });
  }, [category]);

  // useEffect(() => {
  //     let sum = 0;
  //     orderData.forEach(item => (sum += item.price));
  //     setOrderTotal(sum);
  // }, [orderData]);

  useEffect(() => {
    // handle the itemOrder in the setOrderData - array of objects
    if (itemOrder) {
      for (const item of orderData) {
        if (item.style === itemOrder.style && item.size === itemOrder.size) {
          item.quantity += itemOrder.quantity;
          item.price += parseFloat((itemOrder.price * itemOrder.quantity).toFixed(2));
          setOrderData(orderData);
          return;
        }
      }
      setOrderData([...orderData, itemOrder]);
    }
  }, [itemOrder]);

  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='errorMessage'>{error}</p>;

  return (
    <>
      <Category category={category} />
      <div className='gallery wrapper'>
        {productInfo.map((shoe, index) => {
          return <GalleryItem shoe={shoe} key={index} category={category} setItemOrder={setItemOrder} setProduct={setProduct} />;
        })}
      </div>
    </>
  );
}
