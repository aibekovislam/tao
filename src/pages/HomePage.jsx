import React, { useEffect, useRef, useState } from "react";
import Filter from "../components/Filter";
import styles from "./HomePage.module.css";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { ReactComponent as ArrowLeftSVG } from "../assets/chevron-back-outline (2).svg";
import { ReactComponent as ArrowRightSVG } from "../assets/chevron-forward-outline (4).svg";
import { useMainContext } from "../context/MainContext";
import ProductModal from "../modals/ProductModal";

function HomePage() {
  const { getDishes, dishes } = useMainContext();
  const breakfastDishes = dishes.filter((dish) => dish.category === "Завтраки");
  const secondDishes = dishes.filter(
    (dish) => dish.category === "Второе блюдо"
  );
  const dessertDishes = dishes.filter((dish) => dish.category === "Десерты");

  const products = [
    {
      name: "Japaneese styke sushi",
      price: 20,
      imageUrl:
        "https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778",
      calories: 300,
    },
    {
      name: "miso",
      price: 25,
      imageUrl:
        "https://www.crowdedkitchen.com/wp-content/uploads/2020/08/vegan-miso-soup.jpg",
      calories: 400,
    },
    {
      name: "ramen",
      price: 25,
      imageUrl:
        "https://www.kikkoman.eu/fileadmin/_processed_/4/4/csm_Japanese_authentic_soy_sauce_Ramen2_e282387f02.jpg",
      calories: 400,
    },
    {
      name: "onigiri",
      price: 25,
      imageUrl:
        "https://food-images.files.bbci.co.uk/food/recipes/onigiri_39079_16x9.jpg",
      calories: 400,
    },
  ];
  const [addedToCart, setAddedToCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = () => {
    setAddedToCart(!addedToCart);
  };

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

  return (
    <div className={styles.container}>
      <Filter />

      <div className={styles.titles}>
        <div className={styles.first__title}>
          Завтраки <span>Всего: {breakfastDishes?.length} блюда</span>
        </div>
        <div className={styles.carousel}>
          <div ref={sliderRef} className={styles.carousel__item}>
            <Slider {...settings}>
              {breakfastDishes?.map((dish, index) => (
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
                    <img src={dish.imageUrl} />
                  </div>
                  <div className={styles.price}>{dish.price}сом</div>
                  <div className={styles.dishes__name}>{dish.name}</div>
                  <div className={styles.info}>{dish.info}</div>
                </div>
              ))}
            </Slider>
          </div>
          {showModal && selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={closeModal}
              className={styles.modal}
            />
          )}
        </div>
      </div>
      <div className={styles.titles} style={{ marginTop: "50px" }}>
        <div className={styles.first__title}>
          Вторые блюда <span>Всего: {secondDishes?.length} блюда</span>
        </div>
        <div className={styles.carousel}>
          <div className={styles.carousel__item}>
            <Slider {...settings}>
              {secondDishes?.map((dish, index) => (
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
                    <img src={dish.imageUrl} />
                  </div>
                  <div className={styles.price}>{dish.price}сом</div>
                  <div className={styles.dishes__name}>{dish.name}</div>
                  <div className={styles.info}>{dish.info}</div>
                </div>
              ))}
            </Slider>
          </div>
          {showModal && selectedProduct && (
            <ProductModal product={selectedProduct} onClose={closeModal} />
          )}
        </div>
      </div>
      <div className={styles.titles} style={{ marginTop: "50px" }}>
        <div className={styles.first__title}>
          Десерты <span>Всего: {dessertDishes?.length} блюда</span>
        </div>
        <div className={styles.carousel}>
          <div className={styles.carousel__item}>
            <Slider {...settings}>
              {dessertDishes?.map((dish, index) => (
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
                    <img src={dish.imageUrl} />
                  </div>
                  <div className={styles.price}>{dish.price}сом</div>
                  <div className={styles.dishes__name}>{dish.name}</div>
                  <div className={styles.info}>{dish.info}</div>
                </div>
              ))}
            </Slider>
          </div>
          {showModal && selectedProduct && (
            <ProductModal product={selectedProduct} onClose={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
