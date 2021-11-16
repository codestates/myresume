import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ModalBackdrop,
  ModalContainer,
  ModalView,
  LoginSignupBtn,
  Btn,
  Input,
} from "./ModalStyle";
import "./Btn.css";

axios.defaults.withCredentials = true;

function SignupLogin({ openHandler, loginHandler, issueAccessToken }) {
  const history = useNavigate();

  //모달 창 오픈
  const [isOpen, setIsOpen] = useState(true);

  //로그인
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  // const [loginInfo, setLoginInfo] = useState({
  //   email: "",
  //   password: "",
  // });

  // 로컬 스토리지 저장
  const [loginInfo, setLoginInfo] = useState(
    () => JSON.parse(window.localStorage.getItem("loginInfo")) || ""
  );

  const handleLoginInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
    console.log("result", key, e.target.value);
  };

  const openLoginHandler = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  // const handleLoginKeyPress = (e) => {
  //   if (e.key === "Enter") handleLogin();
  // }; (필요 없다고 판단해 없앴음.)

  const handleLogin = () => {
    const url = "https://localhost:5000/auth/login";
    const { email, password } = loginInfo;
    if (!email || !password) setLoginError("이메일과 비밀번호를 입력해주세요");
    else {
      axios.post(url, loginInfo).then((response) => {
        setLoginError("");
        loginHandler(true);
        issueAccessToken(response.cookie); //이게 맞는지 지금 확신이 서질 않음.
        history.push("/");
        //로그인 성공시 로그인 정보를 로컬 스토리지에 저장
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
      });
    }
  };

  //로그인 인포메이션 바뀔 때 마다 업데이트인데 일단 주석 처리.
  // useEffect(() => {
  //   window.localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
  // }, [loginInfo]);

  //회원 가입
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const openSignupHandler = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  const [userinfo, setuserinfo] = useState({
    email: "",
    password: "",
    username: "",
    checkPassword: "",
  });

  const handleSignupInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
    console.log("result", key, e.target.value);
  };

  const handleSignup = () => {
    const { email, password, checkPassword, username } = userinfo; //사용자 정보
    if (!email || !password || !checkPassword || !username) {
      //하나라도 만족 못하는 경우
      setsignupError("모든 항목은 필수입니다"); //에러 메시지 띄우기
    } else {
      //전부 만족하는 경우
      if (password !== checkPassword) {
        setsignupError("입력한 비밀번호가 서로 다릅니다");
      } else {
        axios
          .post("https://localhost:5000/auth/signup", {
            //post
            email,
            password,
            checkPassword,
            username,
          })
          .then((response) => {
            //성공하면 로그인 페이지로 보내버리기.
            history.push("/login");
            setsignupError(""); //에러 메시지 초기화
          });
      }
    }
  };

  //에러 메시지
  const [signupError, setsignupError] = useState("");
  const [loginError, setLoginError] = useState("");

  return (
    <>
      <ModalContainer>
        {isOpen && (
          <ModalBackdrop onClick={openHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <Btn
                onClick={openLoginHandler}
                className={`${isLoginOpen === true ? "btn-primary" : ""}`}
              >
                login
              </Btn>
              <Btn
                onClick={openSignupHandler}
                className={`${isSignupOpen === true ? "btn-primary" : ""}`}
              >
                signup
              </Btn>
              <br />
              {isLoginOpen && (
                <form onSubmit={(e) => e.preventDefault()}>
                  <br />
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleLoginInputValue("email")}
                    />
                  </div>
                  <br />
                  <div>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleLoginInputValue("password")}
                    />
                  </div>
                  <br />
                  <div>{loginError}</div>
                  <br />
                  <LoginSignupBtn type="submit" onClick={handleLogin}>
                    Login
                  </LoginSignupBtn>
                </form>
              )}

              <br />
              {isSignupOpen && (
                <form onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleSignupInputValue("email")}
                    />
                  </div>
                  <br />
                  <div>
                    <Input
                      type="text"
                      name="username"
                      placeholder="username"
                      onChange={handleSignupInputValue("username")}
                    />
                  </div>
                  <br />
                  <div>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleSignupInputValue("password")}
                    />
                  </div>
                  <br />
                  <div>
                    <Input
                      type="password"
                      name="password_check"
                      placeholder="Password Check"
                      onChange={handleSignupInputValue("checkPassword")}
                    />
                  </div>
                  <br />
                  <div>{signupError}</div>
                  <br />
                  <LoginSignupBtn onClick={handleSignup}>Signup</LoginSignupBtn>
                </form>
              )}
              <br />
              <div>Myresume LOGO</div>
            </ModalView>
          </ModalBackdrop>
        )}
      </ModalContainer>
    </>
  );
}

export default SignupLogin;
