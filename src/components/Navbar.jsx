import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as SearchSVG } from "../assets/search-outline.svg";
import { ReactComponent as OrderSVG } from "../assets/cart-outline (1).svg";

function Navbar() {
  const [breakfast, setBreakfast] = useState(true);
  const [lunch, setLunch] = useState(false);
  const [desert, setDesert] = useState(false);
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
          <div className={styles.search__block}>
            <SearchSVG className={styles.search} />
          </div>
          <div className={styles.order__block}>
            <OrderSVG className={styles.order} />
          </div>
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
            className={`${styles.navigation__item} ${lunch && styles.active}`}
            onClick={() => {
              setBreakfast(false);
              setLunch(true);
              setDesert(false);
            }}
          >
            Второе блюдо
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
