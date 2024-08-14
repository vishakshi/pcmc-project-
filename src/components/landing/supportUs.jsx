import { Box,Typography,IconButton } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import bg from '../../assets/d11.jpg'
import bgHand from '../../assets/d12.jpg'
import { LoginOutlined, PlayCircleFilled } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import star from '../../assets/star.png'
import { pxToRem } from '../../utiils/utility'

const Support = () => {
    const {t} = useTranslation();

  return (
   <Box sx={{
    backgroundColor:'transparent',
    py:15,
    px:{xs:5,md:5},
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${bgHand})`, 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      zIndex: -1,
      opacity:1,
    },
   }}>
    {/* <Typography sx={{textAlign:'center',fontWeight:700,py:2}} variant='h4'>{Array.from({length:3}).map(()=>(
          <Typography component='img' height={12} src={star} />
         ))} {t('importantNoticeForContestants')} {Array.from({length:3}).map(()=>(
          <Typography component='img' height={12} src={star} />
         ))}</Typography> */}
    <Box sx={{display:'flex',color:'white'}}>
        <Box width={'50%'} sx={{'@media (max-width:768px)':{display:'none'}}}></Box>
        <Box sx={{width:{xs:'100%',md:'50%'}}}>
        <Typography sx={{fontWeight:700,pb:2}} variant='h6'>{t('divyangBhavanFoundation')} {Array.from({length:3}).map(()=>(
          <Typography component='img' height={10} sx={{objectFit:'cover',ml:0.5}} src={star} />
         ))} </Typography>  
        <Typography sx={{textAlign:'center',fontWeight:700,pb:2}} variant='h4'>{t('supportInspiration')} </Typography>

            <Box sx={{display:'flex',alignItems:'center',flexDirection:'column',paddingX:10,gap:5,mt:5}}>
            <Typography variant='body1' sx={{fontSize:pxToRem(18),textAlign:'center'}}>
                {t('supportEmpowerment')}
            </Typography>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1}}>
            <Typography variant='h4' sx={{textAlign:'center',fontFamily:'Kalam'}}>
                {t('watchVideo')}
            </Typography>
            <IconButton LinkComponent={Link} to='https://youtu.be/jNLI5v1BRfc' target="_blank" sx={{backgroundColor:'white',p:0,':hover':{backgroundColor:'white'}}}>
                <PlayCircleFilled sx={{color:'#800080',fontSize:100,m:0}}/>
            </IconButton>
            </Box>
            </Box>
        </Box>
    </Box>
   </Box>
  )
}

export default Support
