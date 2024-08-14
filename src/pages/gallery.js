import Category from "@/components/Category";
import GalleryItem from "@/components/GalleryItem";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

/* eslint-disable react/prop-types */
export default function Gallery(props) {
  const { itemOrder, setItemOrder, orderData, setOrderData, productInfo, setProductInfo, setOrderTotal, setProduct } = props;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const { category } = router.query;

  const isFirstRender = useRef(true);

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

  // handle the itemOrder in the setOrderData - array of objects
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log("Gallery: Changed first render to false");
    // return if no itemOrder
    if (!itemOrder) return;

    // if no cart, create cart with item
    if (!orderData) {
      setOrderData([itemOrder]);
      return;
    }

    // If item exists in cart, update only that item
    if (orderData.some(item => item.product_id === itemOrder.product_id && item.size === itemOrder.size)) {
      const currentState = [...orderData];

      const newOrderData = currentState.map(item => {
        if (item.product_id === itemOrder.product_id && item.size === itemOrder.size) {
          item.quantity = item.quantity + itemOrder.quantity;
          const newPrice = itemOrder.price * itemOrder.quantity + item.price;
          item.price = parseFloat(newPrice.toFixed(2));
        }
        return item;
      });
      setOrderData(newOrderData);
      return;
    }

    // if item not in cart, add new item to cart
    setOrderData([...orderData, itemOrder]);
  }, [itemOrder]);

  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='errorMessage'>{error}</p>;

  return (
    <>
      <Category category={category} />
      <div className='gallery wrapper'>
        {productInfo.map((shoe, index) => {
          return <GalleryItem shoe={shoe} key={index} category={category} setItemOrder={setItemOrder} setProduct={setProduct} setOrderTotal={setOrderTotal} />;
        })}
      </div>
    </>
  );
}
