// import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Cart from "./Cart";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  let products = [
    {
      id: 1,
      name: "iphone 15Pro max",
      image: "https://m.media-amazon.com/images/I/81Os1SDWpcL._SL1500_.jpg",
      rate: 147999,
      discount: 161000.0,
    },
    {
      id: 2,
      name: "Samsung S24 ultra",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztcins-thumb-539573311?$172_172_PNG$",
      rate: 129999.0,
      discount: 134999.0,
    },
    {
      id: 3,
      name: "Oneplus 12",
      image: "https://m.media-amazon.com/images/I/717Qo4MH97L._SL1500_.jpg",
      rate: 64999.0,
      discount: 68000.0,
    },
    {
      id: 4,
      name: "Redmi Note 13Pro 5G",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/s/y/5/-original-imagwu894yyhyyce.jpeg?q=90&crop=false",
      rate: 22799.0,
      discount: 24000.0,
    },
    {
      id: 5,
      name: "Realme 12Pro+ 5G",
      image:
        "https://image01.realme.net/general/20240129/1706510758447623d48e411ec4caa8bab0ba962194150.png.webp?width=1440&height=1440&size=558178",
      rate: 31999,
      discount: 35000.0,
    },
    {
      id: 6,
      name: "Motorola Edge 30 Fusion 5G",
      image: "https://m.media-amazon.com/images/I/71zdwjIW05L._SL1500_.jpg",
      rate: 33950.0,
      discount: 36800.0,
    },
    {
      id: 7,
      name: "vivo V29 Pro 5g",
      image: "https://m.media-amazon.com/images/I/513FITZkhqL._SL1000_.jpg",
      rate: 37999.0,
      discount: 44999.0,
    },
    {
      id: 8,
      name: "iphone 15",
      image:
        "https://idestiny.in/wp-content/uploads/2023/09/iPhone_15_Pink_PDP_Image_Position-1__WWEN.jpg",
      rate: 71999.0,
      discount: 80000.0,
    },
  ];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.rate);
  };

  let removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    console.log(newCart);
    setCart(newCart);
    setTotal(total - product.rate);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container px-4 px-lg-5">
                <form className="d-flex">
                  <button
                    className="btn btn-outline-dark"
                    type="submit"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Cart{" "}
                    <span className="badge bg-dark text-white ms-1 rounded-pill">
                      {cart.length}
                    </span>
                  </button>
                  <ol
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {cart.length === 0 ? (
                      <li>
                        <a className="dropdown-item" href="#">
                          Your Cart is Empty{" "}
                          <i className="bi-cart-fill me-1"></i>
                        </a>
                      </li>
                    ) : (
                      <>
                        <ol>
                          {cart.map((item, index) => {
                            return (
                              <Cart
                                key={index}
                                item={item}
                                removeFromCart={removeFromCart}
                              />
                            );
                          })}
                        </ol>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <b>Total Amount: Rs.{total}</b>
                          </a>
                        </li>
                      </>
                    )}
                  </ol>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </nav>
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product, index) => {
              return (
                <Section
                  key={index}
                  product={product}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  cart={cart}
                />
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
