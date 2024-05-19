import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image, Container, Row, Col } from "react-bootstrap/";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./swiper.scss";

import { FreeMode, Navigation, Thumbs, Mousewheel, Keyboard } from "swiper/modules";

function SwiperComponent(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Container fluid style={{ backgroundColor: "transparent" }}>
      <Row>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            backgroundColor: "transparent"
          }}
          initialSlide={props.initialSlide}
          loop={true}
          spaceBetween={10}
          autoHeight={true}
          keyboard={true}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs, Keyboard]}
          className="mySwiper2">
          {props.images.map((image) => (
            <SwiperSlide style={{ backgroundColor: "transparent" }}>
              <div className="swiper-image-container" style={{ backgroundColor: "transparent" }}>
                <Image src={image} fluid />
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          initialSlide={props.initialSlide}
          loop={false}
          spaceBetween={10}
          slidesPerView="auto"
          freeMode={false}
          mousewheel={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Mousewheel]}
          className="mySwiper">
          {props.images.map((image) => (
            <SwiperSlide>
              <Image src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
    </Container>
  );
}

export default SwiperComponent;
