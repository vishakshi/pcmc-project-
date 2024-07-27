import React from "react";
import { Snackbar, Alert } from "@mui/material";
const CustomAlert = ({ onOpen, onClose, severity, message }) => {
  return (
    <>
      <Snackbar
        open={onOpen}
        autoHideDuration={4000}
        onClose={onClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={onClose} severity={severity} sx={{fontSize:12,py:0}} variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomAlert;
