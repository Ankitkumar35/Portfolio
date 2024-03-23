import React from "react";
import "./Landing.scss";
import dp from "../../assets/logoN.JPG";
import Button from "../Layouts/Button/Button";
import rightArrow from "../../assets/icons/right-arrow.svg";

const Landing = () => {
  return (
    <section className="landing flex flex-row " id="home">
      <div className="landing-details">
        <div className="" style={{ marginBottom: "20px" }}>
          <span
            className="ll bold ff-paci ls-2 gradient_text"
            style={{
              marginRight: "20px",
            }}
          >
            Hello!
          </span>
        </div>
        <div className="mb-10 name_title">
          <span
            className="m bold ff-raleway"
            style={{ marginRight: "10px", marginTop: "0" }}
          >
            I'm
          </span>
          <span className="xl bold ff-raleway " style={{ marginTop: "0" }}>
            Ankit Kumar
          </span>
        </div>
        <h2 className="m semi-bold">Software Engineer @Bajaj Auto Limited</h2>
        <h2 className="s regular mb-20" style={{ marginTop: "3px" }}>
          Ex-SDE Intern @Being Artifex
        </h2>
        <p className="s regular dgc">
          I’m a graduate student pursued Bachelors of Technology in
          Mechanical Engineering at IIT(ISM), Dhanbad.
        </p>
        <p className="s regular dgc">
          I build Web Applications and love doing Backend Development. I am
          a proficient C++ coder in Data Structures and Algorithm.
        </p>
        <p className="s regular dgc">
          In my free time I do freelancing or get some nice clicks and clips.
        </p>
        <Button
          link="https://bit.ly/3VtozIT"
          dataAos="fade-right"
        >
          Resume
          <div className="button-icon">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAs0lEQVRoge3YMQrCQBhE4VnPId5HbFIoFlpbemg3t0jg2SQQJBAXlT8r80H6N4EQdiUzMzMzCwPsgTw8TXRPsSF81AHn6KYiLwPqGwE0Q3TVI44zI3rgGt32No9YC49Yi+IRwAFoWb+OyR87TQZkSdvfv9uvyCmlnSRtoks+NR1wk9RGhRToJd2jIxYBJ+Y/4kt02yLHR3F8lNrj6z7Q8AdHyuoP9eO1yoMar1XMzMzMAj0BAM2akR1X6QoAAAAASUVORK5CYII=" />
          </div>
        </Button>
      </div>
      <div className="container-landing_image">
        <div className="landing_image">
          <img src={dp} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Landing;