import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolIcon from '@mui/icons-material/School';
import logo2 from '../assets/logo2.png';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#f7faff',
          borderRight: '1px solid #e0e0e0',
          padding: '16px',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', mb: 3 }}>
        <img
          src={logo2}
          alt="Logo"
          style={{
            width: '198px',
            display: 'block',
            marginTop: '-40px',  
            marginBottom: '-50px',
          }}
        />
      </Box>

      <List>
        <ListItem
          button
          sx={{
            mt: '35px',
            paddingLeft: 0,
            paddingRight: 0, 
            width: '100%', 
            height: '40px',
            backgroundColor: '#C9EFFB',
            display: 'flex',
            alignItems: 'center', 
          }}
        >
          <ListItemIcon
            sx={{
              width: '28px',
              color: '#1A1A1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
          >
            <HomeOutlinedIcon />
          </ListItemIcon>

          <ListItemText
            primary="Dashboard"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '18px',
              color: '#1A1A1A',
              marginLeft: '10px',
            }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;


