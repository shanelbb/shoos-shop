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
    const [orderTotal, setOrderTotal] = useState(0);
    const [productInfo, setProductInfo] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("./api/fetchProducts")
            .then(res => res.json())
            .then(data => {
                const { products } = data;
                setProductInfo(products);
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
                if (
                    item.style === itemOrder.style &&
                    item.size === itemOrder.size
                ) {
                    item.quantity += itemOrder.quantity;
                    item.price += parseFloat(
                        (itemOrder.price * itemOrder.quantity).toFixed(2)
                    );
                    setOrderData(orderData);
                    return;
                }
            }
            setOrderData([...orderData, itemOrder]);
            const new_id = Date.now();
            addOrderDetails(new_id);
            addItemDetails(new_id);
        }
    }, [itemOrder]);

    const addOrderDetails = async bag_id => {
        const body = { orderData, bag_id };

        const response = await fetch("/api/post/addOrder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const data = await response.json();
    };

    const addItemDetails = async bag_id => {
        const body = { itemOrder, bag_id };
        const response = await fetch("/api/post/addItem", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const data = await response.json();
    };

    return (
        <>
            <Header orderData={orderData} orderTotal={orderTotal} />
            <Category category={category} />
            <div className="gallery wrapper">
                {productInfo.map((shoe, index) => {
                    return (
                        <GalleryItem
                            shoe={shoe}
                            key={index}
                            category={category}
                            setItemOrder={setItemOrder}
                        />
                    );
                })}
            </div>
            <Footer />
        </>
    );
}
