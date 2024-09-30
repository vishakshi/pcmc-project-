import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'
import engImg from "../../assets/engish-extend.jpeg"
import matImg from "../../assets/marathi-extend.jpeg"

const Extented = () => {
    const {t,i18n} = useTranslation();
  return (
    <Box component='img' sx={{width:'100%'}} src={i18n.language === "en" ? engImg : matImg} />
  )
}

export default Extented
