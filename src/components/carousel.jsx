import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import d1 from "../assets/d1.png"
import d2 from "../assets/d2.jpg"
import d3 from "../assets/d3.jpg"
import d4 from "../assets/d4.jpg"


const MyCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };


  return (
    <Box height={'100vh'}>
    <Carousel
      swipeable={true}
      slidesToSlide={1}
      draggable={true}
      showDots={true}
      responsive={responsive}   
      infinite={true}
    //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
    //   deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
     {[d1,d2,d3,d4].map((item,index)=>(
      <Box component='img' width={'100%'} height={'80%'} src={item} key={index} />
     ))}
    </Carousel>
    </Box>
  );
};

export default MyCarousel;
