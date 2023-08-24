import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'

const Dashboard = () => {
  return (
    <Box m='20px'>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Header title={'DASHBOARD'} subTitle={'Welcome to your dashboard'}/>
      </Box>
    </Box>
  )
}

export default Dashboard