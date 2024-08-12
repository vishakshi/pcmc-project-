import React,{useState} from 'react'
import { Box,Typography,Button,Grid, TextField, InputLabel } from '@mui/material'
import { getFormatDate } from '../utiils/dateFormatter'
import bg from '../assets/user-login.jpg'
import ConfirmDialog from './confirmDialog'
import DialogLoader from './DialogLoader'
import ApiManager from '../apiManager/apiManager'
import DownloadPdf from './DownloadPdf'

const SubmissionCard = ({data,serialNo,recall,setAlertData,competetionData}) => {
  const [openConfirm,setOpenConfirm] = useState(false);
  const [position,setPosition] = useState("")
  const [isLoading,setIsLoading] = useState(false)
  const [resultData,setResultData] = useState(data?.result || "");
  const handleClick = (type) => {
    setPosition(type);
    setOpenConfirm(true);    
  }

  const handleConfirm = async () => {
    console.log(position);
    setIsLoading(true);
    try {
      const response = await ApiManager.updateWinner(data?._id,{position:position})
      if(response.data?.status){
        setAlertData({severity:'success',message:response?.data?.message});
      recall();
      }else{
        setAlertData({severity:'error',message:response?.data?.message});
      }
    } catch (error) {
      
    }finally{
      setIsLoading(false);
      setOpenConfirm(false);
    }
  }

  const handleUpdate = async () => {
    setIsLoading(true);
    console.log(resultData);
    try {
      const response = await ApiManager.editSubmission(data?._id,{result:resultData})
      if(response.data?.status){
        setAlertData({severity:'success',message:response?.data?.message});
      }else{
        setAlertData({severity:'error',message:response?.data?.message});
      }
    } catch (error) {
      
    }finally{
      setIsLoading(false);
    }
  }

  const getPosition = (type) => {
    switch(type){
      case 1:
        return "1st Position for Logo Winner"
      case 2:
        return "2nd Position for Tagline Winner"
      case 3:
        return "3rd Position for Tagline Winner"
      default:
        return ""
    }
  }

  return (
    <>
    <DialogLoader isLoading={isLoading}/>
    <Box sx={{backgroundColor:'white',mt:1,py:3,px:5,borderRadius:5,display:'flex',gap:5}}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={4}>
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
        </Grid>
        <Grid xs={12} sm={6} md={4}>
        {data?.type !== "tagline" ? <Box>
          <Box display={'flex'} sx={{flexWrap:'wrap'}} columnGap={5} rowGap={2} >
            <Typography sx={{ color: "grey" }}>
              Uploaded Image:
            </Typography>
            <Box sx={{border:'5px dashed aqua',p:1,borderRadius:5}}>
            <Box component='img' width={250} src={data?.image} />
            </Box>
            {data?.logoPdf && <><Typography sx={{ color: "grey" }}>
              Uploaded PDF:
            </Typography>
            <DownloadPdf key={data?.logoPdf}/>
            </>}
          </Box>
        </Box> : <Box>
          <Box display={'flex'} sx={{flexWrap:'wrap'}} columnGap={5} >
            <Typography sx={{ color: "grey" }}>
              Uploaded Tagline:
            </Typography>
            <Box sx={{border:'5px dashed aqua',p:1,borderRadius:5}}>
            <Typography gutterBottom variant="h5" component="div">
          {data?.tagline}
        </Typography>
            </Box>
          </Box>
        </Box>}
        </Grid>
        <Grid xs={12} sm={6} md={4}>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',flexGrow:1,gap:2,mt:2}}>
          <Button variant='contained' disabled={data?.position || competetionData?.positionOne} color='success' onClick={()=>handleClick(1)} >Give 1st Position</Button>
          {/* <Button variant='contained' disabled={data?.position || competetionData?.positionTwo} color='warning' onClick={()=>handleClick(2)}>Give 2nd Tagline Position</Button>
          <Button variant='contained' disabled={data?.position || competetionData?.positionThree} color='info' onClick={()=>handleClick(3)}>Give 3rd Tagline Position</Button> */}
          <Typography variant="body2">{getPosition(data?.position)}</Typography>
          <Box width={'100%'}>
          <InputLabel>Remark</InputLabel>
          <TextField multiline placeholder='Describe details...' value={resultData} onChange={(e)=>setResultData(e.target.value)} inputProps={{style:{padding:0}}} fullWidth rows={3} />
          </Box>
          <Button variant='contained' color='info' onClick={handleUpdate} size="small" sx={{alignSelf:'flex-end'}} >Update Result</Button>
        </Box>
        </Grid>
        </Grid>
    </Box>
    <ConfirmDialog onOpen={openConfirm} onClose={()=>setOpenConfirm(false)} message='This operation cannot be undone. Are you sure you want to proceed?' title='Confirmation' onConfirm={handleConfirm} />
    </>
  )
}

export default SubmissionCard
