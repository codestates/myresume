import React from "react";
import styled from "styled-components";
import { Button } from './Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footer from './footer.css'

import {
  faTwitter,
  faInstagram,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Box = styled.div`
  padding: 60px 60px;
  background: black;
  position: relative;
  bottom: 0;
  width: 100%;
`;

export const Footerheading = styled.div`
  margin-bottom: 24px;
  font-size: 30px;
  color: white;
`

export const Footersubscriptiontext = styled.div`
  margin-bottom: 24px;
  font-size: 20px;
  color: white;
`


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

function Footer() {
  return (
    <Box>
      <Footerheading>Join the Adventure newsletter to receive our best resume template !</Footerheading>
      <Footersubscriptiontext>You can unsubscribe at any time.</Footersubscriptiontext>
      
      <form>
        <input className = 'footer-input'
        name='email'
        type='email'
        placeholder='Your Email'
        >

        </input>
        <Button buttonStyle='btn--outline'>Subscribe</Button>
        </form>
       
      <Container>
        <Row>
          <div
            style={{
              marginLeft: "20px",
              color: "white",
            }}
          >
            MyResumeLOGO
          </div>
          <Column>
            <Row>
              <div
                style={{
                  float: "right",
                  display: "flex",
                  color: "white",
                }}
              >
                Team
                <a
                  href="https://github.com/heewonkim-dev"
                  style={{
                    color: "white",
                    marginLeft: "60px",
                    marginRight: "40px",
                    textDecoration: "none",
                  }}
                >
                  Heewon_Kim
                </a>
                <a
                  href="https://github.com/solimleee"
                  style={{
                    color: "white",
                    marginRight: "40px",
                    textDecoration: "none",
                  }}
                >
                  Solim_Lee
                </a>
                <a
                  href="https://github.com/taesubyun"
                  style={{
                    color: "white",
                    marginRight: "40px",
                    textDecoration: "none",
                  }}
                >
                  Taesub_Yun
                </a>
                <a
                  href="https://github.com/chltjdrhd777"
                  style={{
                    color: "white",
                    marginRight: "40px",
                    textDecoration: "none",
                  }}
                >
                  Ucheol_Choi
                </a>
              </div>
            </Row>
            <br />
            <br />
            <Row>
              <div
                style={{
                  float: "right",
                  display: "flex",
                  color: "white",
                  marginRight: "40px",
                }}
              >
                SNS
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ marginLeft: "100px" }}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ marginLeft: "100px" }}
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ marginLeft: "100px" }}
                />
                <a
                  href="https://github.com/codestates/myresume"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ marginLeft: "100px" }}
                  />
                </a>
              </div>
            </Row>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

export default Footer;
