// import React from 'react'
Section.propTypes = {
  product: {},
  addToCart: {},
  removeFromCart: {},
  cart: {},
};
function Section({ product, addToCart, removeFromCart, cart }) {
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Sale badge--> */}
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
          {/* <!-- Product image--> */}
          <img className="card-img-top" src={product.image} height={250} />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{product.name}</h5>
              {/* <!-- Product reviews--> */}
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>
              {/* <!-- Product price--> */}
              <span className="text-muted text-decoration-line-through">
                RS.{product.discount}
              </span>
              -RS.{product.rate}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {cart.some((item) => item.id === product.id) ? (
                <button
                  onClick={() => removeFromCart(product)}
                  className="btn btn-outline-dark mt-auto"
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-outline-dark mt-auto"
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
