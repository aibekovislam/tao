import React from "react";
import styles from "./ProductModal.module.css"; // Define your modal styles

function ProductModal({ product, onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={styles.productImg}
        />
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>{product.price}</div>
        <div className={styles.calories}>{product.calories} cal</div>
        <button onClick={onClose} className={styles.btn_close}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductModal;
