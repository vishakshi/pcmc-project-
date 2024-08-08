import React,{useState} from 'react'
import { InputLabel,TextField,Box,Grid,Button,CircularProgress, InputAdornment, IconButton, Typography } from '@mui/material';
import { useFormik } from 'formik';
import ApiManager from '../apiManager/apiManager';
import { userSchema } from '../utiils/validationSchema';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import CustomAlert from './customAlert';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { pxToRem } from '../utiils/utility';

const SignUpForm = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [passwordVisibility,setPasswordVisibility] = useState(false);
    const [alertData,setAlertData] = useState({severity:'',message:''});
    const navigate = useNavigate();
    const {t} = useTranslation()

    const handleSubmit = async (values) => {
        setIsLoading(true)
        console.log(values);
        try {
          const response = await ApiManager.createUser(values);
          console.log(response)
          if(response.data?.status){
            console.log(response.data);
            const token = response?.data?.token;
            sessionStorage.setItem("@authToken", token);
            sessionStorage.setItem("@userType", "user");
            navigate("/dashboard");
            window.location.reload();
          }else{
            setAlertData({severity:'error',message:response?.data?.message});
          }
        } catch (error) {
          
        }finally{
            setIsLoading(false);
        }
    }

    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
            password:''
        },
        onSubmit:handleSubmit,
        validationSchema:userSchema
    })

    const getErrorProps = (field) => {
        return {
          helperText: formik.touched[field] && formik.errors[field],
          error: formik.touched[field] && Boolean(formik.errors[field])
        };
      };
  return (
    <Box>
        {alertData.message && <CustomAlert severity={alertData.severity} onOpen={Boolean(alertData.message)} onClose={()=>setAlertData({...alertData,message:null})} message={alertData.message}/>}
        <Typography variant="h4" fontWeight='700' >
            {t("welcome")}
          </Typography>
        <Typography variant="h5" fontSize={pxToRem(22)}>
          {t("enterYourDetailsToSignup")}
        </Typography>
    <form autoComplete='off' onSubmit={formik.handleSubmit}> 
    <Grid container spacing={1} mt={2} >
          <Grid item sm={6} xs={12}>
          <InputLabel>{t('firstName')}</InputLabel>
          <TextField fullWidth size='small' {...formik.getFieldProps("firstName")} {...getErrorProps("firstName")} />
          </Grid>
          <Grid item sm={6} xs={12}>
          <InputLabel>{t('lastName')}</InputLabel>
          <TextField fullWidth size='small' {...formik.getFieldProps("lastName")} {...getErrorProps("lastName")} />
          </Grid>
          <Grid item sm={12} xs={12}>
          <InputLabel>{t('email')}</InputLabel>
          <TextField fullWidth size='small' {...formik.getFieldProps("email")} {...getErrorProps("email")} />
          </Grid>
          <Grid item sm={12} xs={12}>
          <InputLabel>{t('password')}</InputLabel>
          <TextField fullWidth type={passwordVisibility ? 'text' : 'password'} size='small' InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={()=>setPasswordVisibility(!passwordVisibility)}>
                {passwordVisibility ? <VisibilityOutlined /> : <VisibilityOffOutlined/>}
                </IconButton>
              </InputAdornment>
            ),
          }} {...formik.getFieldProps("password")} {...getErrorProps("password")} />
          </Grid>
        </Grid>
        <Button variant="contained" type='submit' sx={{mt:2}} disabled={isLoading} fullWidth={true} >
      {isLoading ? <CircularProgress size={24} /> : t('signUp')}
    </Button>
    </form>
    </Box>
  )
}

export default SignUpForm
