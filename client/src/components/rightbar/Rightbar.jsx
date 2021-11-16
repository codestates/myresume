import './rightbar.css'
import na from "../../assets/img/logo/네.png";
import ca from "../../assets/img/logo/당근마켓.png";
import bae from "../../assets/img/logo/배.png";
import insta from "../../assets/img/logo/인.png"
import ka from "../../assets/img/logo/카카오.png";
import to from "../../assets/img/logo/토스.png";

export default function Rightbar({profile}) {
    const HomeRightbar = () => {
        return (
            <>
            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
              <h4 className="rightbarTitle">My information</h4>
              <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">City:</span>
                  <span className="rightbarInfoValue">Seoul</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">From:</span>
                  <span className="rightbarInfoValue">codestates</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Relationship:</span>
                  <span className="rightbarInfoValue">Single</span>
                </div>
              </div>
              <h4 className="rightbarTitle">MatchUp</h4>
        <div className="matchup">
          <div className="matchupPM">
            <img 
              src = {na}
              alt=""
              className="matchupIMG"
            />
            
            <span className="matchupName">
             </span><a href="https://www.naver.com/" target="_blank" rel="noopener noreferrer">NAVER</a>
          </div>
          <div className="matchupPM">
            <img
              src = {ca}
              alt=""
              className="matchupIMG"
            />
            <span className="matchupName"></span>
            <a href="https://www.daangn.com/" target="_blank" rel="noopener noreferrer">당근마켓</a>
          </div>
          <div className="matchupPM">
            <img
              src = {bae}
              alt=""
              className="matchupIMG"
            />
            <span className="matchupName"></span>
            <a href="https://www.woowahan.com/" target="_blank" rel="noopener noreferrer">우아한 형제들</a>
          </div>
          <div className="matchupPM">
            <img
              src = {insta}
              alt=""
              className="matchupIMG"
            />
            <span className="matchupName"></span>
            <a href="https://www.instagram.com/?hl=ko" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="matchupPM">
            <img
              src = {ka}
              alt=""
              className="matchupIMG"
            />
            <span className="matchupName"></span>
            <a href="https://www.kakaocorp.com/page/" target="_blank" rel="noopener noreferrer">Kakao</a>
          </div>
          <div className="matchupPM">
            <img
              src = {to}
              alt=""
              className="matchupIMG"
            />
            <span className="matchupName"></span>
            <a href="https://toss.im/" target="_blank" rel="noopener noreferrer">Toss</a>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}