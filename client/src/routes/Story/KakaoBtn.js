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

function Index() {
  // const [popUpInfo, setPopUpInfo] = useState(null);

  const onHandleClick = () => {
    window.location.href = process.env.REACT_APP_KAKAO_OAUTH_LINK;

    // if (popUpInfo && !popUpInfo.closed) {
    //   return;
    // } else {
    //   const popupWidth = 700;
    //   const popupHeight = 700;
    //   const left = window.screen.width / 2 - popupWidth / 3;
    //   const top = window.screen.height / 2 - popupHeight / 2;
    //   setPopUpInfo(
    //     window.open(
    //       process.env.REACT_APP_KAKAO_OAUTH_LINK,
    //       "_blank",
    //       `width=${popupWidth}, height=${popupHeight}, top=${top}, left=${left}`
    //     )
    //   );
    // }
  };

  return (
    <>
      <KakaoBtn onClick={onHandleClick}>
        <img src={KaKaoLogo} alt="kakao" />
      </KakaoBtn>
    </>
  );
}

export default Index;
