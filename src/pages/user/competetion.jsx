import React, { useState,useEffect } from "react";
import CompetitionCard from "../../components/card";
import ApiManager from "../../apiManager/apiManager";
import { CircularProgress } from "@mui/material";
import {Grid} from "@mui/material";

const Competetion = () => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await ApiManager.getCompetetions();
        if (response.data?.status) {
          setData(response.data?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  if(isLoading){
    return <CircularProgress/>
  }
  return (
    <div>
        <Grid container spacing={2}>
      {data.map((data, index) => (
        <CompetitionCard key={data?._id} data={data} />
      ))}
      </Grid>
    </div>
  );
};

export default Competetion;
