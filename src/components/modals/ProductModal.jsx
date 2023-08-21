import React, { useState } from "react";
import styles from "./ProductModal.module.css";
import { ReactComponent as CloseSVG } from "../../assets/close.svg";
import { ReactComponent as OrderSVG } from "../../assets/cart-outline (1).svg";

export let cartInfo = [];

function ProductModal({ product, onClose }) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const total = (product.price * count).toFixed(2);

  const cartAdder = (id, price, dish_name, count) => {
    cartInfo.push({
      id: id,
      price: price,
      dish_name: dish_name,
      count: count,
    });
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={styles.productImg}
          />
          <div className={styles.info}>
            <div className={styles.name}>{product.name}</div>
            <div className={styles.under}>
              <div className={styles.calories}>{product.info}</div>
              <div className={styles.weight}>500 г</div>
            </div>
          </div>
          <button onClick={onClose} className={styles.btn_close}>
            <CloseSVG />
          </button>
          <div className={styles.sub_content}>
            <div className={styles.ingredients}>
              {product.description.slice(0, 100)}...
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <button
            className={styles.add}
            onClick={() => {
              cartAdder(product.id, total, product.name, count);
            }}
          >
            добавить
            <OrderSVG className={styles.basket} />{" "}
          </button>
          <div className={styles.counter}>
            <div className={styles.counterContainer}>
              <button className={styles.counterButton} onClick={decrement}>
                -
              </button>
              <span className={styles.counterValue}>{count}</span>
              <button
                className={styles.counterButtonIncrement}
                onClick={increment}
              >
                +
              </button>
            </div>
            <div className={styles.price}>{total} сом</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
