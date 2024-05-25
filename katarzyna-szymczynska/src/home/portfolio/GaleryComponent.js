import * as React from "react";
import { Container, Row, Stack, Breadcrumb, Image, Col } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./galery.scss";
import GalleryResponsiveMasonryComponent from "./GalleryResponsiveMasonryComponent";
import BasicNavbarComponent from "../../navbar/BasicNavbarComponent";
import { HashLink } from "react-router-hash-link";
import SkillImageComponent from "./SkillImageComponent";
import ProjectInfoComponent from "./ProjectInfoComponent";
import ColorsComponent from "./ColorsComponent";
import IconsComponent from "./IconsComponent";
import GraphicsComponent from "./GraphicsComponent";
import ButtonsComponent from "./ButtonsComponent";
import FontsComponent from "./FontsComponent";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function ProjectNameComponent(props) {
  if (props.category !== "spirit") {
    return <p className="project-name">{props.title}</p>;
  } else {
    return (
      <p className="project-name" style={{ textAlign: "center" }}>
        {props.title}
      </p>
    );
  }
}

function StyleGuideComponent(props) {
  if (props.category !== "spirit") {
    return <p className="project-name">Style guide</p>;
  }
}

function DescriptionComponent(props) {
  if (props.description !== undefined) {
    return <p className="project-description">{props.description}</p>;
  }
}

function GaleryComponent(props) {
  var info1 = props.projectData.info.slice(0, props.projectData.info.length / 2);
  var info2 = props.projectData.info.slice(props.projectData.info.length / 2, props.projectData.info.length);

  return (
    <>
      <BasicNavbarComponent />
      <Container fluid className="galery-container">
        <Row className="galery-row">
          <Col style={{ maxWidth: "1310px" }}>
            <Stack direction="horizontal" gap={3}>
              <Breadcrumb>
                <Breadcrumb.Item href="#/home">home</Breadcrumb.Item>
                <Breadcrumb.Item href="#portfolio">
                  <HashLink to="/home/#portfolio">portfolio</HashLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <HashLink to={{ pathname: "/portfolio/" + props.projectData.category }}>
                    {props.projectData.category}
                  </HashLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{props.projectData.title}</Breadcrumb.Item>
              </Breadcrumb>
            </Stack>
          </Col>
        </Row>
        <Row className="galery-row">
          <Stack>
            <ProjectNameComponent category={props.projectData.category} title={props.projectData.title} />
            <Image style={{ maxWidth: "200px" }} src={props.projectData.logo} />
            <a href={props.projectData.address} className="project-link">
              {props.projectData.address}
            </a>
            <Stack direction="horizontal">
              {props.projectData.technologies.map((image) => (
                <SkillImageComponent image={image} />
              ))}
            </Stack>
          </Stack>
        </Row>
        <Row className="galery-row">
          <Col>
            <ProjectInfoComponent info={info1} />
          </Col>
          <Col>
            <ProjectInfoComponent info={info2} />
          </Col>
        </Row>
        <Row className="galery-row">
          <StyleGuideComponent category={props.projectData.category} />
          <DescriptionComponent description={props.projectData.description} />
        </Row>
        <Row className="galery-row">
          <ResponsiveMasonry columnsCountBreakPoints={{ 576: 1, 992: 2 }} style={{ marginLeft: "20px" }}>
            <Masonry gutter="10px">
              <ColorsComponent colors={props.projectData.colors} />
              <ButtonsComponent buttons={props.projectData.buttons} />
              <IconsComponent icons={props.projectData.icons} />
              <FontsComponent fonts={props.projectData.fonts} />
              <GraphicsComponent icons={props.projectData.graphics} />
            </Masonry>
          </ResponsiveMasonry>
        </Row>
        <Row className="galery-row">
          <GalleryResponsiveMasonryComponent images={props.projectData.mockups} />
        </Row>
      </Container>
    </>
  );
}

export default GaleryComponent;
