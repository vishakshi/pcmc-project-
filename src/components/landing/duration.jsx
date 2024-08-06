import React from 'react'
import { Box,Typography,Button, Grid } from '@mui/material'
import bg from '../../assets/d9.jpg'
import { useTranslation } from 'react-i18next'
import { LoginOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import star from '../../assets/star.png'

const Duration = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const handleSignIn = () => {
      if(sessionStorage.getItem('@authToken') && sessionStorage.getItem('@userType') === "user"){
        navigate('/dashboard')
      }else{
          navigate('/user-login')
      }
    }
  return (
    <Box sx={{backgroundColor:'#fff',py:3}}>
         <Typography sx={{textAlign:'center',fontWeight:700}} variant='h4'>{Array.from({length:3}).map(()=>(
          <Typography component='img' height={12} src={star} />
         ))} {t('competitionDuration')} {Array.from({length:3}).map(()=>(
          <Typography component='img' height={12} src={star} />
         ))} </Typography>
         <Grid container sx={{'@media (min-width:768px)':{px:20}}} direction="row">
        <Grid sx={{display:'flex',p:5,flexDirection:'column',gap:5}} item md={6} >
            <Typography variant='body1' sx={{fontSize:18,textAlign:'center'}}>
                {t('competitionDescription')}
            </Typography>
            <Typography variant='body1' sx={{fontSize:18,textAlign:'center'}}>
            {t('competitionDuration')} <span style={{fontWeight:700}}> 10-08-2024 {t('to')} 15-08-2024</span>
            </Typography>
            <Box mx='auto'><Button variant='contained' onClick={handleSignIn} size="large" endIcon={<LoginOutlined/>} sx={{color:'white',backgroundColor:'#800080','&:hover':{backgroundColor:'#9b009b'}}}>Register Now</Button></Box>
        </Grid>
        <Grid sx={{display:'flex',justifyContent:{xs:'center',sm:'end'}}} item sm={12} xs={12} md={6}><Box sx={{borderRadius:5}} width={300} component='img' src={bg} /></Grid>
    </Grid>
    </Box>
  )
}

export default Duration
