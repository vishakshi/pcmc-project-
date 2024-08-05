import React from 'react'
import { Box,Typography } from '@mui/material'
import { getFormatDate } from '../utiils/dateFormatter'
import bg from '../assets/user-login.jpg'

const SubmissionCard = ({data,serialNo}) => {
  return (
    <Box sx={{backgroundColor:'white',mt:1,py:1,px:2,borderRadius:5,display:'flex',gap:5}}>
      <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography sx={{ color: "grey" }}>
              Serial No:
            </Typography>
            <Typography sx={{ fontWeight: 700 }}>
              #{serialNo}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography sx={{ color: "grey" }}>
              Name:
            </Typography>
            <Typography sx={{ fontWeight: 700 }}>
              {data?.user?.firstName || "" + data?.user?.lastName || ""}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography sx={{ color: "grey" }}>
              Email:
            </Typography>
            <Typography sx={{ fontWeight: 700 }}>
              {data?.user?.email}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography sx={{ color: "grey" }}>
              Submission Date:
            </Typography>
            <Typography sx={{ fontWeight: 700 }}>
              {getFormatDate(data?.createdAt)}
            </Typography>
          </Box>
        </Box>
        </Box>
        <Box>
          <Box display={'flex'} gap={5} >
            <Typography sx={{ color: "grey" }}>
              Uploaded Image:
            </Typography>
            <Box sx={{border:'5px dashed aqua',p:1,borderRadius:5}}>
            <Box component='img' width={250} src={data?.image} />
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default SubmissionCard
