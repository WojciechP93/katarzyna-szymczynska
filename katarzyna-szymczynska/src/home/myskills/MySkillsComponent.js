import * as React from "react";
import "./my-skills.scss";
import { Stack, Container, Row, Col, Image } from "react-bootstrap/";

import SectionHeaderComponent from "../../shared/section_header/SectionHeaderComponent";

import Figma from "./images/figma.svg";
import Illustrator from "./images/illustrator.svg";
import InDesign from "./images/indesign.svg";
import XD from "./images/xd.svg";
import Photoshop from "./images/photoshop.svg";
import AfterEffects from "./images/aftereffects.svg";
import Affinity from "./images/affinity.svg";
import Office365 from "./images/office365.svg";
import Jira from "./images/jira.svg";
import Confluence from "./images/confluence.svg";
import Notion from "./images/notion.svg";
import Webflow from "./images/webflow.svg";
import Shopify from "./images/shopify.svg";
import WordPress from "./images/wordpress.svg";
import VSCode from "./images/vscode.svg";
import Git from "./images/github.svg";
import GitHub from "./images/github.svg";
import CSS3 from "./images/css3.svg";
import HTML5 from "./images/html5.svg";

var skills = [
  {
    image: Figma,
    title: "Figma",
  },
  {
    image: Illustrator,
    title: "Adobe Illustrator",
  },
  {
    image: InDesign,
    title: "Adobe InDesign",
  },
  {
    image: XD,
    title: "Adobe XD",
  },
  {
    image: Photoshop,
    title: "Adobe Photoshop",
  },
  {
    image: AfterEffects,
    title: "After Effects",
  },
  {
    image: Affinity,
    title: "Affinity Designer",
  },
  {
    image: Office365,
    title: "Microsoft Office 365",
  },
  {
    image: Jira,
    title: "Jira",
  },
  {
    image: Confluence,
    title: "Confluence",
  },
  {
    image: Notion,
    title: "Notion",
  },
  {
    image: Webflow,
    title: "Webflow",
  },
  {
    image: Shopify,
    title: "Shopify",
  },
  {
    image: WordPress,
    title: "WordPress",
  },
  {
    image: VSCode,
    title: "Visual Studio Code",
  },
  {
    image: GitHub,
    title: "GitHub",
  },
  {
    image: CSS3,
    title: "CSS3",
  },
  {
    image: HTML5,
    title: "HTML5",
  },
];

function MySkillsComponent() {
  return (
    <Stack className="my-skills-stack">
      <SectionHeaderComponent title="my skills" />
      <Container fluid>
        <Row className="content-row">
          <Col xs={12} xl={6} className="skills-images-column">
            <p className="main-text">
              In my work, I harness a diverse array of tools and software, perpetually expanding my knowledge and skills
              while seamlessly integrating others into my daily workflow. Among these are:
            </p>
            <Container fluid>
              <Row>
                <Col xs={6}>
                  {skills.slice(0, skills.length / 2).map((skills, i) => (
                    <p className="skill-title">&#x2022; {skills.title}</p>
                  ))}
                </Col>
                <Col xs={6}>
                  {skills.slice(skills.length / 2, skills.length).map((skills, i) => (
                    <p className="skill-title">&#x2022; {skills.title}</p>
                  ))}
                </Col>
              </Row>
            </Container>
            <p className="main-text">
              These tools not only facilitate the realization of my creative vision but also empower me to craft
              solutions that are both innovative and impactful. Through continuous exploration and mastery of these
              platforms, I am able to push the boundaries of my craft and deliver exceptional results across various
              projects and disciplines.
            </p>
          </Col>
          <Col xs={12} xl={6} className="skills-images-column">
            <Stack direction="horizontal" className="images skills-images-stack">
              {skills.map((skill, i) => (
                <div className="skill-image-container">
                  <Image src={skill.image} className="skill-image" />
                </div>
              ))}
            </Stack>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
}

export default MySkillsComponent;
