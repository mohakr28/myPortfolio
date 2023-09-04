import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import axios from "axios";
import { useEffect, useState } from "react";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  const renderProjectCards = () => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;

    return (
      <Row>
        {Array.isArray(projects)
          ? projects
              .slice(startIndex, endIndex)
              .map((project, index) => <ProjectCard key={index} {...project} />)
          : null}
      </Row>
    );
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Welcome to my projects section, where I showcase some of the
                    prominent projects I've developed as a skilled web
                    developer. These projects blend creativity and technology to
                    deliver exceptional experiences and effective solutions.
                    Here's a quick overview of a few of them:
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* ...Nav and Tab.Content definitions as before */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        {renderProjectCards()}
                        <div>
                          <div
                            style={{
                              margin: "10px 20%",
                              padding: "1px",
                              borderRadius: "20px",
                              background: "#500087",
                            }}
                          >
                            <div className="pagination" id={"project-button"}>
                              <button
                                className="btn btn-primary"
                                onClick={handlePreviousPage}
                              >
                                Previous Project
                              </button>

                              <button
                                className="btn btn-primary"
                                onClick={handleNextPage}
                              >
                                Next Project
                              </button>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
