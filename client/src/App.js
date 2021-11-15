import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/index";
import Mypage from "./routes/Mypage/index";
import Resume from "./routes/Resume/index";
import Navbar from "./components/navbar/Navbar";
import SignupLogin from "./components/common/SignupLogin"
import Footer from "./components/common/footer";

function App() {
  return (
    
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signuplogin" element={<SignupLogin />} />
          <Route exact path="/mypage" element={<Mypage />} />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
      </Router>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;