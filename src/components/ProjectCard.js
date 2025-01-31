import { Col } from "react-bootstrap";
import "./projectCard.css";
import Globals from "../Globals";

export const ProjectCard = ({ name, description, imgPath, url }) => {
  return (
    <Col size={12} sm={6} md={4} id="project-card">
      <div className="proj-imgbx">
        <a href={url || ""} target="_blank">
          <img src={Globals.server + "project/" + imgPath} />
          <div className="proj-txtx">
            <h4>{name}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};
