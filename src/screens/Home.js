import React from "react";
import styles from "./../styles/Home.module.css";
import background from "./../assets/mainImage.png";

const Main = () => {
  return (
    <div class="d-flex">
      <div className={styles.container}>
        <div
          class="p-3 mb-4 bg-body-tertiary rounded-3 d-flex align-items-center"
          style={{ height: "100vh" }}
        >
          <div class="container-fluid py-5">
            <p class="display-3 fw-bold text-white">GroceMates</p>
            <h3 class="display-5 fw-bold text-white">Feed your energy</h3>
            <p class="col-md-8 fs-4 text-white">
              Healthy, delicious and easy meals made your life happier and
              joyful.
            </p>
            <button class="btn btn-warning fw-bold btn-lg" type="button">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          width: "55vw",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Main;
