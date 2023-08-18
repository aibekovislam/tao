import React from "react";
import Filter from "../components/Filter";
import styles from "./HomePage.module.css";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { ReactComponent as ArrowLeftSVG } from "../assets/chevron-back-outline (2).svg";
import { ReactComponent as ArrowRightSVG } from "../assets/chevron-forward-outline (4).svg";

function HomePage() {
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider variable-width",
    variableWidth: true,
  };

  return (
    <div className={styles.container}>
      <Filter />
      <div className={styles.titles}>
        <div className={styles.first__title}>
          Завтраки <span>Всего: 4 блюда</span>
        </div>
        <div className={styles.carousel}>
          <div className={styles.carousel__item}>
            <Slider {...settings}>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className={styles.titles} style={{ marginTop: "50px" }}>
        <div className={styles.first__title}>
          Вторые блюда <span>Всего: 4 блюда</span>
        </div>
        <div className={styles.carousel}>
          <div className={styles.carousel__item}>
            <Slider {...settings}>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className={styles.titles} style={{ marginTop: "50px" }}>
        <div className={styles.first__title}>
          Десерты <span>Всего: 4 блюда</span>
        </div>
        <div className={styles.carousel}>
          <div className={styles.carousel__item}>
            <Slider {...settings}>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
              <div className={styles.carousel__img2}>
                <img src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" />
                <div className={styles.price}>20$</div>
                <div className={styles.dishes__name}>Japaneese styke sushi</div>
                <div className={styles.info}>480cal</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
