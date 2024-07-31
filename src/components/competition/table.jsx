import React, { useMemo, useState } from "react";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { getFormatDate } from "../../utiils/dateFormatter";
import DataTable from "react-data-table-component";
import { ArrowDownward, EditOutlined, RemoveRedEye } from "@mui/icons-material";

const Table = ({ rowData, isLoading }) => {
  const columns = useMemo(() => [
    {
      name: "S. No.",
      selector: (row, ind) => ind + 1,
      width:'65px'
    },
    {
        name: "Contest Name",
        selector: (row, ind) => row.name,
        width:'250px'
      },
    {
      name: "Start Date",
      selector: (row) => getFormatDate(row.startDate),
      sortable:true,
    },
    {
      name: "End Date",
      selector: (row) => getFormatDate(row.endDate),
      sortable: true,
    },
    {
        name: "Total Contestants",
        selector: (row) => row.maxContestant,
        sortable:true,
        width:'170px'
      },
      {
        name: "Joining Fee",
        selector: (row) => row.joiningFee,
        sortable:true,
        width:'170px'
      },
    {
        name: "Prize Value",
        selector: (row) => row.prizeValue,
        sortable:true,
        width:'170px'
    },
    {
        name: "Created At",
        selector: (row) => getFormatDate(row.createdAt),
        width:'180px',
        sortable:true,
      },
    {
      name: "Action",
      width:'80px',
      center:true,
      selector: (row,ind,ass) => (
          <IconButton size="small" onClick={() => console.log(row._id)}>
            <EditOutlined fontSize="small" />
          </IconButton>
      ),
    },
  ]);

  return (
    <Box>
      <DataTable
        columns={columns}
        data={rowData}
        sortIcon={
          <IconButton>
            <ArrowDownward />
          </IconButton>
        }
        pagination
        persistTableHead
        striped
        // paginationPerPage={2}
        // paginationRowsPerPageOptions={[1,2,3,4]}
        progressPending={isLoading}
        progressComponent={<Box my={1}><CircularProgress size={30} /></Box>}
        dense
        
      />
    </Box>
  );
};

export default Table;
