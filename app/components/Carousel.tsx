"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './ImageSlider.css';
import Box from "@mui/material/Box";
import Image from "next/image";
import { carouselImages } from "../data/dummyData/data";

export default function Carousel() {
  const settings = {
    dots: true,
  };
  return (
    <Box sx={{position: "relative"}} className="image-slider-container">
      <Slider {...settings}>
        {carouselImages.map((img, index) => (
          <Box component="div" key={index}>
            <Image width={500} height={500} style={{width: "100%",height:"80vh", objectFit: "cover", objectPosition: "center"}} alt={`img${index}`} src={img} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
