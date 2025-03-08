import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/img/1.png";
import proj2 from "../assets/img/2.png";
import proj3 from "../assets/img/3.png";
import proj4 from "../assets/img/4.png";
import proj5 from "../assets/img/5.png";
import proj6 from "../assets/img/6.jpg";
import proj7 from "../assets/img/7.jpg";
import proj8 from "../assets/img/8.jpg";
import proj9 from "../assets/img/9.jpg";
import proj10 from "../assets/img/10.jpg";
import proj11 from "../assets/img/11.jpg";
import proj12 from "../assets/img/12.jpg";
import proj13 from "../assets/img/13.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
export const Projects = () => {

    const projects = [
        {
          title: "Thinkable",
          description: "This is a project that using for manage events. there are two type of users hosting customers and ticket buying customers. hosting customers have to get permition fom amdin to host thier event from the web app. then customers can see event details, time, locations and purchase tickets. I implemented backend with strape nodeJS and frontend with nextJS React libraries ",
          imgUrl: proj3,
          projectLink: "https://github.com/OKWijewardena/Thinkable_Frontend.git"
        },
        {
          title: "SmartCo",
          description: "This is Saas system for SmartCo company based on Qatar. There are many users in the system. admin, employee, super admin and customer. I implemented backend with nodeJS and expressJS also frontend with ReactJS with MatirealUI styles",
          imgUrl: proj1,
          projectLink:"https://github.com/OKWijewardena/SmarCo.git"
        },
        {
          title: "LocalShop",
          description: "This is Saas web application for Create own stores for the customers and doing there businnesses. system have cusomers and Super admin. this web app implemented with php laravel",
          imgUrl: proj2,
          projectLink:"https://app.localshop.lk/login"
        },
        {
          title: "SmartCo Mobile App",
          description: "This is Mobile app for SmartCo company based on Qatar. There is use by Smartco customer. I implemented Mobile app using flutter technologies and I use expressJs APIs for handling data",
          imgUrl: proj5,
          projectLink:"https://github.com/OKWijewardena/SmartCo_monile_app.git"
        },
        {
          title: "Ministore",
          description: "This is Saas web application for Create own stores for the customers and doing there businnesses. system have cusomers and Super admin. this web app implemented with php laravel",
          imgUrl: proj4,
          projectLink:"https://app.ministore.lk/login"
        },
        {
          title: "Code generation app with AI",
          description: "Python and OpenAI technologies were used to implement an AI-generated style codes match with user requirements app.",
          imgUrl: proj6,
          projectLink:"https://github.com/OKWijewardena/Table-converter-App.git"
        },
        {
          title: "Table creating application with AI",
          description: "Python and OpenAI technologies were used to implement an AI-generated tables for the user requirements app.",
          imgUrl: proj6,
          projectLink:"https://github.com/OKWijewardena/Table-converter-App.git"
        },
        {
          title: "Question answering app with AI",
          description: "Python and OpenAI technologies were used to implement an AI-generated Answering to the multiple questions by reading PDF files app.",
          imgUrl: proj6,
          projectLink:"https://github.com/OKWijewardena/PDF-Questions-App.git"
        },
        {
          title: "Social media marketing app with AI",
          description: "Python and OpenAI technologies were used to implement an AI-generated social media marketing strategy app.",
          imgUrl: proj6,
          projectLink:"https://github.com/OKWijewardena/Social-media-marketing- app.git"
        },
      ];

      const Universityprojects = [
        {
          title: "Mern web application for class institute",
          description: "Implemented class management functionalities for a web app on Institute Management System by using MERN stack technology.",
          imgUrl: proj7,
          projectLink:"https://github.com/OKWijewardena/Institute-Management- System-MERN"
        },
        {
          title: "Mern web application for tea collecting",
          description: "Implemented finance management functionalities for tea collecting web application that made for tea factory by using MERN stack technology.",
          imgUrl: proj8,
          projectLink:"https://github.com/OKWijewardena/Tea-Collecting-Website"
        },
        {
          title: "Mobile app for IoT button",
          description: "Implemented Doctor and Nurse calling system by connecting with the physical IoT button using Java and FireBase in Android studio.",
          imgUrl: proj9,
          projectLink:"https://github.com/OKWijewardena/IotButtonMobileApp.git"
        },
        {
          title: "Java web application for event planing",
          description: "Implemented a Event Planning System for a Hotel by using java and Tomcat",
          imgUrl: proj10,
          projectLink:"https://github.com/OKWijewardena/Hotel- Management.git"
        },
        {
          title: "Mobile application for sell vehicle parts",
          description: "Implemented Supplier Item Management for a Vehicle Service and Spare parts management system using Java and SQLite in Android studio.",
          imgUrl: proj11,
          projectLink:"https://github.com/OKWijewardena/AutoCare-MAD- Project-.git"
        },
        {
          title: "Web application for music instument store",
          description: "Implemented a Musical Instruments Store System by using html, css, javascript and PHP.",
          imgUrl: proj12,
          projectLink:"https://github.com/OKWijewardena/SoundSpace.git"
        },
      ];

      const Researchprojects = [
        {
          title: "ML web application for the research",
          description: "Implementing machine learning web application using python flask as a backend and javascript ReactJS as a frontend",
          imgUrl: proj13,
          projectLink:"https://github.com/OKWijewardena/Movie-Casting-App.git"
        },
      ];

      return(
        <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p>I am a adapted software engineer with a strong background in full-stack web development, specializing in SaaS applications and mobile applications.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <h2>Industrial Projects</h2>
                      <br/>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h2>University Projects</h2>
                      <br/>
                      <Row>
                        {
                          Universityprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <h2>Research Project</h2>
                      <br/>
                      <Row>
                        {
                          Researchprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
      )
}