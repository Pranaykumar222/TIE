import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoginImg from '../assets/image.jpg';

function LoginImage() {
  return (
    <Box
      sx={{
        width: {
          lg: '738px',
        },
        height: {
          lg: '80vh',
          xl: '750px', 
        },
        marginTop: {
          lg: '38px',
        },
        color: '#C4C4C4',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(rgba(0, 153, 158, 0.5), rgba(198, 253, 255, 0.5)), url(${LoginImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '29px',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Box
          sx={{
            width: {
              
              lg: '435px',
            },
            mb: {
              
              lg: 6,
            },
            ml: {
              
              lg: '68px',
            },
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <Typography
            sx={{
              color: '#FFFFFF',
              fontSize: {
                xs: '20px',
                sm: '26px',
                md: '30px',
                lg: '37px',
              },
              fontWeight: '700',
              fontFamily: 'Poppins',
            }}
          >
            Lorem Ipsum is simply
          </Typography>
          <Typography
            sx={{
              color: '#FFFFFF',
              fontSize: {
                xs: '14px',
                sm: '18px',
                md: '22px',
                lg: '25px',
              },
              fontWeight: '400',
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

