import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as SearchSVG } from "../assets/search-outline.svg";
import { ReactComponent as OrderSVG } from "../assets/cart-outline (1).svg";
import Order from "./Order";
import { cartInfo } from "./modals/ProductModal";

function Navbar() {
  const [breakfast, setBreakfast] = useState(true);
  const [lunch, setLunch] = useState(false);
  const [desert, setDesert] = useState(false);
  const [order, setOrder] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__items}>
        <div className={styles.navbar__item}>
          <div className={styles.navbar__logo}>
            <img
              src="https://content.taogroup.com/viwe/tao/assets/logo-main.png"
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.navbar__item2}>
          <div className={styles.order__block} onClick={() => setOrder(!order)}>
            <OrderSVG className={styles.order} />
          </div>
          {order && (
            <div className={styles.order__des}>
              <Order setOrder={setOrder} order={cartInfo} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.navigation__vertical}>
        <div className={styles.navigation__items}>
          <div
            className={`${styles.navigation__item} ${desert && styles.active}`}
            onClick={() => {
              setBreakfast(false);
              setLunch(false);
              setDesert(true);
            }}
          >
            Десерты
          </div>
          <div
            className={`${styles.navigation__item2} ${lunch && styles.active}`}
            onClick={() => {
              setBreakfast(false);
              setLunch(true);
              setDesert(false);
            }}
          >
            Второе Блюдо
          </div>
          <div
            className={`${styles.navigation__item} ${
              breakfast && styles.active
            }`}
            onClick={() => {
              setBreakfast(true);
              setLunch(false);
              setDesert(false);
            }}
          >
            Завтраки
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
