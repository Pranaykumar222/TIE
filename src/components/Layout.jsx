import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Sidebar />
        <Navbar />
        {children}
      </Box>
    );
  };
  
  export default Layout;