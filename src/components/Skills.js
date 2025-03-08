import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import P1 from "../assets/img/p1.png";
import P2 from "../assets/img/p2.png";
import P3 from "../assets/img/p3.png";
import P4 from "../assets/img/p4.png";
import P5 from "../assets/img/p5.png";
import P6 from "../assets/img/p6.png";
import P7 from "../assets/img/p7.png";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skill" id="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                I have experience in the following technologies
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={P1} alt="image"/>
                                    <h4>Programming Languages</h4>
                                    <p>JavaScript, TypeScript, Python, Java, PHP</p>
                                </div>
                                <div className="item">
                                    <img src={P2} alt="image"/>
                                    <h4>Web Technologies</h4>
                                    <p>React.js, Angular, Node.js, Next.js, Redux, Webpack, Flux, MIU, jQuery, Bootstrap, Django, flask, Laravel, HTML5, CSS3, SCSS, GraphQL, RESTful APIs, Wordpress</p>
                                </div>
                                <div className="item">
                                    <img src={P3} alt="image"/>
                                    <h4>Mobile Development</h4>
                                    <p>Flutter, React Native</p>
                                </div>
                                <div className="item">
                                    <img src={P4} alt="image"/>
                                    <h4>Tools & Build Systems</h4>
                                    <p>Git, GitLab, Docker, CloudPanel, DigitalOcean, AWS S3, Jira</p>
                                </div>
                                <div className="item">
                                    <img src={P5} alt="image"/>
                                    <h4>Database Systems</h4>
                                    <p>MongoDB, Relational Databases, Firebase</p>
                                </div>
                                <div className="item">
                                    <img src={P6} alt="image"/>
                                    <h4>Development Practices</h4>
                                    <p>Agile Software Development, Unit Testing</p>
                                </div>
                                <div className="item">
                                    <img src={P7} alt="image"/>
                                    <h4>Documentation & Debugging</h4>
                                    <p>Writing technical documentation, troubleshooting, and debugging code</p>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image"/>

        </section>
    )
}