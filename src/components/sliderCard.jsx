import { CheckCircleOutline } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import React from "react";

const SliderCard = ({ data }) => {
  return (
    <Card sx={{minHeight:300,mx:5,cursor:'pointer',p:2}}>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column",gap:2 }}
      >
        {data.icon}
        <Typography variant="body2">{data.heading}</Typography>
        <Typography variant="body1">{data.description}</Typography>
      </Box>
    </Card>
  );
};

export default SliderCard;
