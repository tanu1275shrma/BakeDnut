import React from "react";

import bgdonut1 from "./image/bg-donut-1.png";
import bgdonut2 from "./image/donut-2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./Carousel.css";

const slider = [
  {
    title: "Choco Bliss",
    description:
      "A perfect balance of rich chocolate and fluffy dough, guaranteed to brighten your day.",
    url: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Sprinkle Storm",
    description:
      "Sweet vanilla glaze topped with colorful sprinkles, making every bite a joyful celebration.",
    url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    title: "Rainbow Delight",
    description:
      "Freshly baked with creamy strawberry frosting and crunchy sprinkles to delight your taste buds.",
    url: "https://images.unsplash.com/photo-1646615077267-97c6088b74d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
  },

  {
    title: "Blue Glacé Crème",
    description:
      "Delight in our caramel-filled donut, perfectly sweet and gooey—an irresistible treat for any time.",
    url: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Fleur de Sucre",
    description:
      "Crispy on the outside, soft inside, topped with rich chocolate glaze and a sprinkle of nuts.",
    url: "https://images.unsplash.com/photo-1533137138-ba67dc90d752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

const Carousel = () => {
  return (
    <div className="carousel">
      <div>
        <div className="carousel-content">
          <span>discover</span>
          <h1>Sweet Donut Heaven</h1>
          <hr />
          <p>
            Step into world of sweetness, where every donut is handcrafted with
            love, glazed with happiness, and made to make your day better—one
            bite at a time!.
          </p>
          <a href="#" className="slider-btn">
            download app
          </a>
        </div>
      </div>

      <Swiper
        className="myswiper"
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
      >
        {slider.map((data) => (
          <SwiperSlide
            style={{ backgroundImage: `url(${data.url})` }}
            className="myswiper-slider"
          >
            <div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <a href={`${data.url}`} target="_blank" className="slider-btn">
                explore
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <img src={bgdonut1} alt="bg image" className="bgdonut1" />
      <img src={bgdonut2} alt="bg image" className="bgdonut2" />
    </div>
  );
};

export default Carousel;
