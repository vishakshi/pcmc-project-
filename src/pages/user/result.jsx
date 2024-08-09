import React,{useState,useEffect} from 'react'
import { Box, Grid,CircularProgress } from '@mui/material'
import ResultCard from '../../components/result-card'
import { getDecodedToken } from '../../utiils/utility'
import ApiManager from '../../apiManager/apiManager'

const Result = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [data,setData] = useState([]);

    useEffect(()=>{
        (async ()=>{
          try {
            const userData = getDecodedToken();
            const response = await ApiManager.getSubmissionsByUser(userData?._id);
            if(response.data?.status){
              setData(response.data?.data);
              console.log(response.data?.data)
            }
          } catch (error) {
            console.log(error)
          }finally{
            setIsLoading(false)
          }
        })();
      },[])

      if(isLoading){
        return(
          <CircularProgress/>
        )
      }
    
  return (
    <Grid container gap={4}>
        {data.map((item)=>(
            <ResultCard data={item} key={item?._id}/>
        ))}
    </Grid>
  )
}

export default Result
