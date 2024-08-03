import React from 'react'
import { Box,Typography } from '@mui/material'
import { getFormatDate } from '../utiils/dateFormatter'
import bg from '../assets/user-login.jpg'

const SubmissionCard = ({data}) => {
  return (
    <Box sx={{backgroundColor:'white',mt:1,py:1,px:2,borderRadius:5}}>
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
        <Box>
          <Box >
            <Typography sx={{ color: "grey" }}>
              Uploaded Image:
            </Typography>
            <Box component='img' width={400} src={data?.image} />
          </Box>
        </Box>
    </Box>
  )
}

export default SubmissionCard
