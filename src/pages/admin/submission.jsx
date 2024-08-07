import React,{useState,useEffect} from 'react'
import { Typography,Box, CircularProgress } from '@mui/material'
import Breadcrumb from '../../components/breadCrumb'
import SubmissionCard from '../../components/submissionCard';
import ApiManager from '../../apiManager/apiManager';

const Submission = () => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [recall,setRecall] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const response = await ApiManager.getSubmissions();
        if (response.data?.status) {
          setData(response.data?.data);
          console.log(response.data?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [recall]);
  if(isLoading){
    return <CircularProgress/>
  }

  return (
    <Box>
    <Typography variant='h4' fontWeight='700'>Submission</Typography>
    <Breadcrumb currentPage="Submission"/>
      {isLoading ? <CircularProgress/> : <>
    {data.map((data,index)=>(
        <SubmissionCard serialNo={index+1} data={data} key={data?._id}/>
      ))}
      </>}
    </Box>
  )
}

export default Submission
