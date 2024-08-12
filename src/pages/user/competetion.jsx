import React, { useState,useEffect } from "react";
import CompetitionCard from "../../components/card";
import ApiManager from "../../apiManager/apiManager";
import { CircularProgress } from "@mui/material";
import {Grid} from "@mui/material";

const Competetion = () => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [recall,setRecall] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const response = await ApiManager.getActiveCompetetions();
        if (response.data?.status) {
          setData(response.data?.data);
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
    <div>
        <Grid container spacing={2} alignItems='center'>
      {data.map((data, index) => (
        <CompetitionCard recall={()=>setRecall(recall + 1)} key={data?._id} data={data} />
      ))}
      </Grid>
    </div>
  );
};

export default Competetion;
