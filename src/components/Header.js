import { Box, Typography, useTheme } from "@mui/material";
import React from 'react'
import { tokens } from "../theme";

const Header = ({title, subTitle}) => {
    let theme = useTheme();
    let colors = tokens(theme.palette.mode);
    return (
        <Box sx={{mb: "30px"}}>
            <Typography variant="h5" color={colors.grey[100]} fontWeight='bold' sx={{ mb: "5px" }}>{title}</Typography>
            <Typography variant="h6" color={colors.greenAccent[400]} fontSize='10px'>{subTitle}</Typography>
        </Box>
    )
}

export default Header