import React from "react";
import styles from "./Filter.module.css";
import { ReactComponent as ArrowDownSVG } from "../assets/chevron-down-outline (1).svg";

function Filter({ onSortChange, onFilterChange }) {
  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    onSortChange(selectedSort);
  };

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    onFilterChange(selectedFilter);
  };

  return (
    <div className={styles.filter__flex}>
      <div className={styles.filter__sort__item}>
        <div className={styles.filter__title}>СОРТИРОВАТЬ</div>
        <select onChange={handleSortChange} className={styles.category}>
          <option value="all">Показать все</option>
          <ArrowDownSVG className={styles.arrow} />
          <option value="price">Сортировать по ценам</option>
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
      <div className={styles.filter__item3}>
        <button>Seafood</button>
      </div>
      <div className={styles.filter__item3}>
        <button>Politry</button>
      </div>
    </div>
  );
}

export default Filter;
