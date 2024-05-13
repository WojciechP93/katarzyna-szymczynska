import * as React from "react";
import { useState } from "react";
import { Image, Modal, Carousel, Container, Row, Col, Stack } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./galery-masonry.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SwiperComponent from "./SwiperComponent";

function GalleryResponsiveMasonryComponent(props) {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (selectedIndex) => {
    setIndex(selectedIndex);
    setShow(true);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);

    if (selectedIndex >= props.images.length) {
      if (e.currentTarget.className == "carousel-control-next") {
        setIndex(0);
      } else {
        setIndex(props.images.length - 1);
      }
    }
  };

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 576: 1, 992: 2, 1600: 3, 1920: 4 }}
        style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Masonry gutter="20px">
          {props.images.map((image, i) => (
            <Image src={image} className="gallery-image" alt="..." onClick={() => handleShow(i)} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <Modal show={show} fullscreen={true} onHide={handleClose} keyboard={false} className="portfolio-gallery-modal">
        <Modal.Header closeButton closeVariant="white" />
        <Modal.Body>
          <div className="swiperComponent">
            <SwiperComponent images={props.images} initialSlide={index} />
          </div>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            indicators={false}
            controls={true}
            className="carousel">
            {props.images.map((image) => (
              <Carousel.Item>
                <Image src={image} style={{ width: "100%", objectFit: "cover" }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default GalleryResponsiveMasonryComponent;
