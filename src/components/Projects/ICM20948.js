import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ModelViewer from "../ModelViewer";
import pdf from "../../Assets/Projects/ICM-20948/Schematic.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Button from "react-bootstrap/Button";
import { FaFilePdf } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function ICM20948() {

    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row>
                    <h1>
                        <strong className="main-name">ICM-20948</strong>
                    </h1>
                    <h3>
                        <strong style={{ color: 'white', textDecoration: 'underline' }}>3D Model</strong>
                    </h3>
                </Row>
                <Row>
                <ModelViewer modelUrl={require("../../Assets/Projects/ICM-20948/PCB.glb")} />
                </Row>
                <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px"}}>
                        <Button
                            variant="primary"
                            href={pdf}
                            target="_blank"
                            style={{ maxWidth: "250px" }}
                        >
                            <FaFilePdf/>
                            &nbsp;The Schematic
                        </Button>

                </Row>
                <Row>
                <p style={{textAlign: "justify", color: "white", marginTop: "20px" }}>
                    This project is a breakout board for the <strong className="purple">ICM-20948</strong>, a high-performance <strong className="purple">9-axis</strong> Motion Tracking Device that combines a 3-axis gyroscope, 3-axis accelerometer, 3-axis magnetometer, and a Digital Motion Processor. The board provides a simple way to interface the complex sensor with a µC or SBC Via I2C Protocol.
                </p>
                <h1 className="project-heading" style={{textAlign: "justify", color: "white" }}>
                 <strong className="purple">Main features</strong>
                </h1>
                <p style={{textAlign: "justify", color: "white" }}>
                    <strong className="purple">I2C Address Selection:</strong> The board allows users to select between two I2C addresses (0x68 or 0x69) using a solder jumper, providing flexibility in multi-device setups.
                    <br />
                    <strong className="purple">Power Supply:</strong> It operates on all logic levels [1.8V, 3.3V, 5V], making it compatible with a most of µCs or SBCs.
                </p>
                </Row>
            </Container>
        </Container>
)}

export default ICM20948;