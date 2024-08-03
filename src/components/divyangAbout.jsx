import React from "react";
import { Box, Typography } from "@mui/material";
import bg from "../assets/d15.jpg"
import { useTranslation } from "react-i18next";
const DivyangAbout = () => {
    const {t} = useTranslation();
  return (
    <Box sx={{ backgroundColor: "#fff", py: 3 }}>
      <Typography sx={{ textAlign: "center",fontWeight:700 }} variant="h4">
        {t("divyangFoundation")}
      </Typography>
      <Box
        spacing={2}
        container
        sx={{ "@media (min-width:768px)": { px: 20 }, py: 5 }}
      >
        <Box sx={{backgroundImage:`url(${bg})`,backgroundRepeat: "no-repeat",width:'100%',minHeight:400,px:2,py:4,borderRadius:5}} >
            <Typography textAlign='center' color='white' variant="body2">{t("pimpriDescription")}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DivyangAbout;
