import * as React from "react";
import "./portfolio.css";
import { Stack, Container, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";
import SectionHeaderComponent from "../../shared/section_header/SectionHeaderComponent";
import uiux from "../../images/portfolio/ui-ux.png";
import branding from "../../images/portfolio/branding-marketing.png";
import digital from "../../images/portfolio/graphic-digital.png";
import animations from "../../images/portfolio/animations.png";
import photography from "../../images/portfolio/photography.png";
import ThreeD from "../../images/portfolio/3D.png";
import drawings from "../../images/portfolio/traditional-art/drawings.png";
import paintings from "../../images/portfolio/traditional-art/paintings.png";
import murals from "../../images/portfolio/traditional-art/murals.png";
import handicrafts from "../../images/portfolio/traditional-art/handicrafts.png";

function PortfolioComponent() {
  return (
    <Container fluid className="portfolio-subject-container">
      <Row>
        <SectionHeaderComponent title="portfolio" />
      </Row>
      <Row
        xs={1}
        xl={2}
        style={{
          marginLeft: "25px",
          marginRight: "25px",
          overflowX: "hidden",
          overflowY: "hidden",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}>
        <Col style={{ marginBottom: "10px" }}>
          <Link className="tile-link" to={{ pathname: "/portfolio/ui-ux-and-web-design-component" }}>
            <div className="portfolio-tile big-tile" style={{ "--url": `url(${uiux})` }}>
              <div className="portfolio-tile-transbox big-tile">
                <p>
                  UI/UX and web <br /> design
                </p>
              </div>
            </div>
          </Link>
        </Col>
        <Col style={{ marginBottom: "10px" }}>
          <div className="portfolio-tile big-tile" style={{ "--url": `url(${branding})` }}>
            <div className="portfolio-tile-transbox big-tile">
              <p>
                branding and <br /> marketing designs
              </p>
            </div>
          </div>
        </Col>
        <Col style={{ marginBottom: "10px" }}>
          <div className="portfolio-tile big-tile" style={{ "--url": `url(${digital})` }}>
            <div className="portfolio-tile-transbox big-tile">
              <p>
                graphic designs and <br /> digital arts
              </p>
            </div>
          </div>
        </Col>
        <Col style={{ marginBottom: "10px" }}>
          <div className="portfolio-tile big-tile" style={{ "--url": `url(${animations})` }}>
            <div className="portfolio-tile-transbox big-tile">
              <p>animations</p>
            </div>
          </div>
        </Col>
        <Col style={{ marginBottom: "10px" }}>
          <div className="portfolio-tile big-tile" style={{ "--url": `url(${photography})` }}>
            <div className="portfolio-tile-transbox big-tile">
              <p>photographies</p>
            </div>
          </div>
        </Col>
        <Col style={{ marginBottom: "10px" }}>
          <div className="portfolio-tile big-tile" style={{ "--url": `url(${ThreeD})` }}>
            <div className="portfolio-tile-transbox big-tile">
              <p>3D graphics</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <p className="traditional-art-title">traditional-art</p>
      </Row>
      <Row
        xs={1}
        md={2}
        xl={4}
        style={{
          marginLeft: "25px",
          marginRight: "25px",
          overflowX: "hidden",
          overflowY: "hidden",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}>
        <Col style={{ marginBottom: "10px" }}>
          <div className="portfolio-tile small-tile" style={{ "--url": `url(${drawings})` }}>
            <div className="portfolio-tile-transbox small-tile">
              <p>drawings</p>
            </div>
          </div>
        </Col>
        <Col style={{ marginBottom: "10px" }}>
          <div className="portfolio-tile small-tile" style={{ "--url": `url(${paintings})` }}>
            <div className="portfolio-tile-transbox small-tile">
              <p>paintings</p>
            </div>
          </div>
        </Col>
        <Col style={{ marginBottom: "10px" }}>
          <div className="portfolio-tile small-tile" style={{ "--url": `url(${murals})` }}>
            <div className="portfolio-tile-transbox small-tile">
              <p>murals</p>
            </div>
          </div>
        </Col>
        <Col style={{ marginBottom: "10px" }}>
          <div className="portfolio-tile small-tile" style={{ "--url": `url(${handicrafts})` }}>
            <div className="portfolio-tile-transbox small-tile">
              <p>
                handicrafts <br /> and other <br /> creations
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PortfolioComponent;
