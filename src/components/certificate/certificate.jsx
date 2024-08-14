import React, { useRef } from 'react'
import './certificate.css'
import pcmc from '../../assets/shivaji-logo.png'
import { Dialog,Box,DialogTitle,IconButton,DialogContent,DialogActions,Button } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';

const options = {
    // default is `save`
    method: 'open',
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.HIGH,
    page: {
       // margin is in MM, default is Margin.NONE = 0
       margin: Margin.SMALL,
       // default is 'A4'
       format: 'A4',
       orientation: 'landscape',
    },
    canvas: {
       // default is 'image/jpeg' for better size performance
       mimeType: 'image/png',
       qualityRatio: 1
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break, 
    // so use with caution.
    overrides: {
       // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
       pdf: {
          compress: true
       },
       // see https://html2canvas.hertzen.com/configuration for more options
       canvas: {
          useCORS: true
       }
    },
 };

function Certificate({onOpen,onClose}) {
    const targetRef = useRef();
  return (
    <Dialog
    maxWidth="lg"
    fullWidth
    scroll="body"
     open={onOpen}
     onClose={onClose}
   >
     <DialogTitle>
       <>Download Certificate</>
       <IconButton onClick={onClose}><CloseOutlined/></IconButton>
     </DialogTitle>
     <DialogContent>
    <Box pt={5}>
    
    <div  ref={targetRef} className='continer'>
      <div className='top'>
      <div className='logo-left'>
        <p style={{fontWeight:"800",textAlign:"center"}}>PCMC Divyang Bhavan Foundation</p>
      </div>
      <div className='logo-right'>
        <img src={pcmc} style={{height:'80px',width:'80px'}} />
      </div>
      </div>
      <div className='title'>
        <p>Certificate</p>
        <p style={{fontFamily:"monospace",fontSize:"30px",color:"black"}}>of appriciation</p>
      </div>
      <div className='midtext'>
        <p>This certificate is presented to</p>
      </div>
     
      <div className='name'>
        <p style={{fontSize:"40px",fontStyle:"italic"}}>  Karan Dhole</p>
        <p>_____________________________________________________________________</p>
      </div>
      <div className='content'>
        <p>For participating successfully in "the LOGO Design competition" by <br/> Divyang Bhavan Foundation on 15th August 2024, 
            and sharing new invention of art with us,<br/> we appreciate your talent and honor your art</p>
      </div>
      <div className='footer'>
        <div className='date'>
            <p> 15th August 2024</p>
            <p>____________________</p>
            <p>DATE</p>
        </div>
        <div className='sign'>
        <p>___________________</p>
        <p>SIGNATURE</p>
        </div>
        
      </div>
    </div>
    </Box>
    </DialogContent>
    <DialogActions sx={{borderTop:'1px solid #EFE7EB'}} >
       <Button variant='contained' color='info' type='submit' onClick={() => generatePDF(targetRef, {filename: 'page.pdf',page:{orientation:'landscape',margin:Margin.SMALL}})}>Download Certificate</Button>
     </DialogActions>
    </Dialog>
  );
}

export default Certificate;
