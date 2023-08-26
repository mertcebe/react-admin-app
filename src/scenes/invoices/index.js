import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, colors } from '@mui/material';
import Header from '../../components/Header';
import { mockDataInvoices } from '../../data/mockData'
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'


const Invoives = () => {
    let theme = useTheme();
    let colors = tokens(theme.palette.mode);
    const columns = [
        { field: 'id', headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 1
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: ({ row: {cost} }) => {
                return (
                    <Typography color={colors.greenAccent[400]}>${cost}</Typography>
                )
            }
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1
        }

    ];
    return (
        <Box m='20px'>
            <Header title='INVOICES' subTitle='Welcome to you invoices' />
            <Box m='40px 0 0 0' height='75vh' sx={{
                '& .MuiDataGrid-root': {
                    border: "none"
                },
                '& .MuiDataGrid-cell': {
                    borderBottom: "none"
                },
                '& .name-column--cell': {
                    color: colors.greenAccent[300]
                },
                '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: colors.blueAccent[800],
                    borderBottom: "none"
                },
                '& .MuiDataGrid-virtualScroller': {
                    backgroundColor: colors.primary[400]
                },
                '& .MuiDataGrid-footerContainer': {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[800]
                },
            }}>
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Invoives