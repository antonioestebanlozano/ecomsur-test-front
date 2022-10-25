import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../store/cart/selectors";

import CartItem from "../../components/Item/CartItem";

import styles from "./cartPage.module.css";

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default function CartPage() {
  const { cartItems, total } = useSelector(mapState);

  const items = [];

  return (
    <div className={styles.rootWrap}>
      {cartItems.length > 0 ? (
        <div className={styles.cartWrap}>
          <h1 className={styles.title}>Your Cart:</h1>
          <br />
          {cartItems.map((item) => {
            return <CartItem key={item._id} {...item} />;
          })}
          <br />
          <h1 className={styles.title}>Total: ${total.toLocaleString()}</h1>
        </div>
      ) : (
        <div className={styles.emptyCartWrap}>
          <h1 className={styles.title}>No items in your cart yet 😢</h1>
        </div>
      )}
    </div>
  );
}
