import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, colors } from '@mui/material';
import Header from '../../components/Header';
import { mockDataTeam } from '../../data/mockData'
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
            field: "access",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width='60%'
                        m='0 auto'
                        p='5px'
                        display='flex'
                        justifyContent='center'
                        backgroundColor={
                            access === 'admin' ?
                                colors.greenAccent[600]
                                :
                                colors.greenAccent[700]
                        }
                        borderRadius='4px'
                    >
                        {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
                        {access === 'manager' && <SecurityOutlinedIcon />}
                        {access === 'user' && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                )
            }
        },

    ];
    return (
        <Box m='20px'>
            <Header title='TEAM' subTitle='Welcome to your team' />
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
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Team