import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SignupBtn, Input } from "./SignupStyle";

axios.defaults.withCredentials = true;

function Signup(props) {
  const [userinfo, setuserinfo] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });

  const handleSignupInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
    // console.log("result", key, e.target.value);
  };

  //유효한 이메일인지 검사
  //   const validEmailCheck = (email) => {
  //     let regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  //     return regExp.test(email);
  //   };

  const [errorMessage, setErrorMessage] = useState("");

  const history = useNavigate();

  const handleSignup = () => {
    const { email, password, confirmPassword, username } = userinfo; //사용자 정보
    if (!email || !password || !confirmPassword || !username) {
      //하나라도 만족 못하는 경우
      setErrorMessage("모든 항목은 필수입니다"); //에러 메시지 띄우기
    } else {
      //전부 만족하는 경우
      if (password !== confirmPassword) {
        setErrorMessage("입력한 비밀번호가 서로 다릅니다");
      } else {
        axios
          .post("http://localhost:5000/auth/signup", {
            //http://localhost:5000/auth/signup => 성공
            //post
            email,
            password,
            confirmPassword,
            username,
          })
          .then((response) => {
            console.log("success");
            // history.push("/"); //성공하면 기존 홈페이지로 넘겨버리기
            history("/");
            setErrorMessage(""); //에러 메시지 초기화
          });
      }
    }
  };

  return (
    <>
      <h1 style={{ marginTop: "60px", marginBottom: "40px" }}>Signup</h1>
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
              onChange={handleSignupInputValue("email")}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <div style={{ marginRight: "10px" }}>Username</div>
            <Input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleSignupInputValue("username")}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <div style={{ marginRight: "10px" }}>Password</div>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleSignupInputValue("password")}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <div style={{ marginRight: "10px" }}>Confirm Password</div>
            <Input
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              onChange={handleSignupInputValue("confirmPassword")}
            />
          </div>
        </div>
        <div className="alert-box">{errorMessage}</div>
        <SignupBtn type="submit" onClick={handleSignup}>
          Signup
        </SignupBtn>
      </form>
      <div style={{ marginBottom: "60px" }}>MyResumeLOGO</div>
    </>
  );
}

export default Signup;
//adasd@sjdfoisf.cosd => 샘플
//FEAT: 회원가입 페이지 구현 및 테스트 완료

/*
없는 컴포넌트에 상태 업데이트하려 한다.
index.js:1 Warning: Can't perform a React state update on an unmounted component. 
This is a no-op, but it indicates a memory leak in your application. 
To fix, cancel all subscriptions and asynchronous tasks 
in a useEffect cleanup function.
at Signup (http://localhost:3000/static/js/main.chunk.js:5679:89)
*/
