import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import KakaoLoading from "./Kakao";

function Index() {
  return (
    <div>
      <Routes>
        <Route path="kakao" element={<KakaoLoading />} />
      </Routes>
    </div>
  );
}

export default Index;
