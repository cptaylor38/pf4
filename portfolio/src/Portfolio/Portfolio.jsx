import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import projectData from '../assets/portfolioAssets/projects.json';
import './Portfolio.css';

const Portfolio = ({ isMobile }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    setSelectedProject(projectData[0]);
    setHoveredImage(`${projectData[0].images[0]}`);
  }, []);

  const imageControl = (img) => {
    setHoveredImage(img.toString());
  };

  const projectSelect = (item) => {
    setSelectedProject(item);
  };

  return (
    <div>
      {isMobile === false ? (
        <div>
          {selectedProject && hoveredImage ? (
            <Container fluid='xl portfolioFullCont'>
              <Row id='portfolioTopR'>
                <Col xl='6' className='pTopCol'>
                  <Container fluid='xl pTopLImgs'>
                    <Row>
                      <Container id='focusedImgCont'>
                        <img
                          src={require(`../assets/portfolioAssets/projectImages/${hoveredImage}`)}
                          alt={selectedProject.title}
                          className='portImgMain'
                        ></img>
                      </Container>
                    </Row>
                    <Row id='subImgSelectRow'>
                      {selectedProject.images.map((image, index) => (
                        <Container className='subImgCont'>
                          <img
                            src={require(`../assets/portfolioAssets/projectImages/${image}`)}
                            alt={selectedProject.title}
                            onMouseEnter={() => imageControl(image)}
                            className='portImgSub'
                            key={`subImg${index}`}
                          ></img>
                        </Container>
                      ))}
                    </Row>
                  </Container>
                </Col>
                <Col xl='6' className='pTopCol'>
                  <Row id='descriptionRow'>
                    <Container>
                      <Row>
                        <h4>{selectedProject.title}</h4>
                        <p>{selectedProject.body}</p>
                      </Row>
                      <Row id='linksRow'>
                        <a href={selectedProject.githubLink} target='_blank'>
                          View Repo
                        </a>
                        <a href={selectedProject.deployedLink} target='_blank'>
                          View Live
                        </a>
                      </Row>
                    </Container>
                  </Row>
                </Col>
              </Row>
              <Row id='portBottomRow'>
                <Col xl='12'>
                  <Container fluid='xl' id='portBottomCon'>
                    {projectData.map((item) => (
                      <Container
                        onClick={(item) => {
                          projectSelect(item);
                        }}
                        className='projectCard'
                        key={item.id}
                      >
                        <img
                          src={require(`../assets/portfolioAssets/projectImages/${item.images[0]}`)}
                          alt={item.title}
                          className='portImgOverview'
                        ></img>
                        <h3 id='overviewCardHeader'>{item.title}</h3>
                      </Container>
                    ))}
                  </Container>
                </Col>
              </Row>
            </Container>
          ) : (
            'Loading...'
          )}
        </div>
      ) : (
        <div>mobile version</div>
      )}
    </div>
  );
};

export default Portfolio;
