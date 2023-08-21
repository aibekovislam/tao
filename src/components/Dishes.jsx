import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "../pages/HomePage.module.css";
import { ReactComponent as ArrowLeftSVG } from "../assets/chevron-back-outline (2).svg";
import { ReactComponent as ArrowRightSVG } from "../assets/chevron-forward-outline (4).svg";
import { useMainContext } from "../context/MainContext";
import Slider from "react-slick";
import ProductModal from "./modals/ProductModal";

function Dishes({
  categoryTitle,
  dishes,
  showModal,
  openModal,
  closeModal,
  sortBy,
}) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.arrowright}`}
        style={{ ...style, display: "block", background: "white" }}
        onClick={onClick}
      >
        <ArrowRightSVG className={styles.arrowRightSVG} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.arrowleft}`}
        style={{
          ...style,
          display: "block",
          background: "white",
          color: "black",
        }}
        onClick={onClick}
      >
        <ArrowLeftSVG className={styles.arrowLeftSVG} />
      </div>
    );
  }

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider variable-width",
    variableWidth: true,
  };

  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const sliderInner = sliderRef.current.querySelector(".slick-list");
      const firstCard = sliderInner.querySelector(".carousel__img2");

      if (firstCard) {
        firstCard.style.transform = "scale(1.2)";
        firstCard.style.width = "120%";
      }
    }
  }, []);

  const [filterBy, setFilterBy] = useState("all");

  console.log(sortBy);

  const sortedAndFilteredDishes = useMemo(() => {
    let filteredDishes = [...dishes];

    if (sortBy == "all") {
      return filteredDishes;
    }

    if (sortBy == "price") {
      filteredDishes.sort((a, b) => b.price - a.price);
    }

    return filteredDishes;
  }, [dishes, sortBy, filterBy]);

  return (
    <div className={styles.titles}>
      <div className={styles.first__title}>
        {categoryTitle} <span>Всего: {dishes?.length} блюда</span>
      </div>
      <div className={styles.carousel}>
        <div className={styles.carousel__item}>
          <Slider {...settings}>
            {sortedAndFilteredDishes?.map((dish, index) => (
              <div
                className={`${styles.carousel__img2} ${
                  index === 0 ? styles.firstCard : ""
                }`}
                key={dish.id}
              >
                <div
                  className={styles.image__block}
                  onClick={() => openModal(dish)}
                >
                  <img src={dish.imageUrl} alt={dish.name} />
                </div>
                <div className={styles.price}>{dish.price}сом</div>
                <div className={styles.dishes__name}>{dish.name}</div>
                <div className={styles.info}>{dish.info}</div>
              </div>
            ))}
          </Slider>
        </div>
        {showModal && <ProductModal product={showModal} onClose={closeModal} />}
      </div>
    </div>
  );
}

export default Dishes;
