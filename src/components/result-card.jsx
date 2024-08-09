import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function ResultCard({data}) {
    console.log("Card Data",data);
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
          <span style={{ color: "grey" }}>Remarks: </span>{data?.result || "Not Declared"}
        </Typography>
        <Typography variant="body1" fontWeight={700} color="text.secondary">
          <span style={{ color: "grey" }}>Position: </span>{getPosition(data?.position) || "Not Declared"}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'flex-end'}}>
        <Button size="small" variant='contained' color='info'>Download Certificate</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}