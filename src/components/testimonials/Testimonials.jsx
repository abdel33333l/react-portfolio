import React from "react";
import "./testimonials.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.png";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    img: avatar1,
    name: "Clint Name",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod est tempora earum et illo sed ex a vero officia ab laboriosam excepturi temporibus nulla omnis cum, doloremque harum id quidem.  ",
  },
  {
    id: 2,
    img: avatar2,
    name: "Clint Name",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod est tempora earum et illo sed ex a vero officia ab laboriosam excepturi temporibus nulla omnis cum, doloremque harum id quidem.  ",
  },
  {
    id: 3,
    img: avatar3,
    name: "Clint Name",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod est tempora earum et illo sed ex a vero officia ab laboriosam excepturi temporibus nulla omnis cum, doloremque harum id quidem.  ",
  },
  {
    id: 4,
    img: avatar4,
    name: "Clint Name",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod est tempora earum et illo sed ex a vero officia ab laboriosam excepturi temporibus nulla omnis cum, doloremque harum id quidem.  ",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clints</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, img, name, review }) => {
          return (
            <SwiperSlide className="justMap" key={id}>
              <div className="testimonials__avatar">
                <img src={img} alt="tt" />
              </div>
              <div className="testimonials__review">
                <h3 className="testimonials__name">{name}</h3>
                <p className="testimonials__p">{review}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
