import React,{useState,useEffect} from 'react'
import { Typography,Box, CircularProgress,InputLabel, Autocomplete, TextField } from '@mui/material'
import Breadcrumb from '../../components/breadCrumb'
import SubmissionCard from '../../components/submissionCard';
import ApiManager from '../../apiManager/apiManager';
import DialogLoader from '../../components/DialogLoader';
import CustomAlert from '../../components/customAlert';

const Submission = () => {
  const [data, setData] = useState({});
  const [contestData,setContestData] = useState([])
  const [singleContestData,setSingleContestData] = useState([])
  const [isLoading,setIsLoading] = useState(true);
  const [isDataLoading,setIsDataLoading] = useState(false)
  const [recall,setRecall] = useState(1);
  const [selectedValue,setSelectedValue] = useState("");
  const [alertData,setAlertData] = React.useState({severity:'',message:''});

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
  }, []);

  const handleChange  = async (_,selectedVal) => {
    if(selectedVal){
      setSelectedValue(selectedVal);
      setSingleContestData(()=>[]);  
      console.log(selectedVal?._id)
      setIsDataLoading(true);
  // const response = await ApiManager.getSubmissionByContest(selectedVal?._id);
  const response = await ApiManager.getCompetetionDetail(selectedVal?._id);
  if (response.data?.status) {
    setData(()=>(response.data?.data));
    setSingleContestData(()=>(response.data?.data?.submissions));
    console.log('Single Contest',response.data?.data?.submissions,singleContestData);
  }
  setIsDataLoading(false);
    }
  }


  useEffect(()=>{
    handleChange("",selectedValue);
  },[recall])

  if(isLoading){
    return <CircularProgress/>
  }

  return (
    <Box mb={5}>
      {alertData.message && <CustomAlert severity={alertData.severity} onOpen={Boolean(alertData.message)} onClose={()=>setAlertData({...alertData,message:null})} message={alertData.message}/>}
    <DialogLoader isLoading={isDataLoading} />
    <Typography variant='h4' fontWeight='700'>Participants</Typography>
    <Breadcrumb currentPage="Participants"/>
    <Box my={3}>
      <InputLabel>Select Competition</InputLabel>
      <Autocomplete
      options={contestData}
      getOptionLabel={(option)=>option?.name}
      fullWidth
      size='small'
      renderInput={(params) => <TextField {...params} placeholder='Please select Competition' />}
      onChange={handleChange}
    />
    </Box>
      <Box >
    {singleContestData && singleContestData?.map((cardData,index)=>(
        <SubmissionCard recall={()=>setRecall(recall + 1)} competetionData={data} setAlertData={setAlertData} serialNo={index+1} data={cardData} key={data?._id}/>
      ))}
      </Box>
    </Box>
  )
}

export default Submission
