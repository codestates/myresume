import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Sections/Footer";
import About from "./Sections/About";
import SignupLogin from "../../components/SignupLogin";
import axios from "axios";

function Index() {
  //usestates 부분을 local storage로 바꾼다.
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const [accessToken, setToken] = useState("");
  const [isLogin, setLogin] = useState(false);

  const history = useNavigate();

  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  //local storage
  const loginHandler = () => {
    setLogin(true);
  };

  const logoutHandler = () => {
    axios.post("https://localhost:5000/auth/signout").then((response) => {
      setUserInfo(null);
      setLogin(false);
      setToken("");
      history.push("/");
    });
  };

  const issueAccessToken = (token) => {
    setToken(token);
    axios.get("https://localhost:5000/accessToken").then((res) => {
      setUserInfo(res.data);
    });
  };

  const isAuthenticated = () => {
    axios
      .get("https://localhost:5000/user/userinfo") //get
      .then((response) => {
        //성공한 경우
        setUserInfo(response); //사용자 정보 업데이트
        setLogin(true); // 로그인 성공했으므로 true 바꾸기
        history.push("/");
      });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div>
      <div>home</div>
      <div>
        <button
          onClick={openHandler}
          isLogin={isLogin}
          logoutHandler={logoutHandler}
        >
          Login/Signup
        </button>
        {isOpen === true ? (
          <SignupLogin
            openHandler={openHandler}
            loginHandler={loginHandler}
            issueAccessToken={issueAccessToken}
          />
        ) : (
          <div></div>
        )}
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default Index;

//일부 필요한 부분(새로 고침시 영향을 받을 부분)을 로컬 스토리지로 교체.
