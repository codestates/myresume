import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Btn } from "./Btn";
import { LogoutBtn } from "./LogoutBtn";
import { MypageBtn } from "./MypageBtn";
import axios from "axios";

function Navbar({ isLogin, setLogin }) {
  console.log(isLogin);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const [onlogin, setonLogin] = useState(true);

  const history = useNavigate();

  //여기서 그 로그아웃을 온클릭으로 실행? => 엔드포인트로 날려서 => 로컬 스토리지 비워버리기
  const logoutHandler = () => {
    axios.get("http://localhost:5000/auth/logout").then((response) => {
      localStorage.removeItem("loginInfo");
      history("/");
      setonLogin(false);
      setLogin(false);
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            My Resume
            <i className="fas fa-globe-americas" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                New Resume
              </Link>
            </li>
          </ul>
          {/*islogin을 받아서 그게 참이면 마이페이지 버튼이 생성이 되게끔. 그게 아니면 아래 기존께 렌더링 되게끔.*/}
          {isLogin === true ? (
            <>
              <MypageBtn Link to="/mypage" buttonStyle="btn--outline">
                Mypage
              </MypageBtn>
              <LogoutBtn
                Link
                to="/"
                buttonStyle="btn--outline"
                onClick={logoutHandler}
              >
                LogOut
              </LogoutBtn>
            </>
          ) : (
            <>
              <Button Link to="/sign-up" buttonStyle="btn--outline">
                SIGNUP
              </Button>
              <Btn Link to="/login" buttonStyle="btn--outline">
                LogIn
              </Btn>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
