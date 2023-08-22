import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import React, { useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { ColorModeContext, tokens } from '../../theme';
import styled from '@emotion/styled';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'

// const styledBox = styled(Box)`
  
// `

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 1 }} display={'flex'} justifyContent={'space-between'} p>
      {/* search bar */}
      <Box display={'flex'} style={{backgroundColor: `${colors.primary[400]}`}} borderRadius={'3px'}>
        <InputBase sx={{ml: 2, flex: 1}} placeholder='Search...' />
        <IconButton type='button' sx={{p: 1}}>
          <SearchIcon />
        </IconButton>
      </Box>
      
      <Box sx={{display: "flex"}}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark'?<LightModeOutlinedIcon />:<DarkModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TopBar