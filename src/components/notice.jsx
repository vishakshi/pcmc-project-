import { Box,Typography,Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import bg from '../assets/contest.jpg'
const Notice = () => {
    const {t} = useTranslation();
  return (
   <Box sx={{backgroundColor:'#fff',py:3}}>
    <Typography sx={{textAlign:'center',fontWeight:700}} variant='h4'>{t('importantNoticeForContestants')}</Typography>
    <Box sx={{display:'flex'}}>
        <Box width={'50%'}><Box sx={{borderRadius:10}} component='img' height={500} width={'100%'} src={bg} /></Box>
        <Box width={'50%'}>
            <Box sx={{display:'flex',alignItems:'center',flexDirection:'column',paddingX:10,gap:5,mt:5}}>
            <Typography variant='body1' sx={{fontSize:18,textAlign:'center'}}>
                {t('noticeForWinners')}
            </Typography>
            <Typography variant='body1' sx={{fontSize:18,textAlign:'center'}}>
                {t('freeEntryNotice')}
            </Typography>
            <Button variant='outlined' fullWidth>Register Now</Button>
            </Box>
        </Box>
    </Box>
   </Box>
  )
}

export default Notice
