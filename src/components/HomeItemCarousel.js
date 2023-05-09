import React, { useState } from "react";
import styles from "./../styles/HomeItemCarousel.module.css";
import { Button } from "react-bootstrap";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeItemCarousel = ({ title, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className={styles.carouselContainer}>
        {/* <div className={styles.carouselHeader}>
          <p className={styles.carouselTitle}>{title}</p>
          <Button variant="success" className={styles.carouselBtn}>
            View all
          </Button>
        </div> */}
        <div>
          <h2 style={{ textAlign: "center", width: "100%", padding: 30 }}>
            {title}
          </h2>
          <div>
            <Slider {...settings}>
              {data.map((item, idx) => (
                <div key={idx}>
                  <img src={item.src} style={{ width: "80%" }} />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>&nbsp;</div>
    </>
  );
};

export default HomeItemCarousel;
