import React from 'react'
import { Box,Typography,Button, Grid, Divider } from '@mui/material'
import bg from '../../assets/rule.png'
import { useTranslation } from 'react-i18next'
import { LoginOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import star from '../../assets/star.png'
import { pxToRem } from '../../utiils/utility'

const Rule = () => {
    const {t} = useTranslation();
    
  return (
    <Box sx={{backgroundColor:'#fff',pb:3,pt:7}}>
         {/* <Typography sx={{textAlign:'center',fontWeight:700,pb:2}} variant='h4'>{Array.from({length:3}).map(()=>(
          <Typography component='img' height={12} src={star} />
         ))} {t('termsAndConditions')} {Array.from({length:3}).map(()=>(
          <Typography component='img' height={12} src={star} />
         ))} </Typography> */}
         <Grid container sx={{'@media (min-width:768px)':{px:20}}} direction="row">
        <Grid sx={{display:'flex',p:5,flexDirection:'column',gap:2}} item md={6} >
        <Typography sx={{fontWeight:700}} variant='h6'>{t('honorCompetition')} {Array.from({length:3}).map(()=>(
          <Typography component='img' height={10} sx={{objectFit:'cover',ml:0.5}} src={star} />
         ))} </Typography>  
        <Typography sx={{textAlign:'center',fontWeight:700,pb:2}} variant='h4'>{t('termsAndConditions')} </Typography>
           {['logoSize','highResolution','acceptedFormats'].map((item)=>{
            return(
                <>
                <Typography key={item} variant='body1' sx={{fontSize:pxToRem(16)}}>
                {t(item)}
            </Typography>
            <Divider />
            </>
            )
           })} 
            <Typography variant='body1' sx={{fontSize:pxToRem(17),fontWeight:700}}>
            {t('evaluationCriteria')}
            </Typography>
            <Typography component='ul'>

           {[{key:'simplicity',value:'simplicityDescription'},{key:'unique',value:'uniqueDescription'},{key:'relevance',value:'relevanceDescription'}].map(({key,value})=>(
            <Typography key={key} component='li' sx={{marginLeft:pxToRem(15)}} >
            {t(key)} : {t(value)} 
                </Typography>
           ))} 
            </Typography>
        </Grid>
        <Grid sx={{display:{xs:'none',sm:'flex'},justifyContent:{xs:'center',sm:'end'}}} item sm={12} xs={12} md={6}><Box sx={{borderRadius:5,objectFit:'cover'}} height={500} component='img' src={bg} /></Grid>
    </Grid>
    </Box>
  )
}

export default Rule
