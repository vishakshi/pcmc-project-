import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getFormatDate, todayDate } from '../utiils/dateFormatter';
import { CircularProgress, Grid,IconButton,InputLabel,MenuItem,Select,TextField } from '@mui/material';
import CustomAlert from './customAlert';
import { getDecodedToken } from "../utiils/utility";
import Participate from './participate';
import ConfirmDialog from './confirmDialog';

export default function CompetitionCard({data,recall}) {
    const [open,setOpen] = React.useState(false);
    const [alertData,setAlertData] = React.useState({severity:'',message:''});
    const [successDialog,setSuccessDialog] = React.useState(false);
    const [successData,setSuccessData] = React.useState("Hey, Mohd Saqlain You have successfully participated in the competetion")

    const userData = React.useMemo(()=>getDecodedToken(),[]) 

    const handleConfirmation = (data) => {
      const name = data?.firstName || "" + " " + data?.lastName || "";
      const message = `Hey, ${name}! You have successfully participated in the ${data?.name || ""} competetion on ${todayDate()}`;
      setSuccessData(message);
      setSuccessDialog(true);
      console.log(data)
    }

    const getCompetetionType = (type) => {
     switch(type){
      case "logo":
        return "Logo";
      case "englishTagline":
        return "English tagline"
      case "marathiTagline":
        return "Marathi tagline"
      default:
        return "NA" 
     } 
    }

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
            Competetion Type: <span style={{fontWeight:700,textTransform:'capitalize'}}> {getCompetetionType(data?.contestType)}</span>
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
   {open && <Participate onOpen={open} handleConfirmation={handleConfirmation} onClose={()=>setOpen(false)} setAlertData={setAlertData} contestId={data?._id} recall={recall} competetionType={data?.contestType || "logo"}/>}
   <ConfirmDialog onOpen={successDialog} onClose={()=>setSuccessDialog(false)} onConfirm={()=>setSuccessDialog(false)} title="Success" message={successData}/>
    </>
  );
}