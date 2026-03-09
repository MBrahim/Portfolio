import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Review from "./Reviews";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Hardware Engineer who loves transforming ideas into
              reliable, scalable products. From fun projects to real-world applications.
              <br />
              <br />
              I designed high power projects, high signal integrity circuits, and embedded systems, and I’m always eager to learn new technologies and tools.
              <br />
              <br />
              I’m a 
              <i>
                <b className="purple">
                  {" "}
                  Top-rated{" "}
                </b>
              </i>
              Freelancer on Upwork with a strong track record of delivering quality work to clients worldwide.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8} className="text-center">
            <div className="reviews-center">
              <div className='title mb-4'>
                <h2 className="purple" style={{ fontSize: "2.2em" }}>Upwork Reviews</h2>
                <div className="underline" style={{ 
                  width: '80px', 
                  height: '4px', 
                  background: '#00f0ff', 
                  margin: '0.5rem auto' 
                }}></div>
              </div>
              <Review />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    
  );
}
export default Home2;
