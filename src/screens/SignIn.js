import React from "react";
import background from "./../assets/loginImage.png";
import Form from "react-bootstrap/Form";

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
          <div style={{ width: "50%" }}>
            <span>Sign in</span>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Please add you ID here"
                />
              </Form.Group>

              <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Please add your password here"
                />
              </Form.Group>
            </Form>
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
