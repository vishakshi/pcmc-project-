import React,{useEffect, useState} from 'react'
import { InputLabel,TextField,Box,Grid,Button,CircularProgress, InputAdornment, IconButton, Dialog,DialogContent,DialogTitle,DialogActions } from '@mui/material';
import { useFormik } from 'formik';
import ApiManager from '../apiManager/apiManager';
import { updateUserSchema, userSchema } from '../utiils/validationSchema';
import { CloseOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { getDecodedToken } from '../utiils/utility';

const UpdateUser = ({onOpen,onClose,recall,setAlertData,data}) => {
    const [isLoading,setIsLoading] = useState(false);
    

    const handleSubmit = async (values) => {
        setIsLoading(true)
        console.log(values);
        try {
            const userData = getDecodedToken();
          const response = await ApiManager.updateUserDetails(userData?._id,values);
          console.log(response)
          if(response.data?.status){
            console.log(response.data);
            setAlertData({severity:'success',message:response?.data?.message});
            recall();
          }else{
            setAlertData({severity:'error',message:response?.data?.message});
          }
        } catch (error) {
          
        }finally{
            setIsLoading(false);
            onClose();
        }
    }

    const formik = useFormik({
        initialValues:{
          firstName:data?.firstName || "",
        lastName:data?.lastName || "",
        companyName:data?.companyName || "",
        mobileNo:data?.mobileNo || "",
        countryCode:data?.countryCode || "",
        userType:data?.userType || "",
        },
        onSubmit:handleSubmit,
        validationSchema:updateUserSchema
    })

    
    useEffect(()=>{
      formik.setValues({
        firstName:data?.firstName || "",
        lastName:data?.lastName || "",
        companyName:data?.companyName || "",
        mobileNo:data?.mobileNo || "",
        countryCode:data?.countryCode || "",
        userType:data?.userType || "",
      })
    },[])

    const getErrorProps = (field) => {
        return {
          helperText: formik.touched[field] && formik.errors[field],
          error: formik.touched[field] && Boolean(formik.errors[field])
        };
      };
      console.log(formik.errors)
  return (
    <Dialog
    maxWidth="sm"
    fullWidth
     open={onOpen}
     onClose={onClose}
   >
     <DialogTitle>
       <>Update Details</>
       <IconButton onClick={onClose}><CloseOutlined/></IconButton>
     </DialogTitle>
    <Box>
    <form autoComplete='off' onSubmit={formik.handleSubmit}> 
    <DialogContent>
    <Grid container spacing={1} >

          {data?.userType === "company" ? <Grid item sm={12} xs={12}>
          <InputLabel>Company Name</InputLabel>
          <TextField fullWidth size='small' {...formik.getFieldProps("companyName")} {...getErrorProps("companyName")} />
          </Grid> :<> <Grid item sm={6} xs={12}>
          <InputLabel>First Name</InputLabel>
          <TextField fullWidth size='small' {...formik.getFieldProps("firstName")} {...getErrorProps("firstName")} />
          </Grid>
          <Grid item sm={6} xs={12}>
          <InputLabel>Last Name</InputLabel>
          <TextField fullWidth size='small' {...formik.getFieldProps("lastName")} {...getErrorProps("lastName")} />
          </Grid></>}
          <Grid item sm={6} xs={12}>
          <InputLabel>Country Code</InputLabel>
          <TextField fullWidth size='small' InputProps={{readOnly:true}} {...formik.getFieldProps("countryCode")} {...getErrorProps("countryCode")} />
          </Grid>
          <Grid item sm={6} xs={12}>
          <InputLabel>Phone Number</InputLabel>
          <TextField fullWidth size='small' {...formik.getFieldProps("mobileNo")} {...getErrorProps("mobileNo")} />
          </Grid>
        </Grid>
    </DialogContent>
    <DialogActions>
    <Button variant="contained" type='submit' sx={{mt:2}} disabled={isLoading} >
      {isLoading ? <CircularProgress size={24} /> : "Update"}
    </Button>
      </DialogActions>
    </form>
    </Box>
    </Dialog>
  )
}

export default UpdateUser
