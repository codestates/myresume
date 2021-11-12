import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/index";
import Mypage from "./routes/Mypage/index";
import Resume from "./routes/Resume/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mypage" element={<Mypage />} />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
