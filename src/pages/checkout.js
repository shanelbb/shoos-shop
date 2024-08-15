/* eslint-disable react/react-in-jsx-scope */
// import { useState } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function Checkout(props) {
  const { orderData, setOrderData, orderTotal, setOrderTotal, orderQty, setOrderQty } = props;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState();

  useEffect(() => {
    let qty = 0;
    if (orderData) {
      orderData.forEach(item => (qty += item.quantity));
      setOrderQty(qty);
    }
  }, [orderData]);

  const updateDatabase = () => {
    setIsSubmitted(true);
    addOrderDetails()
      .then(data => {
        addItemDetails(data.id);
      })
      .then(setOrderData(null))
      .then(setOrderTotal(0))
      .then(setOrderQty(0));
  };

  const addOrderDetails = async () => {
    const orderSummary = {
      orderQty,
      orderTotal,
      completed: true,
      user_id: null,
    };
    const body = { orderSummary };

    const response = await fetch("/api/post/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  };

  const addItemDetails = async bag_id => {
    const body = { orderData, bag_id };
    const response = await fetch("/api/post/addItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    setOrderRef(bag_id);
  };

  return (
    <>
      <div className='outerWrapper'>
        <div
          className='banner checkoutBanner'
          style={{
            backgroundImage: 'url("https://krwzqpaj7utmeydl.public.blob.vercel-storage.com/banners/aboutUsBanner-bkRtuyvIna278vVgeJOajZgntDH8gj.jpg")',
          }}
        >
          <h2 className='category'>Checkout</h2>
        </div>
        <div className='wrapper'>
          <section className='checkout'>
            <h5>Order Summary</h5>
            {orderData && !isSubmitted ? (
              orderData.map((shoe, index) => {
                return (
                  <div className='itemOrderSummary' key={index}>
                    <Image src={shoe.src} alt={shoe.style} width={250} height={250} style={{ width: "100%", maxWidth: "250px", height: "auto", objectFit: "cover" }} />
                    <div className='orderDetails' key={index}>
                      <div className='shoeDescription'>
                        <p className='brand'>{shoe.brand}</p>
                        <p className='style'>{shoe.style}</p>
                        <p className='size'>Size: {shoe.size}</p>
                      </div>

                      <div className='itemSummary'>
                        <div>
                          <p className='qty'>Qty</p>
                          <p className='price'>Price</p>
                        </div>
                        <div className='itemTotals'>
                          <p className='qty qtyNum'>{shoe.quantity}</p>
                          <p className='price'>${shoe.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Your Shopping Bag is Empty</p>
            )}

            <div className='orderSummary'>
              <div>
                <p>Items Qty:</p>
                <p className='price'>
                  <strong>Total Price:</strong>
                </p>
              </div>
              <div className='orderTotals'>
                <p>{orderQty}</p>
                <p className='price'>
                  <strong>${orderTotal ? orderTotal : "0.00"}</strong>
                </p>
              </div>
            </div>
          </section>
          {!isSubmitted ? (
            <section className='payment'>
              <h5>Payment Information</h5>
              <form action='POST'>
                <div className='userInfo'>
                  <label className='visually-hidden' htmlFor='fName'></label>
                  <input className='nameInput' type='text' id='fName' placeholder='First Name'></input>
                  <label className='visually-hidden' htmlFor='lName'></label>
                  <input type='text' id='lName' placeholder='Last Name'></input>
                </div>
                <div className='cardInfo'>
                  <input className='numberInput' type='number' id='ccn' maxLength='19' minLength='6' pattern='[\d ]{10,30}' placeholder='Card Number'></input>
                  <label className='visually-hidden' htmlFor='ccn'></label>
                  <input type='number' id='expiry' maxLength='4' minLength='4' placeholder='Expiry Date (MMYY)'></input>
                  <label className='visually-hidden' htmlFor='expiry'></label>
                  <label className='visually-hidden' htmlFor='cvv'></label>
                  <input type='number' id='cvv' maxLength='3' minLength='3' placeholder='CVV'></input>
                </div>
                <h5>Shipping Address</h5>
                <div className='addressInfo'>
                  <div className='addressDetails'>
                    <label className='visually-hidden' htmlFor='street'></label>
                    <input type='text' id='street' placeholder='Street'></input>
                    <label className='visually-hidden' htmlFor='Town/City'></label>
                    <input type='text' id='Town/City' placeholder='Town/City'></input>
                  </div>
                  <div className='addressDetails'>
                    <label className='visually-hidden' htmlFor='country'></label>
                    <input type='text' id='country' placeholder='Country'></input>
                    <label className='visually-hidden' htmlFor='postCode'></label>
                    <input type='text' id='postCode' placeholder='Postal Code' maxLength='7' minLength='6'></input>
                  </div>
                </div>
                <button type='submit' className='reviewSubmit' onClick={updateDatabase}>
                  Complete Payment
                </button>
              </form>
            </section>
          ) : (
            <section className='orderConfirmation'>
              <h5>Your order has been received!</h5>
              <p>Order Reference: 74667-{orderRef}</p>
              <p>Please allow 5-7 business days for shipping.</p>
              <p>Thank you for shopping at Shoos.</p>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
