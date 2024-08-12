import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ApiManager from '../apiManager/apiManager';

const DownloadPdf = ({key}) => {
    const [data,setData] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    console.log("In view PDF")
    useEffect(() => {
        (async () => {
          try {
            const response = await ApiManager.getSignedUrl(key);
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
  return (<Button>
    <a href={data} download>
        View PDF
    </a>
  </Button>)
}

export default DownloadPdf
