import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/index";
import Mypage from "./routes/Mypage/index";
import Resume from "./routes/Resume/index";
import Navbar from "./components/navbar/Navbar";
import Footer from "../src/routes/Home/Sections/Footer";
import Signup from "../src/routes/Home/pages/Signup";
import Story from "routes/Story";
import Oauth from "routes/Oauth";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="oauth/*" element={<Oauth />} />
          <Route path="story/*" element={<Story />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
