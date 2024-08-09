import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { getFormatDate } from '../utiils/dateFormatter';
import { CircularProgress, Grid,IconButton,InputLabel,MenuItem,Select,TextField } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import ApiManager from '../apiManager/apiManager';
import CustomAlert from './customAlert';
import { getDecodedToken } from "../utiils/utility";
import { useFormik } from 'formik';
import { addContestSchema } from '../utiils/validationSchema';

export default function CompetitionCard({data,recall}) {
    const [image,setImage] = React.useState("")
    const [type,setType] = React.useState("");
    const [open,setOpen] = React.useState(false);
    const [alertData,setAlertData] = React.useState({severity:'',message:''});
    const [isSubmitting,setIsSubmitting] = React.useState(false);
    const [error,setError] = React.useState()

    const userData = React.useMemo(()=>getDecodedToken(),[]) 
    
    console.log(data,userData,data?.participants.includes(userData?._id))

    const handleSubmit = async () => {
      const SUPPORTED_FORMATS = ['image/png', 'image/jpg', 'image/jpeg'];
      if(!image){
        setError('Field is required')
        return
      }else if(!SUPPORTED_FORMATS.includes(image?.type)){
        setError('Upload type must be PNG, JPEG or JPG')
        return
      }
      console.log(image)
        const formData = new FormData();
        formData.append('image',image)
        formData.append('contest',data?._id);
        // try {
        //     setIsSubmitting(true);
        //     const response = await ApiManager.addInCompetetion(formData);
        //     console.log(response)
        //     if(response.data?.status){
        //       setAlertData({severity:'success',message:response?.data?.message});
        //     recall();
        //     }else{
        //       setAlertData({severity:'error',message:response?.data?.message});
        //     }
        // } catch (error) {
        //     console.log(error)
        // }finally{
        //   setIsSubmitting(false)
        //   setOpen(false)
        // }
    }

    const formik = useFormik({
      initialValues:{
          image:'',
          contest:'',
          type:'',
      },
      onSubmit:handleSubmit,
      validationSchema:addContestSchema
  })

  const getErrorProps = (field) => {
    return {
      helperText: formik.touched[field] && formik.errors[field],
      error: formik.touched[field] && Boolean(formik.errors[field])
    };
  };

  return (
    <>
    {alertData.message && <CustomAlert severity={alertData.severity} onOpen={Boolean(alertData.message)} onClose={()=>setAlertData({...alertData,message:null})} message={alertData.message}/>}
    <Grid item md={6}>
    <Card sx={{ display: 'flex'}}>
          <CardMedia
        component="img"
        sx={{ height:200,width:150 }}
        image={data?.icon}
        alt="Image"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column',width:'100%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {data?.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Start Date: <span style={{fontWeight:700}}>{getFormatDate(data?.startDate)}</span>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            End Date: <span style={{fontWeight:700}}>{getFormatDate(data?.endDate)}</span>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Prize Money: <span style={{fontWeight:700}}> ₹{data?.prizeValue}</span>
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'flex-end', pl: 1, pb: 1,pr:1 }}>
         <Button color='info' disabled={data?.participants.includes(userData?._id)} onClick={()=>setOpen(true)} sx={{px:5}} variant='contained'>Participate</Button>
        </Box>
      </Box>
    </Card>
    </Grid>
    <Dialog
     maxWidth="xs"
     fullWidth
      open={open}
      onClose={()=>setOpen(false)}
    >
      <DialogTitle>
        <>Add Submission</>
        <IconButton onClick={()=>setOpen(false)}><CloseOutlined/></IconButton>
      </DialogTitle>
      <form autoComplete='off' > 
      <DialogContent>
        <Grid container spacing={1} >
          <Grid item sm={12} md={12}>
          <InputLabel>Participation Type</InputLabel>
          <Select
            
            required
            fullWidth
            size='small'
            displayEmpty
            onChange={(event)=>formik.setFieldValue("type",event.target.value)}
          >
          <MenuItem value="" disabled={true}><em>Select participation type</em></MenuItem>  
          <MenuItem value="logo">Logo</MenuItem>
          <MenuItem value="tagline">Tagline</MenuItem>
          </Select>
          </Grid>
          <Grid item sm={12} md={12}>
          <InputLabel>Icon</InputLabel>
          <TextField inputProps={{ accept: "image/png, image/jpeg" }} {...getErrorProps("icon")} fullWidth type="file" size='small' onChange={(event)=>formik.setFieldValue("image",event.currentTarget.files[0])} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='info' onClick={handleSubmit} disabled={isSubmitting} >{isSubmitting ? <CircularProgress size={22}/> : "Submit"}</Button>
      </DialogActions>
      </form>
    </Dialog>
    </>
  );
}