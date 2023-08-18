import React from "react";
import styles from "./Filter.module.css";
import { ReactComponent as ArrowDownSVG } from "../assets/chevron-down-outline (1).svg";

function Filter() {
  return (
    <div className={styles.filter__flex}>
      <div className={styles.filter__sort__item}>
        <div className={styles.filter__title}>SORT</div>
        <select className={styles.category}>
          <option>Sort by price</option>
          <ArrowDownSVG className={styles.arrow} />
          <option>Sort by price</option>
          <option>Sort by price</option>
          <option>Sort by price</option>
        </select>
      </div>
      <div className={styles.filter_filters__item}>
        <div className={styles.filter__title}>FILTERS</div>
        <select className={styles.category}>
          <option>Plant based</option>
          <option>category</option>
          <option>category</option>
          <option>category</option>
        </select>
      </div>
      <div className={styles.filter__item}>
        <button>Vegeterian</button>
      </div>
      <div className={styles.filter__item}>
        <button>Seafood</button>
      </div>
      <div className={styles.filter__item}>
        <button>Politry</button>
      </div>
    </div>
  );
}

export default Filter;
