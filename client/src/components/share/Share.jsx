import "./share.css";
import React, {useState} from 'react';
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import postperson from "../../assets/img/person/이정재.jpg"

//! event.preventDefault()

export default function Share() {
  const [text, setText] = useState('');
 
  const onChange = (e) => {
    setText(e.target.value);
  };
 
  const onReset = () => {
    setText('');
  };
 

  return (
    <>
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src = { postperson } alt="" />
          <input
            className="shareInput"          
            onChange = {onChange} value={text}
            placeholder="Introduce yourself in one sentence!"

          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton"
                    onClick={onChange} value={text}>Share</button>
            <button className="resetButton"
                    onClick={onReset}>Reset</button>
            
        </div>
      </div>
    </div>
    <div>
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          {/* <img className="shareProfileImg" src = { postperson } alt="" /> */}
          
          <div className="simpleIn"> 간단 소개글 : {text}</div>
        </div>
        <hr className="shareHr"/>
        
      </div>
    </div>
    </div>
    </>
  );
}