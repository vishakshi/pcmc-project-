import { Box,Typography,Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import bg from '../../assets/d11.jpg'
import { LoginOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import star from '../../assets/star.png'
import { pxToRem } from '../../utiils/utility'

const Notice = () => {
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
   <Box sx={{backgroundColor:'#fff',pb:5,pt:0}}>
    <Typography sx={{textAlign:'center',fontWeight:700,py:2}} variant='h4'>{Array.from({length:3}).map(()=>(
          <Typography component='img' height={12} src={star} />
         ))} {t('importantNoticeForContestants')} {Array.from({length:3}).map(()=>(
          <Typography component='img' height={12} src={star} />
         ))}</Typography>
    <Box sx={{display:'flex'}}>
        <Box width={'50%'} sx={{'@media (max-width:768px)':{display:'none'}}}><Box sx={{borderRadius:10,objectFit:'cover'}} component='img' height={500} width={'100%'} src={bg} /></Box>
        <Box sx={{width:{xs:'100%',md:'50%'}}}>
            <Box sx={{display:'flex',alignItems:'center',flexDirection:'column',paddingX:10,gap:5,mt:5}}>
            <Typography variant='body1' sx={{fontSize:pxToRem(18),textAlign:'center'}}>
                {t('noticeForWinners')}
            </Typography>
            <Typography variant='body1' sx={{fontSize:pxToRem(18),textAlign:'center'}}>
                {t('freeEntryNotice')}
            </Typography>
            <Button variant='contained' onClick={handleSignIn} size="large" sx={{color:'white',backgroundColor:'#800080','&:hover':{backgroundColor:'#9b009b'}}} endIcon={<LoginOutlined/>}>{t('registerNow')}</Button>
            </Box>
        </Box>
    </Box>
   </Box>
  )
}

export default Notice
