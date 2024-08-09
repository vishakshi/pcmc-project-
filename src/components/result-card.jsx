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
export default function ResultCard({data}) {
    console.log("Card Data",data);
    console.log(isTwoDaysEarlier("2024-08-06T10:00:00.000Z"))
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
    <Grid md={3.9} xs={12}>
    <Card >
      <CardMedia
        sx={{ height: 140 }}
        image={data?.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.contest?.name || ""}
        </Typography>
        <Typography variant="body1" fontWeight={700} color="text.secondary">
          <span style={{ color: "grey" }}>Duration: </span>{getFormatDate(data?.contest?.startDate) || " - "} to {getFormatDate(data?.contest?.endDate) || ""}
        </Typography>
        <Typography variant="body1" fontWeight={700} color="text.secondary">
          <span style={{ color: "grey" }}>Remarks: </span>{data?.result ? data?.result : data?.position ? "Thank you for the participation" : isTwoDaysEarlier(data?.contest?.endDate) ? "Thank you for the participation" : "Waiting for the result" }
        </Typography>
        <Typography variant="body1" fontWeight={700} color="text.secondary">
          <span style={{ color: "grey" }}>Position: </span>{data?.position ? getPosition(data?.position) : data?.result ? "Thank you for the participation" : isTwoDaysEarlier(data?.contest?.endDate) ? "Thank you for the participation" : "Waiting for the result" }
        </Typography>
      </CardContent>
      {(isTwoDaysEarlier(data?.contest?.endDate) || data?.position || data?.result) && <CardActions sx={{justifyContent:'flex-end'}}>
        <a href={certificate} download='certificate.jpg'>
        <Button size="small" variant='contained'  color='info'>Download Certificate</Button>
        </a>
      </CardActions>}
    </Card>
    </Grid>
  );
}