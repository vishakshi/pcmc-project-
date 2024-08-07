import React,{useState} from 'react'
import { Box,Typography,Button } from '@mui/material'
import { getFormatDate } from '../utiils/dateFormatter'
import bg from '../assets/user-login.jpg'
import ConfirmDialog from './confirmDialog'

const SubmissionCard = ({data,serialNo}) => {
  const [openConfirm,setOpenConfirm] = useState();
  const [position,setPosition] = useState("")
  const handleClick = (type) => {
    setPosition(type);
    setOpenConfirm(true);    
  }

  const handleConfirm = () => {
    console.log(position);
  }

  return (
    <>
    <Box sx={{backgroundColor:'white',mt:1,py:1,px:2,borderRadius:5,display:'flex',gap:5,flexGrow:1}}>
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
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',flexGrow:1,gap:2}}>
          <Button variant='contained' color='success' onClick={()=>handleClick("1")} >Give 1st Position</Button>
          <Button variant='contained' color='warning' onClick={()=>handleClick("2")}>Give 2nd Position</Button>
          <Button variant='contained' color='info' onClick={()=>handleClick("3")}>Give 3rd Position</Button>
        </Box>
    </Box>
    <ConfirmDialog onOpen={openConfirm} onClose={()=>setOpenConfirm(false)} message='This operation cannot be undone. Are you sure you want to proceed?' title='Confirmation' onConfirm={handleConfirm} />
    </>
  )
}

export default SubmissionCard
