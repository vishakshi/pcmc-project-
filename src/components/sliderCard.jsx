import { CheckCircleOutline } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import React from "react";

const SliderCard = ({ data }) => {
  return (
    <Card sx={{minHeight:340,mx:3,cursor:'pointer',p:2,py:4,':hover':{color:'white',backgroundColor:'#DD131A'}, transition: 'color 0.7s ease, background-color 0.7s ease',}}>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column",gap:2 }}
      >
        <Typography component='img' src={data.icon} height={100} />
        <Typography variant="body2">{data.heading}</Typography>
        <Typography variant="body1">{data.description}</Typography>
      </Box>
    </Card>
  );
};

export default SliderCard;
