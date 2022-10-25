import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsStart } from "../../store/products/actions";

import styles from "./productList.module.css";

//Components
import Item from "../../components/Item";

const mapState = ({ productsData }) => ({
  products: productsData.products,
  areLoading: productsData.areLoading,
});

export default function ProductListPage() {
  const dispatch = useDispatch();

  const { products, areLoading } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  if (areLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className={styles.rootWrap}>
        {products.map((product) => {
          const {
            _id,
            name,
            image,
            description,
            brand,
            category,
            price,
            countInStock,
            rating,
            numReviews,
          } = product;

          const configProduct = { ...product };

          return <Item key={_id} {...configProduct} />;
        })}
      </div>
    );
  }
}
