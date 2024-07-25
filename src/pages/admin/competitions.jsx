import React from 'react'
import { Box,Typography,Button } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import Breadcrumb from '../../components/breadCrumb'

const Competition = () => {
  return (
   <>
    <Box>
        <Typography variant='h4' fontWeight='700'>Competition</Typography>
        <Breadcrumb currentPage="Competition"/>
        <Box display='flex' justifyContent='flex-end' alignItems='center'>
        <Button sx={{float:'right'}} onClick={()=>setAddOpen(true)} variant='contained' endIcon={<AddOutlined />}>Add Competition</Button >
        </Box>
    </Box>
   </>
  )
}

export default Competition
