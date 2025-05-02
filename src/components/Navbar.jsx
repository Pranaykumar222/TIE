import React from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography, InputBase ,Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Profilephoto from '../assets/Profilephoto.jpg'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240; 

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };



  return (
    <AppBar
      position="absolute"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        height: '87px',
        top: 0,
        left: `${drawerWidth}px`,
        backgroundColor: '#00999E',
        padding: '0 16px',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
        
       
        <Box
          sx={{
            width: '343px',
            height: '24px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 16px',
            backgroundColor: '#fff',
          }}
        >
          <InputBase
            placeholder="Search"
            sx={{
              flex: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '16px',
              color: '#000000',
              '&::placeholder': {
                color: '#000000',
                opacity: 1,
              },
            }}
            disableUnderline
          />
          <IconButton sx={{ padding: 0 }}>
            <SearchIcon sx={{ color: '#000000' }} />
          </IconButton>
        </Box>

 
        <Box sx={{ display: 'flex', gap: '12px' }}>
        <IconButton
        sx={{
            width: '56px',
            height: '56px',
            borderRadius: '40px',
            padding: '12px',
            backgroundColor: '#fff',
            color: '#00999E',
        }}
        >
        <NotificationsIcon sx={{color:'#000000',height:'30px',width:'30px'}}/>
        </IconButton>

        <Button
            variant="contained"
            sx={{
                width: '224px',
                height: '56px',
                padding: '4px 4px 4px 24px',
                borderRadius: '210px',
                backgroundColor: '#fff',
                color: '#00999E',
                display:'flex',
                justifyContent:'space-between',
                textTransform: 'none',
                fontWeight: 500,
                fontFamily: 'Poppins',
                fontSize: '24px',
                '&:hover': {
                backgroundColor: '#f0f0f0',
                },
            }}
            >
            Hey,Riya 
            <Box sx={{ width: '50px', height: '50px',borderRadius:'50%' }} onClick={handleProfileClick}>
                <img src={Profilephoto} alt="ProfilePic" style={{ width: '100%', height: '100%',borderRadius:'50%' }} />
            </Box>
            </Button>

            <Button
            variant="contained"
            sx={{
                width: '56px',
                height: '56px',
                padding: '12px',
                borderRadius: '40px',
                backgroundColor: '#fff',
                color: '#00999E',
            }}
            onClick={handleLogout}
            >
            <PowerSettingsNewIcon sx={{color:'#000000',height:'30px',width:'30px'}} />
            </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



