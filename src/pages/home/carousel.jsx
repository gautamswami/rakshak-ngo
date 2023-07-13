import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselComponent() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    adaptiveHeight: true,
  };
  const [screenSize, setScreenSize] = useState("");
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const screenSize = width <= 768 ? "mobile" : "desktop";
      setScreenSize(screenSize);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Slider {...settings}>
        <div className="slide_container">
          <div className="overlay_first overlay_div"></div>
          <img src="/imagesample.avif" />

          {/* {screenSize === "mobile" ? (
            <img src="/janhitimagemobile.png" alt="Mobile Image" />
          ) : (
            <img src="/janhitimage.png" alt="Desktop Image" />
          )} */}
        </div>
        <div className="slide_container">
          <div className="overlay_second overlay_div"></div>
          <img src="/imagesample.avif" />
        </div>
        <div className="slide_container">
          <div className="overlay_third overlay_div"></div>
          <img src="/imagesample.avif" />
        </div>
      </Slider>
    </div>
  );
}
