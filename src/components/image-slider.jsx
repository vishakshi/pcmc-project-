import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box,Typography } from "@mui/material";
import { Margin } from "@mui/icons-material";
import pdf1 from '../assets/Recruitment 12.09.2024.pdf'

const ImageSlider = ({ items }) => {
    return (
        <Carousel>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </Carousel>
    );
};

const Item = ({ item }) => {
    return (
        <Paper>
            <img src={item.image} alt={item.title} style={{ width: "100%", height: "auto" }} />
            <h2 style={{color:'purple',padding:'20px'}}>{item.title}</h2>
            <p style={{fontSize:'20px',padding:'10px'}}>{item.description}</p>
            <Box sx={{mx:'auto',textAlign:'center'}}><Typography sx={{bgcolor:'#AD41AE',color:'white',py:1,cursor:'pointer'}} variant='h6'><a style={{textDecoration:'none',color:'white'}} href={pdf1} download>More information about Vacancies in Divyang Bhavan Foundation - Download from Here</a></Typography></Box>
        </Paper>
    );
};

export default ImageSlider;
