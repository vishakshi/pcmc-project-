import React from "react";
import { Box, Typography } from "@mui/material";
import bg from "../../assets/d15.jpg"
import { useTranslation } from "react-i18next";
import star from '../../assets/star.png'

const DivyangAbout = () => {
    const {t} = useTranslation();
  return (
    <Box sx={{  pt: 5,backgroundColor:'white' }}>
      <Typography sx={{ textAlign: "center",fontWeight:700,py:3 }} variant="h4">
      {Array.from({length:3}).map(()=>(
          <Typography component='img' height={12} src={star} />
         ))} {t("divyangFoundation")} {Array.from({length:3}).map(()=>(
          <Typography component='img' height={12} src={star} />
         ))}
      </Typography>
      <Box
        spacing={2}
        container
        sx={{ "@media (min-width:768px)": { px: 20 }, py: 5 }}
      >
        <Box sx={{minHeight:400,px:2,py:4,borderRadius:5,position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${bg})`, 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      zIndex: 1,
      opacity:1,
      borderRadius:5
    },}} >
            <Typography textAlign='center' sx={{position:'relative',zIndex:2}} color='white' variant="body2">{t("pimpriDescription")}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DivyangAbout;
