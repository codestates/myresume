import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SignupLogin from 'components/SignupLogin';

function Navbar() {
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
              <Link to="/mypage" className="nav-links" onClick={closeMobileMenu}>
                MyPage
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-links" onClick={closeMobileMenu}>
                New Resume
              </Link>
            </li>
          </ul>
          {button && <Button Link to='/mypage' buttonStyle='btn--outline'>SIGNUP</Button>}
          {button && <Button Link to='/mypage'buttonStyle='btn--outline'>LogIn</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
