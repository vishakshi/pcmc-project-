import React from 'react'
import ImageSlider from '../components/image-slider';
import carrier1 from '../assets/hiring1-en.png'
import carrier2 from '../assets/hiring2-en.png'
import carrier3 from '../assets/hiring3-en.png'
import carrier4 from '../assets/hiring4-en.png'
import { Box,Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Carrier = () => {
  const {t} = useTranslation();
    const items = [
        {
            image: carrier1,
            title: "therapistInDifferentAreas",
            description: "lookingForTherapists"
        },
        {
            image: carrier2,
            title: "audiologistAndProsthetics",
            description: "lookingForAudiologist"
        },
        {
            image: carrier4,
            title: "rehabilitationWorkers",
            description: "lookingForRehabilitationWorkers"
        },
        {
          image: carrier3,
          title: "kalaShikshak",
          description: "lookingForKalaShikshak"
      }
    ];
  return (
    <Box sx={{py:{xs:10,md:0},background:'white',mt:{xs:0,md:5}}}>
   <Typography variant='h4' sx={{color:'purple',textAlign:'center',px:2,pt:{xs:1,md:8},pb:5,fontWeight:700}}>{t('hiringNow')}</Typography>
           <ImageSlider items={items} />
   </Box>
  )
}

export default Carrier
