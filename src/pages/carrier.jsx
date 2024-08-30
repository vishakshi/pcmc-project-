import React from 'react'
import ImageSlider from '../components/image-slider';
import carrier1 from '../assets/hiring1-en.png'
import carrier2 from '../assets/hiring2-en.png'
import carrier3 from '../assets/hiring3-en.png'
import carrier4 from '../assets/hiring4-en.png'
import { Box } from '@mui/material';

const Carrier = () => {
    const items = [
        {
            image: carrier1,
            title: "Therapist in different areas",
            description: "We are looking for different therepist ,kindly get details and connect with us"
        },
        {
            image: carrier2,
            title: "Adiologist/Sr. Prosthetist/Orthotist",
            description: "We are looking for Adiologist/ Sr.Prosthetist/ Orthotist ,kindly get details and connect with us"
        },
        {
            image: carrier4,
            title: "Rehabilitation Worker",
            description: "We are looking for Rehabilitation Worker ,kindly get details and connect with us"
        },
        {
          image: carrier3,
          title: "Kala Shikshk",
          description: "We are looking for Kala Shikshk ,kindly get details and connect with us"
      }
    ];
  return (
    <Box sx={{py:{xs:10,md:0},background:'white',mt:-1.2}}>
   <h1 style={{color:'purple',padding:'10px 10px'}}>Divyang Bhavan Foundation is hiring now..so get connect with us !!</h1>
           <ImageSlider items={items} />
   </Box>
  )
}

export default Carrier
