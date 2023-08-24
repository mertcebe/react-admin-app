import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import profileImg from '../../assets/avatar-profile-picture.jpg'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      id='myMenuItem'
      title={title}
      component={<Link to={to} />}
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}>
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

const SideBar = () => {
  let theme = useTheme();
  let colors = tokens(theme.palette.mode);
  let [isCollapsed, setIsCollapsed] = useState(false);
  let [selected, setSelected] = useState('Dashboard');
  return (
    <div>
      <Box
        sx={{
          position: "sticky",
          display: "flex",
          height: "100vh",
          top: 0,
          bottom: 0,
          zIndex: 10000,
          "& .sidebar": {
            border: "none",
          },
          "& .menu-icon": {
            backgroundColor: "transparent !important",
          },
          "& .menu-item": {
            backgroundColor: "transparent !important",
          },
          "& .menu-anchor": {
            color: "inherit !important",
            backgroundColor: "transparent !important",
          },
          "& .menu-item:hover": {
            color: `${colors.blueAccent[500]} !important`,
            backgroundColor: "transparent !important",
          },
          "& .menu-item.active": {
            color: `${colors.greenAccent[500]} !important`,
            backgroundColor: "transparent !important",
          },
        }}
      >
        <Sidebar
          collapsed={isCollapsed}
          breakPoint="md"
          backgroundColor={colors.primary[400]}
          image={<MenuOutlinedIcon />}>
          <Menu style={{ background: colors.primary[400], color: colors.grey[100] }}>
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{ margin: "10px 0 10px 0", color: colors.grey[100] }}
            >
              {
                !isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px">
                    <Typography variant="h6" color={colors.grey[100]}>
                      ADMINIS
                    </Typography>
                    <IconButton
                      onClick={() => setIsCollapsed(!isCollapsed)
                      }
                    >
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )
              }
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    "& .avater-image": {
                      backgroundColor: colors.primary[500],
                    },
                  }}
                >
                  <img
                    className="avater-image"
                    alt="profile user"
                    width="80px"
                    height="80px"
                    src={profileImg}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Admin Name
                  </Typography>
                </Box>
              </Box>
            )}
            <Box>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {
                !isCollapsed && (
                  <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "10px 20px 0px 20px" }}
                  >
                    Data
                  </Typography>
                )
              }
              <Item title={'Manage Team'} to='/team' icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'Contacts Information'} to='/contacts' icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'Invoices Balances'} to='/invoices' icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
              {
                !isCollapsed && (
                  <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "10px 20px 0px 20px" }}
                  >
                    Pages
                  </Typography>
                )
              }
              <Item title={'Profile Form'} to='/form' icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'Calendar'} to='/calendar' icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'FAQ Page'} to='/faq' icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              {
                !isCollapsed && (
                  <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "10px 20px 0px 20px" }}
                  >
                    Charts
                  </Typography>
                )
              }
              <Item title={'Bar Chart'} to='/bar' icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'Pie Chart'} to='/pie' icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'Line Chart'} to='/line' icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title={'Geography Chart'} to='/geography' icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    </div>
  )
}

export default SideBar