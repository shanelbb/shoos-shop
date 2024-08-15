export default function OrderSummary() {

  return (

    orderData ? (
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
      );
    }
  )
}