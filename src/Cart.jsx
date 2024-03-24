// import React from 'react'
Cart.propTypes = {
  item: {},
  removeFromCart: {},
};
function Cart({ item, removeFromCart }) {
  return (
    <li>
      <a className="dropdown-item d-flex justify-content-between">
        {item.name} - RS.{item.rate}
        &#x2003;&#x2003;&#x2003;
        <button
          className="btn btn-outline-dark mt-auto"
          onClick={() => removeFromCart(item)}
        >
          <i className="bi bi-trash-fill"></i>
        </button>
      </a>
    </li>
  );
}

export default Cart;
