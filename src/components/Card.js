import React, { useContext, useState } from "react";
import { Context } from "../Context";

function Card(props) {
  const [cartButton, setCartButton] = useState("Add to cart");

  const contx = useContext(Context);
  const incrementCart = () => {
    contx.setCartTotal(contx.cartTotal + 1);
    setCartButton("Remove from cart");
  };
  const decrementCart = () => {
    contx.setCartTotal(contx.cartTotal - 1);
    setCartButton("Add to cart");
  };

  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Sale badge--> */}
          {props.sale ? (
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
          ) : (
            <></>
          )}

          {/* <!-- Product image--> */}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{props.name}</h5>
              {/* <!-- Product reviews--> */}
              {props.reviews ? (
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                </div>
              ) : (
                <></>
              )}
              {/* <!-- Product price--> */}
              {props.OrigPrice ? (
                <>
                  <span className="text-muted text-decoration-line-through">
                    {props.OrigPrice}
                  </span>
                  &nbsp;
                </>
              ) : (
                <></>
              )}

              {props.price}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {/* <a className="btn btn-outline-dark mt-auto" href="#">
                Add to cart
              </a> */}
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={
                  cartButton === "Add to cart" ? incrementCart : decrementCart
                }
              >
                {cartButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
