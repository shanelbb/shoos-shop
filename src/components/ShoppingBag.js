import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

/* eslint-disable react/prop-types */
export default function ShoppingBag(props) {
  const { orderData, setOrderTotal, orderTotal, css, setOpen } = props;

  const ref = useRef(null);

  const router = useRouter();
  const { category } = router.query;

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

  useEffect(() => {
    let sum = 0;
    if (orderData) {
      orderData.forEach(item => (sum += item.price));
      setOrderTotal(parseFloat(sum.toFixed(2)));
    }
  }, [orderData]);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className='shoppingBag' style={css} ref={ref}>
      <h4>shoos.</h4>
      <div className='shoppingContent'>
        <h5>Shopping Bag</h5>
        {orderData ? (
          orderData.map((shoe, index) => {
            return (
              <div className='shoppingContentItem' key={index}>
                <Image src={shoe.src} alt={shoe.style} width={200} height={200} style={{ width: "200px", maxWidth: "200px", objectFit: "cover" }} />
                <div className='orderDetails' key={index}>
                  <div>
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
          <p className='empty'>Your Shopping Bag is Empty</p>
        )}
        <div className='total'>
          <p>Total:</p>
          <p>${orderTotal ? orderTotal : "0.00"}</p>
        </div>
      </div>
      <div className='shoppingBtns'>
        <Link href='/checkout'>
          <button className='checkoutBtn' onClick={handleClick}>
            Checkout
          </button>
        </Link>
        <Link
          href={{
            pathname: "/gallery",
            query: { category: category },
          }}
        >
          <button onClick={() => setOpen(false)}>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}
