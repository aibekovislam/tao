import React, { useState } from "react";
import { useMainContext } from "../context/MainContext";
import styles from "./OrderInfo.module.css";

function OrderModal({ order, onClose }) {
  const { markAsServed } = useMainContext();
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.main__info}>
          <div className={styles.name}>Номер: {order.phone}</div>
          <ul className={styles.calories}>
            {order.dishes.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <button
            className={styles.toCart}
            onClick={() => {
              onClose();
              markAsServed(order.id, { ...order, ordered: true });
            }}
          >
            Принять
          </button>
        </div>
        <button onClick={onClose} className={styles.btn_close}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default OrderModal;
