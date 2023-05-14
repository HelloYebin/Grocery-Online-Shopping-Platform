import React from "react";
import Header from "../components/Header";

const SignIn = () => {
  return (
    <div style={{ backgroundColor: "#00632d", height: "100vh" }}>
      <Header />
      <div
        style={{
          backgroundColor: "white",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          width: "95%",
          height: "95%",
        }}
      ></div>
    </div>
  );
};

export default SignIn;
