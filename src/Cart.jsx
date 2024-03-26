// import React from 'react'
// Cart.propTypes = {
//   item: {},
//   removeFromCart: {},
// };
function Cart({ item, removeFromCart }) {
  return (
    <li>
      {item.name} - RS.{item.rate}
      &#x2003;&#x2003;&#x2003;
      {console.log(removeFromCart)}
      <button
        className="btn btn-outline-dark mt-auto"
        onClick={() => removeFromCart(item)}
      >
        <i className="bi bi-trash-fill"></i>
      </button>
    </li>
  );
}

export default Cart;
