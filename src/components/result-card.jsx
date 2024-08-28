import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import certificate from '../assets/sample-certificate.jpg'
import { getFormatDate, isTwoDaysEarlier } from '../utiils/dateFormatter';
import Certificate from './certificate/certificate';
import ConfirmDialog from './confirmDialog';
export default function ResultCard({data}) {
  const [open,setOpen] = React.useState(false);
  const [winnerOpen,setWinnerOpen] = React.useState(data?.position && !localStorage.getItem(data?._id) ? true :false)
    console.log("Card Data",data);
    const handleWinnerClose = () => {
      localStorage.setItem(data?._id,true);
      setWinnerOpen(false);
    }
    const getPosition = (type) => {
        switch(type){
          case 1:
            return "You Won 1st Position for Logo"
          case 2:
            return "You Won 2nd Position for Tagline"
          case 3:
            return "You Won 3rd Position for Tagline"
          default:
            return ""
        }
      }

  return (
    <>
    <Grid md={3.9} xs={12}>
    <Card  sx={{minHeight:340}} >
      {data?.type === "logo" &&  <CardMedia
        sx={{ height: 140 }}
        image={data?.image}
        title="green iguana"
      />}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.contest?.name || ""}
        </Typography>
        {(data?.type === "marathiTagline" || data?.type === "englishTagline") &&  (<Typography gutterBottom variant="h6" component="div">
          <span style={{ color: "grey" }}>Uploaded Tagline: </span>{data?.tagline || ""}
        </Typography>)}
        <Typography variant="body1" fontWeight={700} color="text.secondary">
          <span style={{ color: "grey" }}>Duration: </span>{getFormatDate(data?.contest?.startDate) || " - "} to {getFormatDate(data?.contest?.endDate) || ""}
        </Typography>
        {/* <Typography variant="body1" fontWeight={700} color="text.secondary">
          <span style={{ color: "grey" }}>Remarks: </span>{data?.result ? data?.result : data?.position ? "Thank you for the participation" : isTwoDaysEarlier(data?.contest?.endDate) ? "Thank you for the participation" : "Waiting for the result" }
        </Typography> */}
        <Typography variant="body1" fontWeight={700} color="text.secondary">
          <span style={{ color: "grey" }}>Remarks: </span>{data?.result ? data?.result : data?.position ? "Thank you for the participation" : data?.contest?.positionOne ? "Thank you for the participation" : "Waiting for the result" }
        </Typography>
        <Typography variant="body1" fontWeight={700} color="text.secondary">
          <span style={{ color: "grey" }}>Position: </span>{data?.position ? getPosition(data?.position) : data?.result ? "Thank you for the participation" : data?.contest?.positionOne ? "Thank you for the participation" : "Waiting for the result" }
        </Typography>
      </CardContent>
      {/* {(isTwoDaysEarlier(data?.contest?.endDate) || data?.position || data?.result) && <CardActions sx={{justifyContent:'flex-end'}}>
        <a href={certificate} download='certificate.jpg'>
        <Button size="small" variant='contained'  color='info'>Download Certificate</Button>
        </a>
      </CardActions>} */}
      {data?.contest?.positionOne && <CardActions sx={{justifyContent:'flex-end'}}>
        {/* <a href={certificate} download='certificate.jpg'> */}
        <Button onClick={()=>setOpen(true)} size="small" variant='contained'  color='info'>Download Certificate PDF</Button>
        {/* </a> */}
      </CardActions>}
    </Card>
    <Certificate contestName={data?.contest?.name || ""} onOpen={open} onClose={()=>setOpen(false)}/>
    </Grid>
    <ConfirmDialog onOpen={winnerOpen} onClose={handleWinnerClose} message={`Congratulation! For winning ${data?.contest?.name || "Competition"}`} title='Notification 🎉' onConfirm={handleWinnerClose} />
    </>
  );
}