import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import App from './App.jsx'
import './index.css'
import { theme } from './theme/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </LocalizationProvider>
     </ThemeProvider>,
)
