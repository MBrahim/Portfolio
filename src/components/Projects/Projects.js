import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { Link } from 'react-router-dom'; // Add this import
import ICM20948img from "../../Assets/Projects/ICM20498.png";
import DRV8701img from "../../Assets/Projects/DRV8701.png";
import SupercapacitorsBackupControllerimg from "../../Assets/Projects/SupercapacitorsBackupController.png";
import ICM20948 from "./ICM20948";
import DRV8701 from "./DRV8701";
import Pre from "../../Assets/pre.svg";
import SupercapacitorsBackupController from "./SupercapacitorsBackupController";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Link to="/project/ICM20948" style={{ textDecoration: "none", color: "inherit" }}>
              <ProjectCard
                imgPath={ICM20948img}
                isBlog={false}
                title="ICM20948"
                width="100%"
                description="A breakout board for the ICM-20948 9-axis motion sensor (gyro, acc., mag.) featuring I²C interfacing, selectable addresses via solder jumper, and wide 1.8V-5V power compatibility for easy integration with various microcontrollers and SBCs."
              />  
            </Link>
          </Col>  
          <Col md={4} className="project-card">
            <Link to="/project/DRV8701" style={{ textDecoration: "none", color: "inherit" }}>
              <ProjectCard
                imgPath={DRV8701img}
                isBlog={false}
                title="DRV8701"
                width="100%"
                description="A high-power brushed DC motor driver based on Texas Instruments DRV8701, implemented as a full H-Bridge using four external High Power N-channel MOSFETs, supporting high voltage operation and precise current control for industrial and automotive motor applications."
              />  
            </Link>
          </Col>

          <Col md={4} className="project-card">
            <Link to="/project/SupercapacitorsBackupController" style={{ textDecoration: "none", color: "inherit" }}>
              <ProjectCard
                imgPath={SupercapacitorsBackupControllerimg}
                isBlog={false}
                title="Supercapacitors Backup Controller"
                width="100%"
                description="A high-reliability energy backup controller designed to manage supercapacitor-based power systems, ensuring uninterrupted supply during main power loss while providing controlled charging, voltage balancing, and system protection for embedded and industrial applications."
              />
            </Link>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={Pre}
                isBlog={false}
                title="Under Development"
                width="100%"
                description="Under Development"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={Pre}
                isBlog={false}
                title="Under Development"
                width="100%"
                description="Under Development"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={Pre}
                isBlog={false}
                title="Under Development"
                width="100%"
                description="Under Development"
                //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                //demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={Pre}
                isBlog={false}
                title="Under Development"
                width="100%"
                description="Under Development"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
