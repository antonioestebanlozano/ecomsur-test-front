import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addProduct } from "../../store/cart/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import styles from "./item.module.css";

export default function Item(product) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    _id,
    name,
    brand,
    image,
    description,
    category,
    price,
    countInStock,
    rating,
    numReviews,
  } = product;

  const handleAddToCart = (product) => {
    if (!product) return;

    dispatch(addProduct(product));

    navigate("/cart");
  };

  function renderRating(rating) {
    if (rating % Math.floor(rating) === 0) {
      let stars = [];

      for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      }

      return stars;
    } else {
      let stars = [];

      for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      }

      stars.push(<FontAwesomeIcon key={8} icon={faStarHalf} />);

      return stars;
    }
  }

  return (
    <div
      className={styles.rootWrap}
      style={{ backgroundImage: `url(http://localhost:5000/${image})` }}
    >
      <div className={styles.ratingWrap}>
        {renderRating(rating)} {numReviews}
      </div>

      <Link to={`/products/${_id}`}>
        <h1 className={styles.title}>{name}</h1>
      </Link>

      <button
        disabled={countInStock <= 0}
        className={countInStock > 0 ? styles.btn : styles.btnDisabled}
        onClick={() => handleAddToCart(product)}
      >
        {countInStock > 0 ? "Add item to cart" : "Out of stock"}
      </button>
    </div>
  );
}
