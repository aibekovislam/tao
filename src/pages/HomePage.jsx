import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import styles from "./HomePage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMainContext } from "../context/MainContext";
import Dishes from "../components/Dishes";

function HomePage() {
  const { getDishes, dishes } = useMainContext();
  const breakfastDishes = dishes.filter((dish) => dish.category === "Завтраки");
  const secondDishes = dishes.filter(
    (dish) => dish.category === "Второе блюдо"
  );
  const dessertDishes = dishes.filter((dish) => dish.category === "Десерты");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    getDishes();
  }, []);

  const [sortBy, setSortBy] = useState("price");
  const [filterBy, setFilterBy] = useState("all");

  const handleSortChange = (selectedSort) => {
    setSortBy(selectedSort);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilterBy(selectedFilter);
  };

  return (
    <div className={styles.container}>
      <Filter
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />
      <div className={styles.titles}>
        <div className={styles.carousel}>
          <Dishes
            categoryTitle="Завтраки"
            dishes={breakfastDishes}
            showModal={selectedProduct}
            openModal={openModal}
            closeModal={closeModal}
            sortBy={sortBy}
          />
        </div>
      </div>
      <div className={styles.titles} style={{ marginTop: "50px" }}>
        <div className={styles.carousel}>
          <Dishes
            categoryTitle="Вторые блюда"
            dishes={secondDishes}
            showModal={selectedProduct}
            openModal={openModal}
            closeModal={closeModal}
            sortBy={sortBy}
          />
        </div>
      </div>
      <div className={styles.titles} style={{ marginTop: "50px" }}>
        <div className={styles.carousel}>
          <Dishes
            categoryTitle="Десерты"
            dishes={dessertDishes}
            showModal={selectedProduct}
            openModal={openModal}
            closeModal={closeModal}
            sortBy={sortBy}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
