import React from "react";
import { useStateValue } from "./StateProvider";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg"
          alt=""
        />
        {basket.length === 0 ? (
          <div>
            <h2>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item
            </h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {/* list of checkout products */}
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
