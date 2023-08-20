import React, { useState } from "react";
import styles from "./ProductModal.module.css";

function ProductModal({ product, onClose }) {
  const [countDishes, setCountDishes] = useState(0);

  const handleAdd = () => {
    setCountDishes(countDishes + 1);
  };

  const handleMinus = () => {
    if (countDishes === 0) {
      setCountDishes(0);
    } else {
      setCountDishes(countDishes - 1);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={styles.productImg}
        />
        <div className={styles.main__info}>
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>{product.price} сом / 1 порция</div>
          <div className={styles.calories}>{product.info} cal</div>
          <div className={styles.buttons}>
            <button className={styles.add} onClick={() => handleAdd()}>
              +
            </button>
            <input
              type="number"
              className={styles.counter}
              value={countDishes}
              min="0"
            />
            <button className={styles.minus} onClick={() => handleMinus()}>
              -
            </button>
          </div>
          <div className={styles.finalPrice}>
            {countDishes * Number(product.price)} сом
          </div>
          <button className={styles.toCart}>В корзину</button>
        </div>
        <button onClick={onClose} className={styles.btn_close}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductModal;
