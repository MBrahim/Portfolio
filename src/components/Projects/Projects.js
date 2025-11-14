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
import ICM20948img from "../../Assets/Projects/ICM20498.jpg";
import ICM20948 from "./ICM20948";
import SHM from "./16-Channel-Smart-Home-Control-Module";
import Pre from "../../Assets/pre.svg";

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
            <Link to="/project/16-Channel-Smart-Home-Control-Module" style={{ textDecoration: "none", color: "inherit" }}>
              <ProjectCard
                imgPath={Pre}
                isBlog={false}
                title="Under Development"
                width="100%"
                description="Under Development"
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
