import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import postperson from "../../assets/img/person/이정재.jpg";
import clo from "../../assets/img/person/구름57.jpg";

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
                src={clo}
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
                <span className="profileInfoDesc">(한줄 소개)</span>
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