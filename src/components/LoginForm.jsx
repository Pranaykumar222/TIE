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
      {/* Logo positioned at top-right */}
      <img
        src={logo}
        alt="Logo"
        style={{
          position: 'absolute',
          top: '20px',  // Distance from top
          right: '20px',  // Distance from right
          width: '160.58px',  // Adjust size of logo
          height: '111px',  // Adjust size of logo
        }}
      />

      {/* Form container */}
      <Box
        sx={{
          position: 'relative',  // Ensures the form is positioned relative to the screen
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30px',  // Adjusted margin for visual balance
          marginBottom: '30px',  // Added space at the bottom for visual balance
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '329px',
            height: 'auto',
            padding: '16px',
            borderRadius: '7px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
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
              textAlign: 'center',
            }}
          >
            Welcome to TiE
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

