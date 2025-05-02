import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoginRegisterBox from './ui/LogRegBtn';
import Form from './ui/Form';

function LoginForm() {
  const [activeButton, setActiveButton] = useState('login');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <img
        src={logo}
        alt="Logo"
        style={{
          width: '160.58px',
          height: '111px',
          position: 'absolute',
          top: '-9px',
          right: '0.25px',
        }}
      />

      
      <Box
        sx={{
          position: 'absolute',
          right: '94px',
          top: '54%',
          transform: 'translateY(-50%)',
          width: {
            xl: '500px',
            lg: '450px',
            sm: '90%',
            xs: '90%',
          },
          height: {
            xl: '650px',
            lg: '600px',
            sm: 'auto',
            xs: 'auto',
          },
          
          padding: '20px',
          borderRadius: '8px',
          display:'flex',
          justifyContent:'center'
        }}
      >
        
        <Box
      sx={{
        width: '329px', 
        height: '59px', 
        borderRadius: '7px', 
        padding: '16px', 
      }}
    >
     <Typography
            sx={{
              color: '#000000',
              fontSize: {
                xs: '12px',
                sm: '14px',
                md: '16px',
                lg: '16px',
              },
              fontWeight: '400',
              fontFamily: 'Poppins',
              textAlign:'center'
            }}
          >
            Welcome toTiE
          </Typography>
          <LoginRegisterBox 
            activeButton={activeButton}
            onButtonClick={handleButtonClick}
          />
          <Form isLogin={activeButton === 'login'} />
    </Box>
      </Box>
    </>
  );
}

export default LoginForm;
