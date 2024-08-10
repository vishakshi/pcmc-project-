import React from "react";
import { Box,Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bg from '../../assets/d13edit.jpg'
import star from '../../assets/favorite.png'
import { pxToRem } from "../../utiils/utility";

const TestimonialCard = ({comment,name}) => {
    const { t } = useTranslation();
  return (
    <Box sx={{color:'white'}}>
      <Typography variant="body2">{t("publicComments")} {Array.from({length:3}).map(()=>(
          <Typography component='img' height={10} src={star} />
         ))}</Typography>
      <Typography variant="h4" sx={{textAlign:'center',fontWeight:700}} >{t("peopleSayAboutUs")}</Typography>
      <Box>
        <Typography variant="body1" sx={{textAlign:'center',fontSize:pxToRem(22),py:3}} textAlign='center'>{comment}</Typography>
      </Box>
      <Typography variant="body1" textAlign='center'>{name} ------</Typography>
    </Box>
  );
};

const Testimonials = () => {
    const { t } = useTranslation();
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };

    const cardData = [
        {
            id:'01',
            comment:t("divyangPhenomenalJob"),
            name:t("rajeshPatil"),
        },
        {
            id:'02',
            comment:t("foundationWorkImpact"),
            name:t("snehaShah"),
        },
        {
            id:'03',
            comment:t("extraordinaryEfforts"),
            name:t("amitKumar"),
        },
    ]
  return (
    <Box py={15} sx={{ px:{md:25,xs:2},backgroundImage:`url(${bg})`,backgroundRepeat: "no-repeat",width:'100%',backgroundSize:'cover',position:'relative',
    '::before': {
      backgroundColor: '#04072eb3',
      content: '""', // Content should be an empty string or a valid string
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },}}>
      <Carousel
        swipeable={true}
        slidesToSlide={1}
        // draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        //   deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {cardData.map(({comment,name,id}) => (
          <TestimonialCard key={id} comment={comment} name={name} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Testimonials;
