import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginBtn, Input } from "./LoginStyle";

function Login({ setLogin }) {
  console.log(setLogin, "hi");
  const history = useNavigate();

  const [loginInfo, setLoginInfo] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("loginInfo")) || {
        email: "",
        password: "",
      }
  );

  const [isLogin, setIsLogin] = useState(false);

  const handleLoginInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    const url = "http://localhost:5000/auth/login";
    const { email, password } = loginInfo;
    if (!email || !password) {
      setErrorMessage("이메일과 비밀번호를 입력해주세요");
    } else {
      axios.post(url, loginInfo).then((response) => {
        setErrorMessage("");
        history("/");
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
        setIsLogin(true);
        setLogin(true);
      });
    }
  };

  return (
    <>
      <h1 style={{ marginTop: "60px", marginBottom: "40px" }}>Login</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <div style={{ margin: "10px" }}>
            <div style={{ marginRight: "10px" }}>Email</div>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleLoginInputValue("email")}
            />
          </div>
        </div>
        <div style={{ margin: "10px" }}>
          <div style={{ marginRight: "10px" }}>Password</div>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleLoginInputValue("password")}
          />
        </div>
        <div className="alert-box">{errorMessage}</div>
        <LoginBtn type="submit" onClick={handleLogin}>
          Login
        </LoginBtn>
      </form>
      <div style={{ marginBottom: "60px" }}>MyResumeLOGO</div>
    </>
  );
}

export default Login;
