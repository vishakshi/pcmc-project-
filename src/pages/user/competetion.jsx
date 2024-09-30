import React, { useState,useEffect } from "react";
import CompetitionCard from "../../components/card";
import ApiManager from "../../apiManager/apiManager";
import { CircularProgress } from "@mui/material";
import {Grid,Alert,AlertTitle,Box} from "@mui/material";
import { getDecodedToken } from "../../utiils/utility";
import DialogLoader from "../../components/DialogLoader";

const Competetion = () => {
  const [data, setData] = useState([]);
  const [submissionData,setSubmissionData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [recall,setRecall] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const userData = getDecodedToken();
        const response2 = await ApiManager.getSubmissionsByUser(userData?._id);
        const response = await ApiManager.getActiveCompetetions();
        if (response2.data?.status) {
          setSubmissionData(()=>response2.data?.data);
        }
        if (response.data?.status) {
          setData(()=>response.data?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [recall]);

  return (
    <div>
      <DialogLoader isLoading={isLoading}/>
        <Box display='flex' justifyContent='center'  alignItems='center'>
      {data.map((data, index) => (
        <CompetitionCard submissionData={submissionData} recall={()=>setRecall(recall + 1)} key={data?._id} data={data} />
      ))}
      <Box >
</Box>
      </Box>
    </div>
  );
};

export default Competetion;
