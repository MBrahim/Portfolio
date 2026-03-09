import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineX } from 'react-icons/ai/';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
}


from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork, SiWhatsapp } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{justifyContent: "center"}}> 
        <Col md="3" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/MBrahim"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/M7amed_ebrahem"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaXTwitter/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/201553902343"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiWhatsapp/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mabrahim/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.upwork.com/freelancers/~01fee375b9991d43f0"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiUpwork />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
