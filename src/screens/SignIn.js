import React from "react";
import background from "./../assets/loginImage.png";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const SignIn = () => {
  return (
    <div style={{ backgroundColor: "#00632d", height: "100vh" }}>
      <div
        style={{
          backgroundColor: "white",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          width: "95%",
          height: "95%",
          paddingTop: "55px",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "50%",
            position: "relative",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: 48,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Sign in
            </span>
            <Form
              style={{
                display: "flex",
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
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default SignIn;
