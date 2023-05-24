import React from "react";
import { ContainerWithForm } from "../components/AppStyle";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const AdminSignin = () => {
  return (
    <div>
      <ContainerWithForm>
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
      </ContainerWithForm>
    </div>
  );
};

export default AdminSignin;
