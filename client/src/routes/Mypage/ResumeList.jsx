import React from 'react'
import { Link } from 'react-router-dom'
import { MoreVert } from "@material-ui/icons";
import './resumeList.css';
import ReactDOM from "react-dom";
import { ButtonThemes, ButtonTypes, ButtonSizes } from "./buttonTypes";
import { IconTypes } from "./IconTypes";
import Button from "./Button";
import postperson from "../../assets/img/person/이정재.jpg";
import ResumeForm from 'components/ResumeForm';

function ResumeList() {
    return (
        <div className="resume">
           <div className="resumeList">
                <div className="resumeTop">
                    <div className="resumeTopLeft">
                    <img 
                        className="postProfileImg"
                        src = { postperson }
                        alt=""/>
                        <span className="resumeUsername">
                            Lee jung-jae
                        </span>
                      
                    </div>
                    <div className="resumeTopRight">
                      <MoreVert />  
                    </div>
                </div>
                <div className="resumeCenter">
                    작성된 이력서가 없습니다
                    <div className="resumeSecond">
                    이력서 한 장으로 동문이 입사한 기업, 직장 동료가 이직한 기업 등
궁금하지만 알 수 없었던 정보를 확인해보세요.
                    </div>
                    <div className="resumeButton">
                    <Link to='components/ResumeForm'>
                    <Button
          size={ButtonSizes.MEDIUM}
          label="이력서 작성하기"
          type={ButtonTypes.SECONDARY}
        /></Link>
                    </div>
                    
                </div>
           </div>
        </div>
    )
}

export default ResumeList
