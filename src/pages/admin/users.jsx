import React from 'react'
import { Box,Typography } from '@mui/material'
import Breadcrumb from '../../components/breadCrumb'

const Users = () => {
  return (
   <>
    <Box>
        <Typography variant='h4' fontWeight='700'>Users</Typography>
        <Breadcrumb currentPage="Users"/>
    </Box>
   </>
  )
}

export default Users
