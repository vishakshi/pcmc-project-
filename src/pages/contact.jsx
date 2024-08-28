import React, { useState } from 'react'
import { Container, TextField, Button, Typography, Paper, Box, List, ListItem, ListItemIcon, ListItemText, CircularProgress } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import Navbar from '../components/navbar';
import { useFormik } from 'formik';
import { enquirySchema } from '../utiils/validationSchema';
import CustomAlert from '../components/customAlert';
import ApiManager from '../apiManager/apiManager';


function Contact() {
  const [isLoading,setIsLoading] = useState({feedback:false,message:false});
  const [alertData,setAlertData] = useState({severity:'',message:''});
  const [feedback,setFeedback] = useState("")
    const handleSubmit = async (values) => {
        console.log(values);
        setIsLoading({...isLoading,message:true});
        try {
          const response = await ApiManager.createFeedback(values);
          console.log(response)
          if(response.data?.status){
            setAlertData({severity:'success',message:response?.data?.message});
          }else{
            setAlertData({severity:'error',message:response?.data?.message});
          }
        } catch (error) {
          
        }finally{
          setIsLoading({...isLoading,message:false});
        }
    }
    const handleFeedbackSubmit = async () => {
      if(!feedback.trim()){
        setAlertData({severity:'error',message:'Message is required'});
        return;
      }
      try {
        const response = await ApiManager.createFeedback({message:feedback});
        console.log(response)
        if(response.data?.status){
          setAlertData({severity:'success',message:response?.data?.message});
          setFeedback("")
        }else{
          setAlertData({severity:'error',message:response?.data?.message});
        }
      } catch (error) {
        
      }finally{
        setIsLoading({...isLoading,message:false});
      }
    }
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            message:''
        },
        onSubmit:handleSubmit,
        validationSchema:enquirySchema
    })
    const getErrorProps = (field) => {
        return {
          helperText: formik.touched[field] && formik.errors[field],
          error: formik.touched[field] && Boolean(formik.errors[field])
        };
      };
  return (
    <Container maxWidth="md" sx={{ mt: 5,pb:10,pt:5 }}>
      {alertData.message && <CustomAlert position='center' severity={alertData.severity} onOpen={Boolean(alertData.message)} onClose={()=>setAlertData({...alertData,message:null})} message={alertData.message}/>}
      <Typography variant="h4" component="h1" sx={{color:'purple',fontWeight:'600'}} gutterBottom>
        Contact Us
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          mt: 4,
        }}
      >
        <Paper elevation={3} sx={{ p: 3, flex: 2 }}>
          <Typography variant="h6" component="h2" gutterBottom>
          Enquiry Form
          </Typography>
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              {...formik.getFieldProps("name")} {...getErrorProps("name")}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              {...formik.getFieldProps("email")} {...getErrorProps("email")}
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              {...formik.getFieldProps("message")} {...getErrorProps("message")}
              rows={4}
            />
            <Box mt={2}>
              <Button variant="contained" type='submit' disabled={isLoading.message} sx={{ color:'white',backgroundColor:'#800080','&:hover':{backgroundColor:'#9b009b'}, }} fullWidth>
              {isLoading.message && <CircularProgress size={24} sx={{position:'absolute',top:'20%',left:'45%'}}/>}
                Send Message
              </Button>
            </Box>
          </form>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, flex: 1 }}>
        <Typography variant="h6" component="h2" gutterBottom>
            Contact Information
          </Typography>
        <List>
            <ListItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="In front of Shraddha Heritage, Behind City One Mall,
               Morwadi, Pimpri Colony, Pimpri-Chinchwad, Maharashtra - 411018" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary=" +919604810938, +918007182510" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary=" divyang.bhavan@pcmcindia.gov.in" />
            </ListItem>
          </List>
         
          <Typography variant="h6" component="h2" gutterBottom>
            Please Give Us Your Feedback !!
          </Typography>
          <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              value={feedback}
              onChange={(e)=>setFeedback(e.target.value)}
              rows={4}
            />
            <Box mt={2}>
              <Button variant="contained" onClick={handleFeedbackSubmit} disabled={isLoading.feedback} sx={{ color:'white',backgroundColor:'#800080','&:hover':{backgroundColor:'#9b009b'},position:'relative' }} >
              {isLoading.feedback && <CircularProgress size={24} sx={{position:'absolute',top:'20%',left:'40%'}}/>}
                Send Feedback
              </Button>
            </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Contact;
