import React, { useEffect, useState } from "react";
import { useMainContext } from "../context/MainContext";
import styles from "./ProductModal.module.css";

function DishModal({ product, onClose }) {
  const { getOneDish, dish, editDish } = useMainContext();

  const [formValue, setFormValue] = useState({
    name: "",
    price: "",
    category: "",
    imageUrl: "",
    info: "",
  });

  useEffect(() => {
    getOneDish(product.id);
  }, []);

  useEffect(() => {
    if (dish) {
      setFormValue(dish);
    }
  }, [dish]);

  function handleChange(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }

  function handleSubmit(e) {
    e.preventDefault();

    editDish(product.id, formValue);
    setFormValue({
      name: "",
      price: "",
      category: "",
      imageUrl: "",
      info: "",
    });
    onClose();
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <form onSubmit={handleSubmit} className={styles.main__info}>
          <input
            className={styles.name}
            onChange={(e) => handleChange(e)}
            type="text"
            value={formValue.name}
            name="name"
          />
          <input
            className={styles.price}
            onChange={(e) => handleChange(e)}
            type="text"
            value={formValue.price}
            name="price"
          />
          <input
            className={styles.calories}
            onChange={(e) => handleChange(e)}
            type="text"
            value={formValue.imageUrl}
            name="imageUrl"
          />
          <input
            className={styles.calories}
            onChange={(e) => handleChange(e)}
            type="text"
            value={formValue.info}
            name="info"
          />
          <select
            style={{ marginTop: "10px" }}
            name="category"
            onChange={(e) => handleChange(e)}
            value={formValue.category}
          >
            <option>Завтраки</option>
            <option>Второе блюдо</option>
            <option>Десерты</option>
          </select>
          <button className={styles.toCart}>Сохранить</button>
        </form>
        <button onClick={onClose} className={styles.btn_close}>
          Close
        </button>
        <img
          src={formValue.imageUrl}
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "10px",
            marginLeft: "30px",
          }}
        />
      </div>
    </div>
  );
}

export default DishModal;
