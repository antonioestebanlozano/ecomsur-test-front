import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectCartItemsCount } from "../../store/cart/selectors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import styles from "./header.module.css";

const mapState = (state) => ({
  totalNumCartItems: selectCartItemsCount(state),
});

export default function Header() {
  const { totalNumCartItems } = useSelector(mapState);

  return (
    <div className={styles.rootWrap}>
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingBag} className={styles.icon} /> &nbsp;
        {totalNumCartItems}
      </Link>
    </div>
  );
}
