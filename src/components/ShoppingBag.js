import { useEffect, useRef } from "react";
import Link from "next/link";

/* eslint-disable react/prop-types */
export default function ShoppingBag(props) {
  const { orderData, orderTotal, css, setOpen } = props;

  const ref = useRef(null);
  useEffect(() => {
    const handleOutSideClick = event => {
      if (!ref.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  // useEffect(() => {
  //     let sum = 0;
  //     orderData.forEach(item => (sum += item.price));
  //     setOrderTotal(parseFloat(sum.toFixed(2)));
  // }, [orderData]);

  return (
    <div className='shoppingBag' style={css} ref={ref}>
      <h4>shoos.</h4>
      <div className='shoppingContent'>
        <h5>Shopping Bag</h5>
        {orderData ? (
          orderData.map((shoe, index) => {
            return (
              <div className='shoppingContentItem' key={index}>
                <img src={shoe.src} alt='' />
                <div>
                  <p className='brand'>{shoe.brand}</p>
                  <p className='style'>{shoe.style}</p>
                  <p className='size'>Size: {shoe.size}</p>
                </div>
                <div>
                  <p className='qty'>Qty</p>
                  <p className='price'>Price</p>
                </div>
                <div>
                  <p className='qty qtyNum'>{shoe.quantity}</p>
                  <p className='price'>{shoe.price}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className='empty'>Your Shopping Bag is Empty</p>
        )}
        <div className='total'>
          <p>Total:</p>
          <p>${orderTotal === 0 ? "0.00" : orderTotal}</p>
        </div>
      </div>
      <div className='shoppingBtns'>
        <Link href='/checkout'>
          <button className='checkoutBtn'>Checkout</button>
        </Link>
        <Link href='/'>
          <button onClick={() => setOpen(false)}>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}
