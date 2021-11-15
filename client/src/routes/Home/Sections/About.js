import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faFileSignature,
  faFileUpload,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

export const Box = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
`;
function About() {
  return (
    <Box>
      <h1 style={{ textAlign: "center" }}>4 Tips of Writing Resume</h1>
      <div style={{ display: "flex", margin: "12px" }}>
        <div style={{ marginRight: "20px", marginTop: "40px" }}>
          <FontAwesomeIcon icon={faFileInvoice} size="5x" />
        </div>
        <div>
          <h2>What is a Resume?</h2>
          <div style={{ width: "90%" }}>
            A resume is a brief summary of personal and professional
            experiences, skills, and education history. Its main purpose is to
            show off your best self to potential employers. When applying for a
            job, you’re going to be asked for a resume accompanied by a cover
            letter.
          </div>
        </div>
        <div style={{ marginRight: "20px", marginTop: "40px" }}>
          <FontAwesomeIcon icon={faFileSignature} size="5x" />
        </div>
        <div>
          <h2>How to Write a Resume for Your First Job?</h2>
          <div>
            If you’re applying for an entry-level job or an internship, no one
            expects you to have ANY work experience. Instead, you should focus
            on what you DO have: education, projects, volunteering experience,
            hobbies & interests.
          </div>
        </div>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", margin: "12px" }}>
        <div style={{ marginRight: "20px", marginTop: "40px" }}>
          <FontAwesomeIcon icon={faFileUpload} size="5x" />
        </div>
        <div>
          <h2>What to Put on a Resume?</h2>
          <div style={{ width: "90%" }}>
            The most common sections on a resume are: Contact information Resume
            summary or objective Work experience Education If you want to
            personalize your resume a bit more, you can also include the
            following sections: Projects Volunteering experience Hobbies &
            interests Portfolio
          </div>
        </div>
        <div style={{ marginRight: "20px", marginTop: "40px" }}>
          <FontAwesomeIcon icon={faCopy} size="5x" />
        </div>
        <div>
          <h2>How Long Should a Resume Be?</h2>
          <div>
            Short answer: one page. Long answer: check out our guide on how long
            should a resume be. P.S. all of our templates are one-page resume
            templates, so you shouldn’t have a lot of trouble sticking to the
            one-page limit!
          </div>
        </div>
      </div>
      <br />
    </Box>
  );
}

export default About;
