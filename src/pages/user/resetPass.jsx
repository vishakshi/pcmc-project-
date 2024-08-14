import React,{useState} from 'react'
import { Box,Typography,TextField,InputAdornment,Button,CircularProgress, InputLabel } from '@mui/material'
import { ChevronLeftOutlined, Lock,Mail } from '@mui/icons-material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CustomAlert from '../../components/customAlert'
import ApiManager from '../../apiManager/apiManager'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik';
import { emailSchema } from '../../utiils/validationSchema'
import { getTokenValue } from '../../utiils/utility'
import Swal from 'sweetalert2'

const ResetPassRequest = () => {
    // const [formData,setFormData] = useState({userName:"",password:""})
    const [isLoading,setIsLoading] = useState(false);
    const [alertData,setAlertData] = useState({severity:'',message:''});
    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleSubmit = async (values) => {
        console.log(values)
      setIsLoading(true);
      try {
      const response = await ApiManager.sendResetLink(values);
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

    const formik = useFormik({
      initialValues:{
          email:''
          },
      onSubmit:handleSubmit,
      validationSchema:emailSchema
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
          <Typography variant="h4" pb={1} fontWeight='700' >
            {t('forgotPassword')}
          </Typography>
        </Box>
        <Box sx={{mb:2}}>
        <Typography variant="caption" color='grey'  fontWeight='700' >
            {t('noWorriesResetInstructions')}
          </Typography>
          </Box>
        <InputLabel>
          {t("email")}
        </InputLabel>
        <TextField
          sx={{ display: "block", mb: 2 }}
          fullWidth
          size="small"
          placeholder={t("enterEmail")}
          {...formik.getFieldProps("email")} {...getErrorProps("email")}
        />
        <Button variant="contained" type='submit' disabled={isLoading} fullWidth={true} >
          {isLoading ? <CircularProgress size={24} /> : t("reset")}
        </Button>
        </form>
        <Box sx={{display:'flex',justifyContent:'center',mt:2}}>
      <Button LinkComponent={Link} startIcon={<ChevronLeftOutlined/>} to='/user-login'>{t('backToLogin')}</Button>
      </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default ResetPassRequest
