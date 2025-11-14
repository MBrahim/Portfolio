import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, isBlog, demoLink, width }) {
  return (
    <Card className="project-card-view" style={{ width: width || "100%" }}>
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        {!isBlog && demoLink && (
        <Button variant="primary" href={demoLink} target="_blank">
          <CgWebsite /> &nbsp;
          {"Demo"}
        </Button>
        )}
        {"\n"}
        {"\n"}

        {!isBlog && ghLink && (
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
          <BsGithub /> &nbsp;
          {"GitHub"}
          </Button>
      )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
