import React,{useState} from 'react'
import { Box,Typography,TextField,InputAdornment,Button,CircularProgress, InputLabel } from '@mui/material'
import { Lock,Mail } from '@mui/icons-material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CustomAlert from '../../components/customAlert'
import ApiManager from '../../apiManager/apiManager'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik';
import { resetPasswordSchema } from '../../utiils/validationSchema'
import { getTokenValue } from '../../utiils/utility'

const ResetPassword = () => {
    // const [formData,setFormData] = useState({userName:"",password:""})
    const [isLoading,setIsLoading] = useState(false);
    const [alertData,setAlertData] = useState({severity:'',message:''});
    const navigate = useNavigate();
    const {token} = useParams(); 
    const {t} = useTranslation();

    const handleSubmit = async (values) => {
      setIsLoading(true);
      try {
      const tokenValue = getTokenValue(token)
      const response = await ApiManager.changePassword(tokenValue?._id,{password:values.password,token:token})
      if(response.data?.status){
        setAlertData({severity:'success',message:response?.data?.message});
        setTimeout(()=>navigate('/user-login',{replace:true}),3000)
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
          password:'',
          passwordConfirm:''
          },
      onSubmit:handleSubmit,
      validationSchema:resetPasswordSchema
  })

  const getErrorProps = (field) => {
    return {
      helperText: formik.touched[field] && formik.errors[field],
      error: formik.touched[field] && Boolean(formik.errors[field])
    };
  };

  return (
    <Box
    sx={{
      backgroundColor: "#ECECEC",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    {alertData.message && <CustomAlert severity={alertData.severity} onOpen={Boolean(alertData.message)} onClose={()=>setAlertData({...alertData,message:null})} message={alertData.message}/>}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems:'center',
        backgroundColor: "white",
        gap: 5,
        padding:5,
        borderRadius: 5,
      }}
    >
      <Box>
        <form autoComplete='off' onSubmit={formik.handleSubmit}>
        <Box display="flex" alignItems="center" justifyContent='center'>
          {/* <img src={'logo'} style={{ width: "2rem" }} /> */}
          <Typography variant="h4" pb={2} fontWeight='700' >
            {t('resetPassword')}
          </Typography>
        </Box>
        <InputLabel>
          {t('enterPassword')}
        </InputLabel>
        <TextField
          sx={{ display: "block", mb: 2 }}
          fullWidth
          size="small"
          placeholder={t('enterPassword')}
          {...formik.getFieldProps("password")} {...getErrorProps("password")}
        />
        <InputLabel>
          {t('reEnterPassword')}
        </InputLabel>
        <TextField
          sx={{ display: "block", mb: 2 }}
          fullWidth
          size="small"
          placeholder={t('confirmPassword')}
          {...formik.getFieldProps("passwordConfirm")} {...getErrorProps("passwordConfirm")}
        />
        <Button variant="contained" type='submit' disabled={isLoading} fullWidth={true} >
          {isLoading ? <CircularProgress size={24} /> : t("reset")}
        </Button>
        </form>
      </Box>
    </Box>
  </Box>
  )
}

export default ResetPassword
