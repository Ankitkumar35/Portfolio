import React from "react";
import Heading from "../Layouts/ Heading/Heading";

import email from "../../assets/icons/mail";
import fb from "../../assets/icons/fb";
import insta from "../../assets/icons/insta";
import linkedin from "../../assets/icons/linkedin";
import github from "../../assets/icons/github";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact section-pad" id="contact">
      <Heading title="Let's Contact" />
      <div className=" contact-whole">
        {/* contact details */}
        <div className="flex flex-column contact-details">
          <h2 className="semi-bold l wc">Ankit Kumar</h2>
          <h3 className="m dgc medium">Ravet</h3>
          <h3 className="m dgc medium">Pune, Maharashtra</h3>
          <h3 className="m dgc medium">412101</h3>

          <div className="email-total-area">
            <div className="flex flex-row email-area align-items">
              <div className="c-icon">{email}</div>
              <h3 className="s dgc medium">
                <a href="mailto:ankitkumar191201@gmail.com">
                  ankitkumar191201@gmail.com
                </a>
              </h3>
            </div>
            <div className="flex flex-row email-area">
              <div className="c-icon">{email}</div>
              <h3 className="s dgc medium">
                <a href="mailto:ankit3531sah@gmail.com">
                  ankit3531sah@gmail.com
                </a>
              </h3>
            </div>
          </div>
        </div>
        {/* bar */}
        <div className="contact-bar" />
        {/* contact-links */}
        <div className="flex flex-row align-items contact-links">
          <a
            href="https://www.linkedin.com/in/ankitkumar20/"
            target="_blank"
          >
            <div className="c-icon">{linkedin}</div>
          </a>
          <a href="https://github.com/Ankitkumar35" target="_blank">
            <div className="c-icon">{github}</div>
          </a>
          <a href="https://www.instagram.com/ankitkr_sah/" target="_blank">
            <div className="c-icon">{insta}</div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100025310481346" target="_blank">
            <div className="c-icon">{fb}</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
