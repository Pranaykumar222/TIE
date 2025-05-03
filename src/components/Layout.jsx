import React, { useState } from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const drawerWidth = 0;

const Layout = ({ children }) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
  
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

 
      <Box
  component="main"
  sx={{
    flexGrow: 1,
   
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  }}
>

  <Box sx={{ position: 'fixed', width: '100%', zIndex: 1100 }}>
    {isXsScreen && (
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          zIndex: 1200,
          color: '#000',
        }}
      >
        <MenuIcon />
      </IconButton>
    )}
    <Navbar />
  </Box>

 
  <Box
    sx={{
      flex: 1,
      px: { xs: 1, sm: 3 },
      py: 2,
      
      overflowX: 'hidden',
      paddingTop: {
        xs: '80px',
        sm: '80px',
        md: '80px',
        lg: '40px',
        xl: '40px', 
      },
    }}
  >
    {children}
  </Box>
</Box>

    </Box>
  );
};

export default Layout;



