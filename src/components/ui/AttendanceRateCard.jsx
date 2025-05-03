import React from 'react';
import { Grid, Box, Typography, Chip } from '@mui/material';
import CircleWithTextBox from './CircleWithTextBox'; 

const AttendanceRateCard = ({ title, data, chipLabel = "20%" }) => {
  return (
    <Grid 
      container 
      spacing={{ xs: 1, sm: 2 }} 
      mb={2} 
      mt={{ xs: '8px', sm: '12px', md: '16px' }}
      sx={{
        width: '100%',
        height: 'auto'
      }}
    >
      <Grid item xs={12} sm={6}>
        <Box sx={{ 
          border: '1px solid #00999E', 
          borderRadius: "10px", 
          width: "100%",
          height: { xs: "auto", sm: "270px" },
          mr:"21px"
        }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2} borderBottom="1px solid #00999E">
            <Typography 
              variant="subtitle1" 
              fontFamily={"Poppins"} 
              fontSize={{ xs: "16px", sm: "17px", md: "18px", lg: "18px", xl: "18px" }} 
              fontWeight={500} 
              color="#00999E"
            >
              {title}
            </Typography>
            <Chip 
              label={chipLabel} 
              sx={{ 
                width: { xs: "55px", sm: "61px" }, 
                height: { xs: "28px", sm: "32px" }, 
                p: "8px", 
                borderRadius: "20px", 
                background: '#00999E', 
                color: 'white', 
                fontWeight: 500, 
                fontSize: { xs: "10px", sm: "12px" }, 
                fontFamily: "Poppins" 
              }} 
              size="small" 
            />
          </Box>

          <Box 
            p={2} 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            gap="4px" 
          >
            {data.map((item, index) => (
              <Box 
                key={index} 
                display="flex" 
                justifyContent="center" 
                alignItems="center"  
                width="100%" 
              >
                <CircleWithTextBox label={item.label} count={item.highlight} />
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AttendanceRateCard;


