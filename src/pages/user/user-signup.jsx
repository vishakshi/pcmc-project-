import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  CircularProgress,
  Divider,
} from "@mui/material";
import { Google, Lock, Mail } from "@mui/icons-material";
import bg from "../../assets/user-signup.jpg";
import { Link, useNavigate } from "react-router-dom";
import SignUpForm from "../../components/SignUp";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import ApiManager from "../../apiManager/apiManager";
import { useTranslation } from "react-i18next";

const UserSignUp = () => {
  const {t} = useTranslation()
  const handleGoogleData = async (data) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v1/userinfo",
        { headers: { Authorization: `Bearer ${data.access_token}` } }
      );
      console.log(response.data);
      const userData = {
        firstName: response?.data?.name,
        email: response?.data?.email,
      };
      const response2 = await ApiManager.googleLogin(userData);
      if (response2?.data?.status) {
        const token = response2?.data?.token;
        sessionStorage.setItem("@authToken", token);
        sessionStorage.setItem("@userType", "user");
        navigate("/dashboard");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => handleGoogleData(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: 'space-evenly',
        alignItems: "center",
        my:5,
        width: "100%",
        "@media (max-width:476px)": {
            backgroundColor: "#ECECEC",
          },
      }}
    >
        <Box component='img' sx={{
          "@media (max-width:476px)": {
            display: "none",
          },
          width:600,
          borderRadius:5
        }} src={bg} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "white",
          paddingX: 5,
          paddingY: 2,
          borderRadius: 5,
          marginX:5,
          width:500,
        }}
      >


        <Box>
          <SignUpForm />


          {/* <Box mt={2}>
            <Button
              variant="outlined"
              onClick={handleGoogleLogin}
              startIcon={<Google />}
              fullWidth
            >
              Sign in with Google
            </Button>
            <Typography variant="caption" sx={{ float: "right", mt: 1 }}>
              {t('alreadyHaveAnAccount')} 
              <span style={{ color: "blue", cursor: "pointer" }}>
                <Link style={{ textDecoration: "none" }} to="/user-login">
                  {" " + t("signIn")}
                </Link>
              </span>
            </Typography>
          </Box> */}


        </Box>



      </Box>
    </Box>
  );
};

export default UserSignUp;
