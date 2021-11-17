import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/index";
import Mypage from "./routes/Mypage/index";
import Resume from "./routes/Resume/index";
import Navbar from "./components/navbar/Navbar";
import Footer from "../src/routes/Home/Sections/Footer";
import Signup from "../src/routes/Home/pages/Signup";
import Story from "routes/Story";
import Login from "../src/routes/Home/pages/Login";

import React, { useEffect, useState } from "react";

function App() {
  const [isLogin, setLogin] = useState(false);

  const onLoginHandler = () => {
    setLogin(true);
  };

  const onLogoutHandler = () => {
    setLogin(false);
  };

  useEffect(() => {
    const loginInfo = localStorage.getItem("loginInfo");
    console.log("hi");
    if (loginInfo) onLoginHandler();
    else onLogoutHandler();
  });

  return (
    <div className="App">
      <Router>
        <Navbar isLogin={isLogin} setLogin={setLogin} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login setLogin={setLogin} />} />
          <Route path="story/*" element={<Story />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
