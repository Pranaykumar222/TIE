import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function LoginRegisterBox({ activeButton, onButtonClick }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9FEFF',
        borderRadius: '8px',
        marginTop: '24px',
        width: '329px',
        height: '59px'
      }}
    >
      <Button
        sx={{
          backgroundColor: activeButton === 'login' ? '#00999E' : 'transparent',
          color: activeButton === 'login' ? 'white' : '#00999E',
          border: activeButton === 'login' ? '1px solid #00999E' : '1px solid transparent',
          width: '146px',
          height: '40px',
          borderRadius: '7px',
          fontSize: '16px',
          '&:hover': {
            backgroundColor: activeButton === 'login' ? '#007B7A' : 'transparent',
          },
        }}
        onClick={() => onButtonClick('login')}
      >
        Login
      </Button>

      <Button
        sx={{
          backgroundColor: activeButton === 'register' ? '#00999E' : 'transparent',
          color: activeButton === 'register' ? 'white' : '#00999E',
          border: activeButton === 'register' ? '1px solid #00999E' : '1px solid transparent',
          width: '146px',
          height: '40px',
          borderRadius: '7px',
          fontSize: '16px',
          '&:hover': {
            backgroundColor: activeButton === 'register' ? '#007B7A' : 'transparent',
          },
        }}
        onClick={() => onButtonClick('register')}
      >
        Register
      </Button>
    </Box>
  );
}

export default LoginRegisterBox;

