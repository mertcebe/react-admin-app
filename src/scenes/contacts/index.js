import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Typography, colors } from '@mui/material';
import Header from '../../components/Header';
import { mockDataContacts } from '../../data/mockData'
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'


const Team = () => {
    let theme = useTheme();
    let colors = tokens(theme.palette.mode);
    const columns = [
        { field: 'id', headerName: "ID" },
        {
            field: "registrarId",
            headerName: "RegisterID"
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "age",
            headerName: "Age",
            type: 'number',
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 1
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
        {
            field: "address",
            flex: 2,
            headerName: "Address",
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: "city",
            headerName: "City",
            flex: 1
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1
        },

    ];
    return (
        <Box m='20px'>
            <Header title='CONTACTS' subTitle='List of Contacts for Future Referance' />
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
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                },
            }}>
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )
}

export default Team