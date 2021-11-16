import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
import postperson from "../../assets/img/person/이정재.jpg";
import like from "../../assets/img/person/like.png";
import heart from "../../assets/img/person/heart.png";
import ResumeList from "./ResumeList";
import resumeimg from "../../assets/img/person/RESUME.jpg";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img 
            className="postProfileImg"
            src = { postperson }
            alt=""/>
            <span className="postUsername">
            Lee Jung-jae
            </span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">여기는 예시이미지입니다! 
          <img className="postImg" src={resumeimg}></img>
          </span>
          
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={like} alt=""/>
            <img className="likeIcon" src={heart} alt=""/>
            <span className="postLikeCounter">12 people like</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">3 comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}