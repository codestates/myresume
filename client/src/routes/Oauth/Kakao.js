import React, { useEffect } from "react";
import styled from "styled-components";
import LienLogo from "assets/img/logo/카카오라이언.png";
import { getKakaoAccess } from "redux/Slices/Async/kakaoOauth";
import { useDispatch } from "react-redux";

const KakaoMain = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingContainer = styled.section`
  width: 50%;
  min-width: 50rem;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 5px dashed yellow;
  background-color: lightyellow;
`;

const LoadingTitle = styled.span`
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const LoadingImage = styled.div`
  width: 50%;
  height: 50%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: rotate_image 10s linear infinite;
    transform-origin: 50% 50%;
    @keyframes rotate_image {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

function Kakao() {
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get("code");
  useEffect(() => {
    dispatch(getKakaoAccess(code));
  }, [code, dispatch]);

  return (
    <KakaoMain>
      <LoadingContainer>
        <LoadingTitle>잠시만 기다려주세요~</LoadingTitle>
        <LoadingImage>
          <img src={LienLogo} alt="" />
        </LoadingImage>
      </LoadingContainer>
    </KakaoMain>
  );
}

export default Kakao;
