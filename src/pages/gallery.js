import Category from "@/components/Category";
import GalleryItem from "@/components/GalleryItem";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Gallery() {
  const router = useRouter();
  const { category } = router.query;
  const [itemOrder, setItemOrder] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    fetch("./api/fetchProducts")
      .then(res => res.json())
      .then(data => {
        const { products } = data;
        setProductInfo(products);
      });
  }, [category]);

  const addToBag = () => {
    console.log(itemOrder);
    const newOrderData = orderData.length > 0 ? { ...orderData } : [];
    const newItem = { ...itemOrder };
    newOrderData.push(newItem);
    setOrderData(newOrderData);
    console.log(orderData);
  };

  return (
    <>
      <Header itemOrder={itemOrder} orderData={orderData} addToBag={addToBag} />
      <Category category={category} />
      <div className='gallery wrapper'>
        {productInfo.map((shoe, index) => {
          return <GalleryItem shoe={shoe} key={index} category={category} itemOrder={itemOrder} setItemOrder={setItemOrder} addToBag={addToBag} />;
        })}
      </div>
      <Footer />
    </>
  );
}
