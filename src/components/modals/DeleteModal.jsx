import React, { FC, useState } from "react";
import styles from "./DeleteModal.module.scss";

const DeleteModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFood, setSelectedFood] = useState("");

  const handleDeleteConfirm = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p>
          Вы действительно хотите удалить блюдо
          <span className={styles.modalSpan}>{selectedFood}</span>
        </p>
        <div className={styles.modalButtons}>
          <button
            onClick={() => setShowModal(false)}
            className={styles.cancelBTN}
          >
            Отмена
          </button>
          <button onClick={handleDeleteConfirm} className={styles.deleteBTN}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
