import React from 'react'
import { Box,Typography,Button, Grid } from '@mui/material'
import bg from '../assets/d9.jpg'
import { useTranslation } from 'react-i18next'

const Duration = () => {
    const {t} = useTranslation();
  return (
    <Box sx={{backgroundColor:'#fff',py:3}}>
         <Typography sx={{textAlign:'center',fontWeight:700}} variant='h4'>{t('competitionDuration')}</Typography>
         <Grid container sx={{'@media (min-width:768px)':{px:20}}} direction="row">
        <Grid sx={{display:'flex',p:5,flexDirection:'column',gap:5}} item md={6} >
            <Typography variant='body1' sx={{fontSize:18,textAlign:'center'}}>
                {t('competitionDescription')}
            </Typography>
            <Typography variant='body1' sx={{fontSize:18,textAlign:'center'}}>
            {t('competitionDuration')} <span style={{fontWeight:700}}> 10-08-2024 {t('to')} 15-08-2024</span>
            </Typography>
            <Button variant='outlined'>Register Now</Button>
        </Grid>
        <Grid sx={{display:'flex',justifyContent:'end'}} item sm={12} xs={12} md={6}><Box sx={{borderRadius:5}} width={300} component='img' src={bg} /></Grid>
    </Grid>
    </Box>
  )
}

export default Duration
