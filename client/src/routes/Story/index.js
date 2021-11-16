import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import KaKaoBtn from "./KakaoBtn";

function Index() {
  return (
    <div>
      <Routes>
        <Route path="kakaoBtn" element={<KaKaoBtn />} />
      </Routes>
    </div>
  );
}

export default Index;
