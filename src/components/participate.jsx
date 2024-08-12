import React, { useState } from 'react'
import { useFormik } from 'formik';
import { addContestSchema } from '../utiils/validationSchema';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress, Grid,IconButton,InputLabel,MenuItem,Select,TextField,Typography } from '@mui/material';
import { getDecodedToken } from "../utiils/utility";
import { CloseOutlined } from '@mui/icons-material';
import ApiManager from '../apiManager/apiManager';
import ConfirmDialog from './confirmDialog';

const Participate = ({onOpen,onClose,setAlertData,recall,contestId,handleConfirmation,competetionType}) => {

    const [isSubmitting,setIsSubmitting] = useState();

    const handleSubmit = async (values) => {
        console.log(values)
            const formData = new FormData();
            formData.append('type',values?.type)
            formData.append('image',values.type === "logo" ? values.image : "")
            formData.append('logoPdf',values.logoPdf)
            formData.append('tagline',values?.type === "tagline" ? values?.tagline : "")
            formData.append('contest',contestId);
            try {
                setIsSubmitting(true);
                const response = await ApiManager.addInCompetetion(formData);
                console.log(response)
                if(response.data?.status){
                  setAlertData({severity:'success',message:response?.data?.message});
                  handleConfirmation(response.data?.data)
                recall();
                }else{
                  setAlertData({severity:'error',message:response?.data?.message});
                }
            } catch (error) {
                console.log(error)
            }finally{
              setIsSubmitting(false)
              onClose();
            }
        }
  
      const formik = useFormik({
        initialValues:{
            image:'',
            logoPdf:'',
            contest:contestId,
            type:competetionType,
            tagline:'',
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

      console.log(formik.values,formik.errors)
    
  return (
    <Dialog
    maxWidth="xs"
    fullWidth
     open={onOpen}
     onClose={onClose}
   >
     <DialogTitle>
       <>Add Submission</>
       <IconButton onClick={onClose}><CloseOutlined/></IconButton>
     </DialogTitle>
     <form autoComplete='off' onSubmit={formik.handleSubmit}> 
     <DialogContent>
       <Grid container spacing={1} >
         {/* <Grid item sm={12} md={12}>
         <InputLabel>Participation Type</InputLabel>
         <Select
           fullWidth
           size='small'
           value={formik.values.type}
           displayEmpty
           onChange={(event)=>formik.setFieldValue("type",event.target.value)}
         >
         <MenuItem value="" disabled={true}><em>Select participation type</em></MenuItem>  
         <MenuItem value="logo">Logo</MenuItem>
         <MenuItem value="tagline">Tagline</MenuItem>
         </Select>
         {formik.errors.type && formik.touched.type
                      ? <Typography variant="caption" ml={2} color='red' >{formik.errors.type}</Typography> : null}
         </Grid> */}
         {formik.values.type && <>{formik.values.type === "logo" ? <> <Grid item sm={12} md={12}>
         <InputLabel sx={{mb:0.5}}>Logo Image</InputLabel>
         <TextField inputProps={{ accept: "image/png, image/jpeg, application/pdf" }} {...getErrorProps("image")} fullWidth type="file" size='small' onChange={(event)=>formik.setFieldValue("image",event.currentTarget.files[0])} />
         </Grid>
         <Grid item sm={12} md={12}>
         <InputLabel sx={{mb:0.5}}>Logo PDF</InputLabel>
         <TextField inputProps={{ accept: "application/pdf" }} {...getErrorProps("logoPdf")} fullWidth type="file" size='small' onChange={(event)=>formik.setFieldValue("logoPdf",event.currentTarget.files[0])} />
         </Grid>
         
          </> :
         <Grid item sm={12} md={12}>
         <InputLabel>Tagline</InputLabel>
         <TextField multiline rows={3} fullWidth size='small' {...formik.getFieldProps("tagline")} {...getErrorProps("tagline")} />
         </Grid>} </>}
       </Grid>
     </DialogContent>
     <DialogActions>
       <Button variant='contained' color='info' type='submit' disabled={isSubmitting} >{isSubmitting ? <CircularProgress size={22}/> : "Submit"}</Button>
     </DialogActions>
     </form>
     
   </Dialog>
  )
}

export default Participate
