import React from "react";
import { useDispatch } from "react-redux";
import {
  addProduct,
  reduceCartItem,
  removeCartItem,
} from "../../../store/cart/actions";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./cartItem.module.css";

export default function CartItem(item) {
  const dispatch = useDispatch();

  const handleRemoveCartItem = (item) => {
    dispatch(removeCartItem(item));
  };

  const handleAddProduct = (item) => {
    dispatch(addProduct(item));
  };

  const handleReduceItem = (item) => {
    dispatch(reduceCartItem(item));
  };

  return (
    <div className={styles.rootWrap}>
      <img
        className={styles.img}
        src={`http://localhost:5000/${item.image}`}
        alt={item.name}
      />
      <div className={styles.infoWrap}>
        <div className={styles.removeWrap}>
          <FontAwesomeIcon
            icon={faTimes}
            className={styles.icon}
            onClick={() => {
              handleRemoveCartItem(item);
            }}
          />
        </div>

        <h1 className={styles.title}>
          {item.name} <span className={styles.price}>${item.price}</span>
        </h1>

        <div>
          <button
            className={styles.btn}
            onClick={() => {
              handleReduceItem(item);
            }}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className={styles.btn}
            onClick={() => {
              handleAddProduct(item);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
