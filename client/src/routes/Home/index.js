import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import About from "./Sections/About";
import SignupLogin from "../../components/SignupLogin";
import axios from "axios";
import JobSearchSection from "./JobSearchSection";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

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
      <div className="homeContainer">
        <Rightbar />
      </div>
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
      <JobSearchSection />
      <About />
    </div>
  );
}

export default Index;
