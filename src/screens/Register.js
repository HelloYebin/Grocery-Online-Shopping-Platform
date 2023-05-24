import React from "react";
import { Button, Form } from "react-bootstrap";
import { styled } from "styled-components";
import background from "./../assets/signupImage.png";
import { ContainerWithForm } from "../components/AppStyle";

const LeftPanel = styled.div`
  width: 50%;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Register = () => {
  return (
    <div style={{ backgroundColor: "#00632d", height: "100vh" }}>
      <ContainerWithForm>
        <LeftPanel>
          <p className="h1 fw-bold">Welcome!</p>
          <p className="h6">Let's get started with your 14days free trial</p>
          <Form style={{ width: "60%" }}>
            <Form.Group>
              <Form.Label className="fw-bold">Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                style={{ textAlign: "center", borderColor: "#00632D" }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-bold">Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                style={{ textAlign: "center", borderColor: "#00632D" }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-bold">Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                style={{ textAlign: "center", borderColor: "#00632D" }}
              />
            </Form.Group>
          </Form>
          <Button
            variant="warning"
            style={{
              fontWeight: "bold",
              borderRadius: 30,
              fontSize: 24,
              marginTop: 30,
            }}
          >
            Register
          </Button>
        </LeftPanel>
        <div
          style={{
            width: "50%",
            position: "relative",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={background}
            className="img-fluid"
            alt="registerImg"
            style={{ width: "90%", height: "100%" }}
          ></img>
        </div>
      </ContainerWithForm>
    </div>
  );
};

export default Register;
