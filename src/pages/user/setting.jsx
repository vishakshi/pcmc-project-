import React,{useState,useEffect} from 'react'
import { Box, Grid,Typography,Button, IconButton, CircularProgress } from '@mui/material'
import ApiManager from '../../apiManager/apiManager'
import { BorderColorOutlined } from '@mui/icons-material'
import UpdateUser from '../../components/update-user'
import CustomAlert from '../../components/customAlert'
import { getDecodedToken, pxToRem } from '../../utiils/utility'

const Setting = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [data,setData] = useState([]);
    const [recall,setRecall] = useState(1);
    const [editOpen,setEditOpen] = useState(false)
    const [alertData,setAlertData] = React.useState({severity:'',message:''});

    useEffect(()=>{
        (async ()=>{
          try {
            const userData = getDecodedToken();
            const response = await ApiManager.getUserDetails(userData?._id);
            if(response.data?.status){
              setData(response.data?.data);
              console.log(response.data?.data)
            }
          } catch (error) {
            console.log(error)
          }finally{
            setIsLoading(false)
          }
        })();
      },[recall])

      if(isLoading){
        return(
          <CircularProgress/>
        )
      }
    
      return (
        <Box sx={{minWidth:350,mx:'auto',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',height:'70vh'}}>
             {alertData.message && <CustomAlert severity={alertData.severity} onOpen={Boolean(alertData.message)} onClose={()=>setAlertData({...alertData,message:null})} message={alertData.message}/>}
          <Box sx={{border:'2px solid aqua',borderRadius:5,backgroundColor:'white'}} p={2}>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
            <Typography variant='h5' sx={{ fontSize: pxToRem(26), textDecoration: 'underline', mb: 2 }}>
              Personal Details
            </Typography>
            </Box>
            <Grid container spacing={2}>
              {data?.userType === "company" ?
               <Grid item md={12} sm={12}>
                <Typography variant='body1'>Company Name</Typography>
                <Typography variant='body2'>{data?.companyName}</Typography>
              </Grid> : <> 
              <Grid item md={6} sm={12}>
                <Typography variant='body1'>First Name</Typography>
                <Typography variant='body2'>{data?.firstName}</Typography>
              </Grid>
              <Grid item md={6} sm={12}>
                <Typography variant='body1'>Last Name</Typography>
                <Typography variant='body2'>{data?.lastName}</Typography>
              </Grid></>}
              <Grid item md={6} sm={12}>
                <Typography variant='body1'>Email</Typography>
                <Typography variant='body2'>{data?.email}</Typography>
              </Grid>
              <Grid item md={6} sm={12}>
                <Typography variant='body1'>Phone Number</Typography>
                <Typography variant='body2'>{data?.countryCode +"-"+ data?.mobileNo}</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:2,pt:2}}>
            <Button variant='contained' onClick={()=>setEditOpen(true)} color='info'>Edit Personal Details</Button>
            {/* <Button variant='contained' onClick={()=>setEditOpen(true)} color='info'>Send Reset/Change Password Link</Button> */}
          </Box>
          <UpdateUser data={data} onOpen={editOpen} onClose={()=>setEditOpen(false)} recall={()=>setRecall(recall + 1)} setAlertData={setAlertData} />
        </Box>
      );
}

export default Setting
