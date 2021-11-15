import React from 'react';

import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">HOMEPAGE</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              My RESUME
          </section>
          <section className="footer-info__returns">
            SOFTWARE
            <br />
            Delivery
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            codestates@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            010-1234-5678
          </section>
          <section className="footer-info__contact">
            CHATS
            <br />
            Contact Us
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;

