import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoginImg from '../assets/image.jpg';

function LoginImage() {
  return (
    <Box
      sx={{
        width: '738px',
        height: '680px', 
        mt: '20px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(rgba(0, 153, 158, 0.5), rgba(198, 253, 255, 0.5)), url(${LoginImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '29px',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Box
          sx={{
            width: '435px',
            mb: 6,
            ml: '68px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <Typography
            sx={{
              color: '#FFFFFF',
              fontSize: '37px',
              fontWeight: 700,
              fontFamily: 'Poppins',
            }}
          >
            Lorem Ipsum is simply
          </Typography>
          <Typography
            sx={{
              color: '#FFFFFF',
              fontSize: '25px',
              fontWeight: 400,
              fontFamily: 'Poppins',
            }}
          >
            Lorem Ipsum is simply
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginImage;


