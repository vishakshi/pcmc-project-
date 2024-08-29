import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import pdf1 from '../../assets/Recruitment 12.09.2024.pdf'
const Jobs = () => {
    const {t} = useTranslation();
  return (
    <Box sx={{bgcolor:'white',pb:5}}>
    <Container maxWidth="md">
        <Box sx={{mx:'auto',textAlign:'center'}}><Typography sx={{bgcolor:'#AD41AE',color:'white',py:1,cursor:'pointer'}} variant='h6'><a style={{textDecoration:'none',color:'white'}} href={pdf1} download>{t('job1')}</a></Typography></Box>
    </Container>
    </Box>
  )
}

export default Jobs
