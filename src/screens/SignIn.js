import React from "react";
import background from "./../assets/loginImage.png";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { styled } from "styled-components";
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

const SignIn = () => {
  return (
    <div style={{ backgroundColor: "#00632d", height: "100vh" }}>
      <ContainerWithForm>
        <LeftPanel>
          <p className="h1 fw-bold">Sign in</p>

          <Form
            style={{
              display: "flex",
              width: "60%",
              flexDirection: "column",
            }}
          >
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Please add you ID here"
                style={{ textAlign: "center", borderColor: "#00632D" }}
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Please add your password here"
                style={{ textAlign: "center", borderColor: "#00632D" }}
              />
            </Form.Group>
            <view style={{ alignSelf: "flex-end" }}>
              <Button variant="success" style={{ fontSize: 16, padding: 4 }}>
                Find your ID/Password
              </Button>
            </view>
          </Form>
          <view
            style={{ display: "flex", justifyContent: "space-between" }}
            className="mt-5"
          >
            <Button
              variant="success"
              style={{ fontWeight: "bold", borderRadius: 30, fontSize: 24 }}
            >
              Sing in
            </Button>
            <Button
              variant="warning"
              style={{ fontWeight: "bold", borderRadius: 30, fontSize: 24 }}
            >
              Register
            </Button>
          </view>
        </LeftPanel>
        <div
          style={{
            backgroundImage: `url(${background})`,
            width: "50%",
            position: "relative",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        ></div>
      </ContainerWithForm>
    </div>
  );
};

export default SignIn;
