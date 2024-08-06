import Category from "@/components/Category";
import shoeInfo from "@/shoeInfo";
import GalleryItem from "@/components/GalleryItem";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
// import { list } from "@vercel/blob";

export default function Gallery() {
    const router = useRouter();
    const { category } = router.query;
    const [itemOrder, setItemOrder] = useState([]);
    const [orderData, setOrderData] = useState([]);

    return (
        <>
            <Header itemOrder={itemOrder} orderData={orderData} />
            <Category category={category} />
            <div className="gallery wrapper">
                {shoeInfo.map((shoe, index) => {
                    return (
                        <GalleryItem
                            shoe={shoe}
                            key={index}
                            category={category}
                            itemOrder={itemOrder}
                            setItemOrder={setItemOrder}
                            setOrderData={setOrderData}
                        />
                    );
                })}
            </div>
            <Footer />
        </>
    );
}
