import Category from "@/components/Category";
import GalleryItem from "@/components/GalleryItem";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Gallery() {
  const router = useRouter();
  const { category } = router.query;
  const [itemOrder, setItemOrder] = useState(null);
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

  useEffect(() => {
    console.log("itemOrder", itemOrder);
    // handle the itemOrder in the setOrderData - array of objects
    if (itemOrder) {
      setOrderData([...orderData, itemOrder]);
    }
  }, [itemOrder]);

  useEffect(() => {
    console.log("orderData", orderData);
  }, [orderData]);

  return (
    <>
      <Header itemOrder={itemOrder} orderData={orderData} />
      <Category category={category} />
      <div className='gallery wrapper'>
        {productInfo.map((shoe, index) => {
          return <GalleryItem shoe={shoe} key={index} category={category} setItemOrder={setItemOrder} />;
        })}
      </div>
      <Footer />
    </>
  );
}
