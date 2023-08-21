import React, { useState } from "react";
import { useMainContext } from "../context/MainContext";
import styles from "./Navbar.module.css";

function Order({ order, setOrder }) {
  const { addOrder } = useMainContext();

  function formatData() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  }

  const [formValue, setFormValue] = useState({
    date: formatData(),
    ordered: false,
    dishes: order.map((item) => item.dish_name + " " + item.count + "шт"),
    phone: "",
  });

  function handleChange(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    console.log("handleChange:", obj);
    setFormValue(obj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addOrder(formValue);
    console.log("handleSubmit:", formValue);
    setFormValue({
      date: formatData(),
      ordered: false,
      dishes: [],
      phone: "",
    });
    setOrder(false);
  }

  console.log("order:", order);

  return (
    <div className={styles.order__info}>
      {order?.map((item, index) => (
        <div className={styles.d_f}>
          <div className={styles.dd}>
            <div className={styles.dish_name}>
              {index + 1}) {item.dish_name}
            </div>
            <div className={styles.price}>{item.price} сом</div>
            <div className={styles.count}>{item.count} порции</div>
          </div>
        </div>
      ))}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="phone"
          placeholder="Введите номер телефона"
          onChange={(e) => handleChange(e)}
          style={{
            marginBottom: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "5px",
          }}
        />
        <button type="submit" className={styles.order_btn}>
          Заказать
        </button>
      </form>
    </div>
  );
}

export default Order;
