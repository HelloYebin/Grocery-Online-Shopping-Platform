import React from "react";
import styles from "./../styles/HomeItemCarousel.module.css";
import { Button, Card, CardGroup } from "react-bootstrap";
import background from "./../assets/mainImage.png";

const HomeItemCarousel = ({ title }) => {
  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselHeader}>
          <p className={styles.carouselTitle}>{title}</p>
          <Button variant="success" className={styles.carouselBtn}>
            View all
          </Button>
        </div>
        <div
          style={{
            marginTop: "50px",
            width: "90%",
            display: "flex",
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <img src={background} style={{ width: "100%" }}></img>
            <p>Food name</p>
            <p>Price</p>
          </div>
          <div
            style={{
              backgroundColor: "blue",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <img src={background} style={{ width: "100%" }}></img>
            <p>Food name</p>
            <p>Price</p>
          </div>
          <div
            style={{
              backgroundColor: "blue",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <img src={background} style={{ width: "100%" }}></img>
            <p>Food name</p>
            <p>Price</p>
          </div>
          <div
            style={{
              backgroundColor: "blue",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <img src={background} style={{ width: "100%" }}></img>
            <p>Food name</p>
            <p>Price</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>&nbsp;</div>
    </>
  );
};

export default HomeItemCarousel;
