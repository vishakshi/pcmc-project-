import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { Call, EmailOutlined, FacebookRounded, LocationCityOutlined, PhoneAndroidOutlined, Twitter } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import logo from '../assets/logo.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
const Footer = () => {
    const {t} = useTranslation()
  return (
    <Box sx={{backgroundColor:'#FF0000',color:'#fff',mt:2}}>
      <Grid container spacing={2} p={2}>
        <Grid item sm={4}>
          <Box>
            <Typography sx={{mb:1}} variant="body1">
              {t("pcmcName")}
            </Typography>
            <Typography sx={{mb:1}} variant="body1">{t("callNow")}: +91 123-4567890</Typography>
            <Typography sx={{mb:1}} variant="body1">
              {t("connectWithUs")}
              <IconButton>
                <Typography component='img' src={facebook} height={18} />
              </IconButton>
              <IconButton>
              <Typography component='img' src={twitter} height={18} />
              </IconButton>
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4}>
          <Box>
            <Typography sx={{mb:1}} variant="body1">{t("home")}</Typography>
            <Typography sx={{mb:1}} variant="body1">{t("aboutUs")}</Typography>
            <Typography sx={{mb:1}} variant="body1">{t("contactUs")}</Typography>
            <Typography sx={{mb:1}} variant="body1">{t("privacyPolicy")}</Typography>
          </Box>
        </Grid>
        <Grid item sm={4}>
        <Box>
            <Typography sx={{mb:1,display:'flex',alignItems:'center',gap:1 }} variant="body1"><PhoneAndroidOutlined/> +91 1234567890/0512-123456</Typography>
            <Typography sx={{mb:1,display:'flex',alignItems:'center',gap:1}} variant="body1"><EmailOutlined/> xyz@gmail.com</Typography>
            <Typography sx={{mb:1,display:'flex',alignItems:'center',gap:1}} variant="body1"><LocationCityOutlined/>{t("pcmcAddress")}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
