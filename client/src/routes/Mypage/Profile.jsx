import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import postperson from "../../assets/img/person/이정재.jpg";
import backgroundImg from "../../assets/img/person/반짝반짝.jpg";


export default function Profile() {
  return (
    <>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={backgroundImg}
                alt=""
              />
              <img
                className="profileUserImg"
                src = { postperson }
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Lee Jung-jae</h4>
                {/* <div className="profileInfoDesc">(한줄 소개)</div> */}
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}