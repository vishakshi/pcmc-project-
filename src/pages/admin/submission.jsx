import React,{useState,useEffect} from 'react'
import { Typography,Box, CircularProgress,InputLabel, Autocomplete, TextField } from '@mui/material'
import Breadcrumb from '../../components/breadCrumb'
import SubmissionCard from '../../components/submissionCard';
import ApiManager from '../../apiManager/apiManager';

const Submission = () => {
  const [data, setData] = useState([]);
  const [contestData,setContestData] = useState([])
  const [isLoading,setIsLoading] = useState(true);
  const [isDataLoading,setIsDataLoading] = useState(false)
  const [recall,setRecall] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const response = await ApiManager.getCompetetions();
        // const response = await ApiManager.getSubmissions();
        if (response.data?.status) {
          setContestData(response.data?.data);
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

  const handleChange  = async (_,selectedVal) => {
    if(selectedVal){
      console.log(selectedVal)
      setIsDataLoading(true);
  const response = await ApiManager.getSubmissionByContest(selectedVal?._id);
  if (response.data?.status) {
    setData(response.data?.data);
    console.log(response.data?.data);
  }
  setIsDataLoading(false);
    }
  }

  return (
    <Box mb={5}>
    <Typography variant='h4' fontWeight='700'>Participants</Typography>
    <Breadcrumb currentPage="Participants"/>
    <Box my={3}>
      <InputLabel>Select Competition</InputLabel>
      <Autocomplete
      options={contestData}
      getOptionLabel={(option)=>option?.name}
      fullWidth
      size='small'
      renderInput={(params) => <TextField {...params} placeholder='Please select competetion' />}
      onChange={handleChange}
    />
    </Box>
      {isDataLoading ? <CircularProgress/> : <Box>
    {data.map((data,index)=>(
        <SubmissionCard serialNo={index+1} data={data} key={data?._id}/>
      ))}
      </Box>}
    </Box>
  )
}

export default Submission
