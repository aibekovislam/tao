import React, { useEffect, useState } from "react";
import { useMainContext } from "../context/MainContext";
import DishModal from "../modals/DishModal";
import OrderModal from "../modals/OrderInfo";
import styles from "./AdminPage.module.css";

function DishesList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { getDishes, dishes, deleteDish } = useMainContext();

  useEffect(() => {
    getDishes();
  }, []);

  const openModal = (data) => {
    setSelectedProduct(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className={styles.adminPage}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.title}>Администрация</div>
        </div>
      </nav>
      <div className={styles.container}>
        <div className={styles.admin__items}>
          <h1>Блюда:</h1>
          <div className={styles.admin__item}>
            {dishes?.map((dish) => (
              <div className={styles.order__card}>
                <img
                  src={dish.imageUrl}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <div
                  className={styles.order__category}
                  style={{ width: "100px", padding: "10px" }}
                >
                  {dish.name}
                </div>
                <div
                  className={styles.order__accept}
                  style={{ marginBottom: "10px" }}
                  onClick={() => openModal(dish)}
                >
                  Редактировать
                </div>
                <div
                  className={styles.order__accept}
                  style={{ background: "#c7002e" }}
                  onClick={() => deleteDish(dish.id)}
                >
                  Удалить
                </div>
                {showModal && selectedProduct && (
                  <DishModal product={selectedProduct} onClose={closeModal} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishesList;
