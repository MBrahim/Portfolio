import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { SiEgnyte } from "react-icons/si";
import alexandria_university from "../../Assets/alexandria-university.png";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone!
            <br />
             I’m <span className="purple">Mohamed Mo.</span>{" "}
            from <span className="purple">Alexandria, Egypt </span>.
            <br />
            I’m a Fresh graduate {" "}
            <span className="purple">Hardware engineer</span> holding a Bachelor Degree (BSc) in{" "}
            <span className="purple">Electronics and Communictaion</span> from{" "}
            <span className="purple">Alexandria University </span>.
            <br />
            <br />
            Outside of Electronics world, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music 🎧
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I see it as the art - designing and programming systems that bring visions to reality"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
