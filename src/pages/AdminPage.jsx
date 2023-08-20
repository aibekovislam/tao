import React from "react";
import styles from "./AdminPage.module.css";

function AdminPage() {
  return (
    <div className={styles.adminPage}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.title}>Администрация</div>
        </div>
      </nav>
      <div className={styles.container}>
        <div className={styles.admin__items}>
          <h1>Заказы: </h1>
          <div className={styles.admin__item}>
            <div className={styles.order__card}>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  marginBottom: "3vh",
                }}
              >
                <div className={styles.order__category}>Заказ №1</div>
                <div className={styles.order__date}>19.08.2023</div>
              </div>
              <div className={styles.order__accept}>Подробнее</div>
            </div>
            <div className={styles.order__card}>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  marginBottom: "3vh",
                }}
              >
                <div className={styles.order__category}>Заказ №1</div>
                <div className={styles.order__date}>19.08.2023</div>
              </div>
              <div className={styles.order__accept}>Подробнее</div>
            </div>
            <div className={styles.order__card}>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  marginBottom: "3vh",
                }}
              >
                <div className={styles.order__category}>Заказ №1</div>
                <div className={styles.order__date}>19.08.2023</div>
              </div>
              <div className={styles.order__accept}>Подробнее</div>
            </div>
            <div className={styles.order__card}>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  marginBottom: "3vh",
                }}
              >
                <div className={styles.order__category}>Заказ №1</div>
                <div className={styles.order__date}>19.08.2023</div>
              </div>
              <div className={styles.order__accept}>Подробнее</div>
            </div>
            <div className={styles.order__card}>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  marginBottom: "3vh",
                }}
              >
                <div className={styles.order__category}>Заказ №1</div>
                <div className={styles.order__date}>19.08.2023</div>
              </div>
              <div className={styles.order__accept}>Подробнее</div>
            </div>
            <div className={styles.order__card}>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  marginBottom: "3vh",
                }}
              >
                <div className={styles.order__category}>Заказ №1</div>
                <div className={styles.order__date}>19.08.2023</div>
              </div>
              <div className={styles.order__accept}>Подробнее</div>
            </div>
            <div className={styles.order__card}>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  marginBottom: "3vh",
                }}
              >
                <div className={styles.order__category}>Заказ №1</div>
                <div className={styles.order__date}>19.08.2023</div>
              </div>
              <div className={styles.order__accept}>Подробнее</div>
            </div>
          </div>
          <div className={styles.admin__item}></div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
