import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Bhavya Sachan</span>{" "}
            from <span className="purple">Uttar Pradesh, India</span>.
            <br />
            I’m currently a{" "}
            <span className="purple">final year undergarduate</span> at{" "}
            <span className="purple">NIT Allahabad</span>.
            <br />I will hold a B.Tech. degree in{" "}
            <span className="purple">Mechanical Engineering</span> from{" "}
            <span className="purple">NIT Allahabad</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Bhavya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
