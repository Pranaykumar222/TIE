import React from 'react';
import { Box } from '@mui/material';

const CircleWithTextBox = ({ label, count }) => {
  return (
    <Box sx={{ position: 'relative', width: { xs: '90%', sm: '225px' }, height: '40px', mb: 2 }}>
      <Box
        sx={{
          background: 'linear-gradient(90deg, #00999E 0%, #6ee7f7 100%)',
          borderTopRightRadius: "30px",
          borderBottomRightRadius: "30px",
          height: '100%',
          px: { xs: 2, sm: 4 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 600,
          fontSize: { xs: 14, sm: 16 },
        }}
      >
        {label}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '-15px', 
          transform: 'translateY(-50%)',
          width: { xs: '45px', sm: '52px' },
          height: { xs: '45px', sm: '52px' },
          borderRadius: '50%',
          border: '2px solid #00999E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 500,
          fontFamily: 'Poppins',
          fontSize: { xs: '12px', sm: '14px' },
          color: '#00999E',
          background: 'white',
        }}
      >
        {count}
      </Box>
    </Box>
  );
};

export default CircleWithTextBox;
