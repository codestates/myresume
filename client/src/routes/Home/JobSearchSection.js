import React, { useState } from "react";
import styled from "styled-components/macro";
import SaraminLogo from "assets/img/logo/saramin_logo.png";
import LinkedInLogo from "assets/img/logo/linkedin_logo.png";
import JobkoreaLogo from "assets/img/logo/Jobkorea_logo.png";
import CheckBox from "components/Checkbox";

function Index() {
  const [tabbedIndex, setTabbedIndex] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [checkAll, setCheckAll] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const makeEndPoint = (keyword, tabIdx) => {
      let endpoint = "";

      if (tabIdx === 0) {
        endpoint = `https://www.saramin.co.kr/zf_user/search?search_area=main&search_done=y&search_optional_item=n&searchType=search&searchword=${searchInput}`;
      }
      if (tabIdx === 1) {
        endpoint = `https://kr.linkedin.com/jobs/search?keywords=${searchInput}&location=%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD&geoId=105149562&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0`;
      }
      if (tabIdx === 2) {
        endpoint = `https://www.jobkorea.co.kr/Search/?stext=${searchInput}`;
      }

      return endpoint;
    };

    if (checkAll === true) {
      for (let i = 0; i <= 2; i++) {
        window.open(makeEndPoint(searchInput, i), "_blank");
      }
      setCheckAll(false);
      setSearchInput("");
    } else {
      window.open(makeEndPoint(searchInput, tabbedIndex), "_blank");
    }
  };

  return (
    <S.JobSearchSection>
      <S.Container>
        <S.SearchArticle>
          <CheckBox checkAll={checkAll} setCheckAll={setCheckAll} />

          <S.TabMenu>
            {tabData.map((tab, idx) => (
              <S.TabItem
                key={tab.tabName}
                index={idx}
                tabbedIndex={tabbedIndex}
                onClick={() => {
                  setTabbedIndex(idx);
                }}
              >
                <div className="roundDeco-top"></div>
                <img src={tab.tabImg} alt="tabLogo" />
                <span className="tabName">{tab.tabName}</span>
                <div className="roundDeco-bottom"></div>
              </S.TabItem>
            ))}
          </S.TabMenu>

          <S.SearchInput>
            <form className="input-wrapper" onSubmit={onHandleSubmit}>
              <div className="input-title">원하는 직업을 검색하세요</div>
              <input
                type="text"
                className="input-searchBar"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
              <button className="btn btn-search">go!</button>
            </form>
          </S.SearchInput>
        </S.SearchArticle>
      </S.Container>
    </S.JobSearchSection>
  );
}

const tabData = [
  {
    tabImg: SaraminLogo,
    tabName: "사람인",
    tabLink: (keyword) =>
      `https://www.saramin.co.kr/zf_user/search?search_area=main&search_done=y&search_optional_item=n&searchType=search&searchword=${keyword}`,
  },
  {
    tabImg: LinkedInLogo,
    tabName: "링크드인",
    tabLink: (keyword) =>
      `https://kr.linkedin.com/jobs/search?keywords=${keyword}&location=%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD&geoId=105149562&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0`,
  },
  {
    tabImg: JobkoreaLogo,
    tabName: "잡코리아",
    tabLink: (keyword) => `https://www.jobkorea.co.kr/Search/?stext=${keyword}`,
  },
];

const S = {
  JobSearchSection: styled.section``,
  Container: styled.div`
    padding: 5rem;
  `,
  SearchArticle: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
  `,
  TabMenu: styled.ul`
    display: flex;
    flex-direction: column;
    background-color: #4d5bf9;
    padding: 2rem;
    z-index: 0;
    //overflow: hidden;
  `,
  TabItem: styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    &:not(:first-of-type) {
      margin-top: 1.2rem;
    }

    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }

    img {
      width: 5rem;
      border-radius: 20px;
      overflow: hidden;
      user-select: none;
    }

    span {
      margin: 2rem;
      font-size: 1.7rem;
      user-select: none;
      color: ${({ index, tabbedIndex }) => (index === tabbedIndex ? "black" : "white")};
      font-weight: 500;
    }

    .roundDeco-top {
      display: ${({ index, tabbedIndex }) => (index === tabbedIndex ? "block" : "none")};
      width: 3rem;
      height: 3rem;
      background-color: white;
      position: absolute;
      top: -39%;
      right: -25%;
      z-index: -1;

      & ::after {
        content: "";
        height: 1.8rem;
        width: 1.5rem;
        position: absolute;
        top: 2%;
        left: -7%;
        background-color: #4d5bf9;
        border-bottom-right-radius: 100%;
      }
    }

    .roundDeco-bottom {
      display: ${({ index, tabbedIndex }) => (index === tabbedIndex ? "block" : "none")};
      width: 3rem;
      height: 3rem;
      background-color: white;
      position: absolute;
      top: 89%;
      right: -21.5%;
      z-index: -1;

      & ::after {
        content: "";
        height: 1.8rem;
        width: 1.8rem;
        position: absolute;
        top: 40%;
        bottom: 0%;
        left: 0;
        background-color: #4d5bf9;
        border-top-right-radius: 100%;
      }
    }

    & ::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 50%;
      padding: 2rem;
      background-color: ${({ index, tabbedIndex }) =>
        index === tabbedIndex ? "white" : "transparent"};
      top: -0.5rem;
      left: -1rem;
      z-index: -2;
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
    }
  `,
  SearchInput: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

    & .input-wrapper {
      width: 100%;
      height: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;

      & .input-title {
        font-size: 1.65rem;
        margin-bottom: 2rem;
      }

      & .input-searchBar {
        border: 1px solid gray;
        background-color: #4d5bf9;
        width: 90%;
        height: 20%;
        text-align: center;
        font-size: 1.5rem;
        color: white;
        font-weight: bold;
      }

      & .btn-search {
        border: none;
        position: absolute;
        bottom: 0%;
        right: 5%;
        padding: 1rem 2rem;
        color: indigo;
        border: 1px solid gray;
        background-color: transparent;
        border-radius: 1rem;
      }
    }
  `,
};

export default Index;
