import React,{useState} from 'react'
import { Box,Typography,TextField,InputAdornment,Button,CircularProgress, Divider } from '@mui/material'
import { Google, Lock,Mail } from '@mui/icons-material'
import bg from '../../assets/user-login.jpg'
import { useNavigate } from 'react-router-dom'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import ApiManager from '../../apiManager/apiManager'

const UserLogin = () => {
    const [formData,setFormData] = useState({userName:"",password:""})
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleGoogleData = async (data) => {
        try {
            const response = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo',{headers:{Authorization:`Bearer ${data.access_token}`}});
            console.log(response.data);
            const userData = {
                name:response?.data?.name,
                email:response?.data?.email,
            }
            const response2 = await ApiManager.googleLogin(userData);
        } catch (error) {
            console.log(error)
        }
    }
    const handleGoogleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => handleGoogleData(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    const handleSubmit = async (e) => {
        try{
        e.preventDefault();
        setIsLoading(true)
        const response = await ApiManager.userLogin(formData);
        setIsLoading(false)
        if(response.data.status){
        const token = response?.data?.data?.authToken;
        sessionStorage.setItem('@authToken',token);
        navigate('/dashboard')
        }
    }
    catch(err){
        console.log(err)
        setIsLoading(false)
    }
    }
  return (
    <Box
    sx={{
      backgroundColor: "#ECECEC",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems:'center',
        backgroundColor: "white",
        gap: 5,
        paddingX: 5,
        paddingY: 2,
        borderRadius: 5,
      }}
    >
      <Box>
        <form onSubmit={handleSubmit}>
        <Box display="flex" alignItems="center">
          {/* <img src={'logo'} style={{ width: "2rem" }} /> */}
          <Typography variant="h4" fontWeight='700' >
            Welcome back!
          </Typography>
        </Box>
        <Typography variant="h5" fontSize={25}>
          Log into your account
        </Typography>
        <Typography mb={2} color="secondary" variant="body1">
          Enter your username and password to login
        </Typography>
        <TextField
          sx={{ display: "block", mb: 2 }}
          fullWidth
          required
          size="small"
          placeholder="Username"
          variant="outlined"
          value={formData.userName}
          onChange={(e)=>setFormData({...formData,userName:e.target.value})}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Mail size={15} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ display: "block", mb: 2 }}
          fullWidth
          required
          size="small"
          placeholder="Password"
          variant="outlined"
          type="password"
          value={formData.password}
          onChange={(e)=>setFormData({...formData,password:e.target.value})}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock size={15} />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" type='submit' disabled={isLoading} fullWidth={true} >
          {isLoading ? <CircularProgress size={24} /> : "Log In"}
        </Button>
        </form>
        <Box mt={2}>
        <Button variant='outlined' onClick={handleGoogleLogin}  startIcon={<Google/>} fullWidth>
            Sign in with Google
        </Button>
        </Box>
      </Box>
      <Box
        sx={{
          "@media (max-width:476px)": {
            display: "none",
          },
        }}
      >
        <Box sx={{borderRadius:'10px',objectFit:'cover'}} component="img" height={430} width={300} src={bg} />
      </Box>
    </Box>
  </Box>
  )
}

export default UserLogin
