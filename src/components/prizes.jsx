import { Box,Card,Typography,Grid } from '@mui/material'
import React,{useEffect, useMemo, useState} from 'react'
import { useTranslation } from 'react-i18next'
import bg from '../assets/d10.jpg'
import { getRemainingTime } from '../utiils/dateFormatter'

const PrizeCard = ({heading, amount}) => {
    const {t} = useTranslation();
    return(
        <Card sx={{p:2,m:2}} elevation={2} >
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><Typography>{t('competitionOrganized')}</Typography><Typography sx={{fontWeight:700,borderRadius:2,backgroundColor:'aqua',px:1,py:0.5}}>August 2024</Typography></Box>
            <Typography sx={{textAlign:'center',fontSize:18,my:2,fontWeight:700}} variant='body1'>{heading}</Typography>
            <Typography textAlign='center' variant='body2'>{amount}</Typography>
        </Card>
    )
}


const Prizes = () => {
    const {t} = useTranslation();
    const [counter,setCounter] = useState([]);
    useEffect(()=>{
        const id = setInterval(()=>{setCounter(getRemainingTime('2024-08-04T10:59:59'))},[1000]);
        return ()=>clearInterval(id);
    },[])

    const cardData = [
        {
            id:'01',
            heading:t('logoDesignPrize'),
            amount:'Rs. 50,000'
        },
        {
            id:'02',
            heading:t('taglineContestPrize'),
            amount:'Rs. 25,000'
        }
    ]
  return (
    <Box sx={{backgroundColor:'#fff',py:3}}>
    <Typography sx={{textAlign:'center',fontWeight:700}} variant='h4'>{t('prizes')}</Typography>
    <Typography sx={{textAlign:'center',color:'#727289',width:300,mx:'auto'}} variant='body1'>{t('participateDescription')}</Typography>
    <Grid spacing={2} container sx={{'@media (min-width:768px)':{px:20},py:5}} >
        <Grid sx={{position:'relative'}} item md={6} sm={12} xs={12}>
            <Box component='img' src={bg} width={300} />
            <Box sx={{display:'flex',gap:2,position:'absolute',top:'80%',justifyContent:'center'}}>
                {counter.map(({type,value})=>(
 <Box key={type} sx={{borderRadius:5,border:'1px solid aqua',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
 <Typography sx={{color:'black',px:2,py:1}} variant='body1' fontWeight={700}>{value}</Typography>
 <Typography sx={{color:'black',backgroundColor:'aqua',px:2,py:1,borderRadius:'0  0 20px 20px'}} variant='body1'>{type}</Typography>
 </Box>
                ))}
            </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
            {cardData.map(({id,heading,amount})=>(
                <PrizeCard key={id} heading={heading} amount={amount} />
            ))}
            </Grid>
    </Grid>
    </Box>
  )
}

export default Prizes
