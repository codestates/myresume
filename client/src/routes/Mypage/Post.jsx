import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img 
            className="postProfileImg"
            src="/assets/person/이정재.jpg"
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
          <img className="postImg" src="/assets/person/RESUME.jpg"></img>
          </span>
          
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/person/like.png" alt=""/>
            <img className="likeIcon" src="assets/person/heart.png" alt=""/>
            <span className="postLikeCounter">12people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">3comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}