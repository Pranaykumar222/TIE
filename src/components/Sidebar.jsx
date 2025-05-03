import React, { useState } from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Box, 
  IconButton,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  Divider
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo2 from '../assets/logo2.png';

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const drawerContent = (
    <>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        mb: 3,
        position: 'relative'
      }}>
        <img
          src={logo2}
          alt="Logo"
          style={{
            width: isXsScreen ? '160px' : '198px',
            display: 'block',
            marginTop: '-40px',  
            marginBottom: '-50px',
          }}
        />
        
        {isXsScreen && (
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              color: '#1A1A1A'
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
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
              '& .MuiTypography-root': {
                fontSize: isXsScreen ? '16px' : '18px',
              }
            }}
          />
        </ListItem>
        

             
      </List>
    </>
  );

  return (
    <>
      {!isXsScreen && (
        <Drawer
          variant="permanent"
          anchor="left"
          open
          sx={{
            display: { xs: 'none', sm: 'block' },
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
          {drawerContent}
        </Drawer>
      )}

      {isXsScreen && (
        <SwipeableDrawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onOpen={handleDrawerToggle}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
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
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawerContent}
        </SwipeableDrawer>
      )}
    </>
  );
};

export default Sidebar;