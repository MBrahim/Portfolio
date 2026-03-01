import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLatex, SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import HaskellIcon from "../../Assets/TechIcons/Haskell.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import ROS2 from "../../Assets/TechIcons/ROS2.png";
import ASM from "../../Assets/TechIcons/ASM.png";
import OPENCV from "../../Assets/TechIcons/opencv.svg";
import PyQT from "../../Assets/TechIcons/PyQT.png";
import MATLAB from "../../Assets/TechIcons/Matlab.png";
import ST from "../../Assets/TechIcons/ST.svg";
import AVR from "../../Assets/TechIcons/AVR.png";
import Arduino from "../../Assets/TechIcons/arduino.png";
import Latex from "../../Assets/TechIcons/Latex.png";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ST} alt="STM32" height="23px"/>
        <div className="tech-icons-text">ARM</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AVR} alt="AVR" height="23px"/>
        <div className="tech-icons-text">AVR</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" height="23px"/>
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ROS2} alt="ROS2" height="23px"/>
        <div className="tech-icons-text">ROS 2</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ASM} alt="Assembly" height="23px"/>
        <div className="tech-icons-text">Assembly</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={OPENCV} alt="OpenCV"  height="23px"/>
        <div className="tech-icons-text">OpenCV</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PyQT} alt="PyQT" height="23px"/>
        <div className="tech-icons-text">PyQT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MATLAB} alt="MATLAB" height="23px"/>
        <div className="tech-icons-text">Matlab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Arduino} alt="Arduino" height="23px"/>
        <div className="tech-icons-text">Arduino</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Latex} alt="LaTeX" height="23px"/>
        <div className="tech-icons-text">LaTeX</div>
      </Col>
    </Row>
  );
}

export default Techstack;
