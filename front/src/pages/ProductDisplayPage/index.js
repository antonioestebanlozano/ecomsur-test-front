import React, { useEffect } from "react";

import { useParams } from "react-router";

import styles from "./productDisplayPage.module.css";

import { useDispatch, useSelector } from "react-redux";

import { fetchProductStart, setProduct } from "../../store/products/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const mapState = (state) => ({
  product: state.productsData.product,
  isLoading: state.productsData.isLoading,
});

export default function ProductDisplayPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { product, isLoading } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProductStart(id));

    return () => {
      dispatch(setProduct({}));
    };
  }, [id]);

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

  if (!product || product === {}) {
    return (
      <div className={styles.rootWrap}>
        <h1>NOT FOUND 404</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.rootWrap}>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className={styles.rootWrap}>
        <div
          className={styles.imgWrap}
          style={{
            backgroundImage: `url(http://localhost:5000/${product.image})`,
          }}
        ></div>
        <div className={styles.infoWrap}>
          <h3 className={styles.brand}>{product.category}</h3>
          <h1 className={styles.productName}>{product.name}</h1>
          <h3 className={styles.subtitle}>{product.brand}</h3>
          <span className={styles.price}>${product.price}</span>
          <br />
          <p>{product.description}</p>
          <div className={styles.ratingsWrap}>
            <span>
              {renderRating(product.rating)} {product.numReviews}
            </span>
            {product.countInStock > 0 ? (
              <span>{product.countInStock} in stock</span>
            ) : (
              <span>Out of stock</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}
