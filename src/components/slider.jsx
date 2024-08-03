import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCard from "./sliderCard";
import { CheckCircle, CheckCircleOutline, EditCalendarOutlined, EmojiEventsOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Slider = () => {
    const {t} = useTranslation()
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const sliderData = [
    {
        icon:<CheckCircleOutline sx={{fontSize:100}}/>,
        heading:t("heading1"),
        description:t("description2"),
    },
    {
        icon:<EditCalendarOutlined sx={{fontSize:100}}/>,
        heading:t("heading2"),
        description:t("description2"),
    },
    {
        icon:<EmojiEventsOutlined sx={{fontSize:100}}/>,
        heading:t("heading3"),
        description:t("description3"),
    }
  ]

  return (
    <Box m={10} mx={10}>
    <Carousel
      swipeable={true}
      slidesToSlide={1}
      draggable={true}
      showDots={false}
      responsive={responsive}   
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
    //   deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
     {sliderData.map((data)=>(
        <SliderCard key={data.heading} data={data}/>
     ))} 
    </Carousel>
    </Box>
  );
};

export default Slider;
