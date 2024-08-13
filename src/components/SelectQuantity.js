/* eslint-disable react/prop-types */
export default function SelectQuantity(props) {
  const { quantity, setQuantity } = props;

  const minQty = 0;
  const maxQty = 10;
  const addQty = () => {
    quantity < maxQty ? setQuantity(quantity + 1) : setQuantity(maxQty);
  };
  const subtractQty = () => {
    quantity > minQty ? setQuantity(quantity - 1) : setQuantity(minQty);
  };
  const handleQty = e => {
    if (e.target.value > maxQty) {
      setQuantity(maxQty);
      return;
    }
    if (e.target.value < minQty) {
      setQuantity(minQty);
      return;
    }
    setQuantity(e.target.value);
    setQuantity(quantity);
  };
  return (
    <form onChange={handleQty} action='' className='setQuantity'>
      <label htmlFor='qty' className='qty'>
        Quantity:
      </label>
      <button type='button' id='btn minus' onClick={subtractQty}>
        -
      </button>
      <input name='qty' id='qty' type='number' className='qtyValue' value={quantity} onChange={handleQty} />
      <button type='button' id='btn plus' onClick={addQty}>
        +
      </button>
    </form>
  );
}
