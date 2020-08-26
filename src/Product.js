import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    // add item to basket
    // when dispatching it listens the reducer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img className="product__img" src={image} alt="" />
      <button className="product__button" onClick={addToBasket}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
