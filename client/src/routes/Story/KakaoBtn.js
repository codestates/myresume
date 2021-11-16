import React from "react";
import styled from "styled-components";
import KaKaoLogo from "assets/img/logo/kakao.png";

const KakaoBtn = styled.button`
  width: 7rem;
  border: none;
  border-radius: 25%;
  overflow: hidden;
  padding: 0;

  & img {
    width: 100%;
    margin: -2px;
    padding: 0;
  }
`;

const onHandleClick = () => {
  window.location.href = process.env.REACT_APP_KAKAO_OAUTH_LINK;
};

function Index() {
  return (
    <KakaoBtn onClick={onHandleClick}>
      <img src={KaKaoLogo} alt="" />
    </KakaoBtn>
  );
}

export default Index;
