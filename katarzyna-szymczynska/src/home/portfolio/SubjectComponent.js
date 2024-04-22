import * as React from "react";
import SectionHeaderComponent from "../../shared/section_header/SectionHeaderComponent";
import { Container, Row, Col, Breadcrumb, Stack, Image } from "react-bootstrap/";
import "./portfolio.css";
import "./portfolio.scss";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import BasicNavbarComponent from "../../navbar/BasicNavbarComponent";
import logo from "./images/big-logo.svg";
import $ from "jquery";
import { mindProjects } from "./data/mind-projects";
import { bodyProjects } from "./data/body-projects";
import { spiritProjects } from "./data/spirit.projects";

var allProjects = [
  {
    projects: mindProjects,
    category: "mind",
  },
  {
    projects: bodyProjects,
    category: "body",
  },
  {
    projects: spiritProjects,
    category: "spirit",
  },
];

function SubjectComponent(props) {
  const [subject, setSubject] = React.useState("mind");

  function handleClick(param) {
    allProjects.map((p) => $("#" + p.category).removeClass("active-subject"));
    $("#" + param).addClass("active-subject");
    setSubject(param);
    window.history.pushState("object or string", "Title", "/katarzyna-szymczynska#/portfolio/" + param);
  }

  React.useEffect(() => {
    setSubject(props.subjectTitle);
    $("#" + props.subjectTitle).addClass("active-subject");
  }, []);

  let selectedSubjectProjects = allProjects.find((element) => element.category == subject).projects;

  return (
    <>
      <BasicNavbarComponent />
      <div className="background-div" id="portfolio">
        <Container fluid className="subject-container">
          <Row className="content-row">
            <Col style={{ maxWidth: "1310px" }}>
              <Stack direction="horizontal" gap={3}>
                <Breadcrumb>
                  <Breadcrumb.Item href="#/home">home</Breadcrumb.Item>
                  <Breadcrumb.Item href="#portfolio">
                    <HashLink to="/home/#portfolio">portfolio</HashLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>{subject}</Breadcrumb.Item>
                </Breadcrumb>
              </Stack>
            </Col>
          </Row>
          <Row>
            <SectionHeaderComponent title="portfolio" />
          </Row>
          <Row xs={1} xl={2} className="content-row">
            <Col className="content-column">
              <p className="portftolio-description">
                In my portfolio, I chose the motif of fire because it's my element - I'm a Leo. In my logo, I
                incorporate the triquetra symbol, inspired by Celtic culture, to represent the trinity of body, mind,
                and spirit within each individual.
                <br />
                <br />
                This concept helps me organize my projects into three distinct areas: intellect, reflected in my
                intellectual work; physicality, seen in the tangible outcomes of my efforts; and spirituality, which
                influences my artistic perspective and passions.
              </p>
            </Col>
            <Col className="content-column logo-column">
              <Image src={logo} fluid className="big-logo" />
            </Col>
          </Row>
          <Row xs={1} xl={3} className="tiles-row">
            <Col className="tile-column">
              <div id="mind" className="tile " onClick={() => handleClick("mind")}>
                <p className="category-title">mind</p>
                <p className="category-description">IT work, encompassing UI/UX projects and computer graphics</p>
              </div>
            </Col>
            <Col className="tile-column">
              <div id="body" className="tile" onClick={() => handleClick("body")}>
                <p className="category-title">body</p>
                <p className="category-description">physical manifestations of work, such as printed materials</p>
              </div>
            </Col>
            <Col className="tile-column">
              <div id="spirit" className="tile" onClick={() => handleClick("spirit")}>
                <p className="category-title">spirit</p>
                <p className="category-description">work inspired by my passions and hobbies</p>
              </div>
            </Col>
          </Row>
          <Row xs={1} md={2} xl={3} className="tiles-row">
            {selectedSubjectProjects.map((item) => (
              <Col className="tile-column card-column">
                <Link style={{ textDecoration: "none" }} to="#">
                  <Card className="project-card">
                    <Card.Header>
                      <Image src={item.logo} className="card-header-image" />
                    </Card.Header>
                    <Card.Img variant="top" className="card-image" src={item.bodyImage} flex />
                    <Card.Body>
                      <Card.Title className="project-title">{item.title}</Card.Title>
                      <Card.Text className="project-descr">{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SubjectComponent;
