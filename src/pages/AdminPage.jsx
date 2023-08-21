import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useMainContext } from "../context/MainContext";
import { auth } from "../firebase";
import OrderModal from "../modals/OrderInfo";
import styles from "./AdminPage.module.css";

function AdminPage() {
  const { getOrders, orders, addDish } = useMainContext();

  const [formValue, setFormValue] = useState({
    price: "",
    info: "",
    name: "",
    imageUrl: "",
    ordered: false,
    category: "",
  });

  function handleChange(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }

  function handleSubmit(e) {
    addDish(formValue);
  }

  useEffect(() => {
    getOrders();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (order) => {
    setSelectedProduct(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const { user } = useAuthContext();

  if (!user) {
    return <Navigate replace to="/auth" />;
  }

  return (
    <div className={styles.adminPage}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.title}>
            Администрация{" "}
            <button
              style={{
                padding: "10px 15px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "10px",
                marginLeft: "15px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                signOut(auth);
              }}
            >
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </nav>
      <div className={styles.container}>
        <div className={styles.admin__items}>
          <h1>Добавить блюдо</h1>
          <div className={styles.admin__item2}>
            <form onSubmit={handleSubmit} className={styles.addForm}>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="name"
                placeholder="Название"
              />
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="info"
                placeholder="Каллории"
              />
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="price"
                placeholder="Цена"
              />
              <input
                type="text"
                name="imageURL"
                placeholder="Ссылка на фотографию (из интернета)"
              />
              <select
                value={formValue.category}
                name="category"
                onChange={(e) => handleChange(e)}
              >
                <option value={"Завтраки"}>Завтраки</option>
                <option value={"Второе блюдо"}>Второе блюдо</option>
                <option value={"Десерты"}>Десерты</option>
              </select>
              <button>Добавить</button>
            </form>
          </div>
          <div style={{ margin: "2vh 0vh 1vh 0vh" }}>
            <a href="/admin/dishes">Посмотреть все блюда</a>
          </div>
          <h1>Заказы: </h1>
          <div className={styles.admin__item}>
            {orders
              ?.sort((a, b) => {
                const dateA = new Date(a.date.split(".").reverse().join("-"));
                const dateB = new Date(b.date.split(".").reverse().join("-"));
                return dateB - dateA;
              })
              .map((order, index) => (
                <div
                  className={`${styles.order__card} ${
                    order.ordered === true && styles.ordered
                  }`}
                  key={order.id}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                      marginBottom: "3vh",
                    }}
                  >
                    <div className={styles.order__category}>
                      Заказ №{order.id}
                    </div>
                    <div className={styles.order__date}>{order.date}</div>
                  </div>
                  <div
                    className={styles.order__accept}
                    onClick={() => openModal(order)}
                  >
                    Подробнее
                  </div>
                  {showModal && selectedProduct && (
                    <OrderModal order={selectedProduct} onClose={closeModal} />
                  )}
                </div>
              ))}
          </div>
          <div className={styles.admin__item}></div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
