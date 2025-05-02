import React from 'react';
import { Box, Typography, Paper, Grid, Chip } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';

const ScoreCard = () => {
  return (
    <>
    <Paper variant="outlined" sx={{ borderBottom: 3, p: 3, borderColor: '#00999E' }}>
      <Typography variant="h5" fontSize="25px" fontWeight={500} color="#00999E" mb={2}>
        Score & Certificate
      </Typography>
      
      {/* Top row with two columns */}
      <Grid container spacing={2} mb={2} mt='16px' sx={{width:"681px",height:"270px",gap:"21px"}}>
        {/* Attendance Rate Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ border: '1px solid #00999E', borderRadius: "10px", width:"320px", height:"270px" }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2} borderBottom="1px solid #00999E">
              <Typography variant="subtitle1" fontFamily={"Poppins"} fontSize={"18px"} fontWeight={500} color="#00999E">
                Attendance Rate
              </Typography>
              <Chip label="20%" sx={{ width: "61px", height: "32px", p:"8px", borderRadius: "20px", background: '#00999E', color: 'white', fontWeight: 500, fontSize:"12px", fontFamily: "Poppins" }} size="small" />
            </Box>
            
            <Box p={2} display="flex" flexDirection="column" alignItems="center">
              {/* Online Class */}
              <Box sx={{ position: 'relative', width: '225px', height: '40px', mb: 2 }}>
                {/* Gradient Box */}
                <Box
                    sx={{
                    background: 'linear-gradient(90deg, #00999E 0%, #6ee7f7 100%)',
                    borderTopRightRadius:"30px",
                    borderBottomRightRadius:"30px",
                    height: '100%',
                    px: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: 16,
                    }}
                >
                    Online Class
                </Box>

                {/* Circular Box - Moved Further Left */}
                <Box
                    sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '-15px', // moved more to the left
                    transform: 'translateY(-50%)',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    border: '2px solid #00999E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 500,
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    color: '#00999E',
                    background: 'white',
                    }}
                >
                    0/6
                </Box>
                </Box>
              
              {/* Offline Class */}
              
              <Box sx={{ position: 'relative', width: '225px', height: '40px', mb: 2 }}>
                {/* Gradient Box */}
                <Box
                    sx={{
                    background: 'linear-gradient(90deg, #00999E 0%, #6ee7f7 100%)',
                    borderTopRightRadius:"30px",
                    borderBottomRightRadius:"30px",
                    height: '100%',
                    px: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: 16,
                    }}
                >
                    Offline Class
                </Box>

                {/* Circular Box - Moved Further Left */}
                <Box
                    sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '-15px', // moved more to the left
                    transform: 'translateY(-50%)',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    border: '2px solid #00999E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 500,
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    color: '#00999E',
                    background: 'white',
                    }}
                >
                    0/6
                </Box>
                </Box>

              {/* Mentor Connects */}
              <Box sx={{ position: 'relative', width: '225px', height: '40px', mb: 2 }}>
                {/* Gradient Box */}
                <Box
                    sx={{
                    background: 'linear-gradient(90deg, #00999E 0%, #6ee7f7 100%)',
                    borderTopRightRadius:"30px",
                    borderBottomRightRadius:"30px",
                    height: '100%',
                    px: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: 16,
                    }}
                >
                    Mentor Connections
                </Box>

                {/* Circular Box - Moved Further Left */}
                <Box
                    sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '-15px', // moved more to the left
                    transform: 'translateY(-50%)',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    border: '2px solid #00999E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 500,
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    color: '#00999E',
                    background: 'white',
                    }}
                >
                    0/6
                </Box>
                </Box>
            </Box>
          </Box>
        </Grid>
        
        {/* Submission Rate Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ border: '1px solid #00999E', borderRadius: "10px", width:"320px", height:"270px"  }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2} borderBottom="1px solid #00999E">
              <Typography variant="subtitle1" fontFamily={"Poppins"} fontSize={"18px"} fontWeight={500} color="#00999E">
                Submission Rate
              </Typography>
              <Chip label="20%" sx={{ width: "61px", height: "32px", p:"8px", borderRadius: "20px", background: '#00999E', color: 'white', fontWeight: 500, fontSize:"12px", fontFamily: "Poppins" }} size="small" />
            </Box>
            
            <Box p={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="14px">
              {/* Assignment */}
              <Box sx={{ position: 'relative', width: '225px', height: '40px', mb: 2 ,mt:"30px"}}>
                {/* Gradient Box */}
                <Box
                    sx={{
                    background: 'linear-gradient(90deg, #00999E 0%, #6ee7f7 100%)',
                    borderTopRightRadius:"30px",
                    borderBottomRightRadius:"30px",
                    height: '100%',
                    px: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: 16,
                    }}
                >
                    Assignment
                </Box>

                {/* Circular Box - Moved Further Left */}
                <Box
                    sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '-15px', // moved more to the left
                    transform: 'translateY(-50%)',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    border: '2px solid #00999E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 500,
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    color: '#00999E',
                    background: 'white',
                    }}
                >
                    0/6
                </Box>
                </Box>
              
              {/* Practice */}
              <Box sx={{ position: 'relative', width: '225px', height: '40px', mb: 2 }}>
                {/* Gradient Box */}
                <Box
                    sx={{
                    background: 'linear-gradient(90deg, #00999E 0%, #6ee7f7 100%)',
                    borderTopRightRadius:"30px",
                    borderBottomRightRadius:"30px",
                    height: '100%',
                    px: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: 16,
                    }}
                >
                    Practice
                </Box>

                {/* Circular Box - Moved Further Left */}
                <Box
                    sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '-15px', // moved more to the left
                    transform: 'translateY(-50%)',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    border: '2px solid #00999E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 500,
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    color: '#00999E',
                    background: 'white',
                    }}
                >
                    0/6
                </Box>
                </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      
      {/* Bottom row: Mock Test Rate (full width) */}
      <Box sx={{ border: '1px solid #00999E', borderRadius: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2} borderBottom="1px solid #b2ebf2" width="655px" height="48px">
          <Typography variant="subtitle1" fontWeight={500} fontFamily="Poppins" fontSize="18px" color="#00999E">
            Mock Test Rate
          </Typography>
          <Chip label="20%" sx={{ width: "61px", height: "32px", p:"8px", borderRadius: "20px", background: '#00999E', color: 'white', fontWeight: 500, fontSize:"12px", fontFamily: "Poppins" }} size="small"  />
        </Box>
        
        <Grid container spacing={2} p={2} display={'flex'} justifyContent={'space-between'}>
          {/* Left side: Last Score and Target Score */}
          
          <Box sx={{ display: 'flex', p: 1 ,ml:"71px"}}>
        {/* Left column - Score info */}
        <Box sx={{ width: '164px'}}>
          {/* Last Score Box */}
          <Box width={"100%"} >
          <Box 
            sx={{ 
              mb: 3,
              display: 'flex',
              flexDirection: 'column',
              border:"1px solid #00999E",
              borderRadius:"6px"
            }}
          >
            <Box
              sx={{
                background: 'linear-gradient(to right, #4aa3a3, #3d8a8a)',
                p: 2,
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
                textAlign: 'center',
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Last Score
              </Typography>
            </Box>
            <Box
              sx={{
                border: '1px solid #ddd',
                p: 2,
                borderBottomLeftRadius: '6px',
                borderBottomRightRadius: '6px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  border: '1px solid #b96e73',
                  borderRadius: '50px',
                  px: 4,
                  py: 1,
                  width: '80%',
                  textAlign: 'center'
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: '#b96e73',
                    fontWeight: 'medium'
                  }}
                >
                  368
                </Typography>
              </Box>
            </Box>
          </Box>
          </Box>

          {/* Target Score Box */}
          <Box width={"100%"}>
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              border:"1px solid #00999E",
              borderRadius:"6px"
            }}
          >
            <Box
              sx={{
                background: 'linear-gradient(to right, #4aa3a3, #3d8a8a)',
                p: 2,
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
                textAlign: 'center'
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Target Score
              </Typography>
            </Box>
            <Box
              sx={{
                border: '1px solid #ddd',
                p: 2,
                borderBottomLeftRadius: '6px',
                borderBottomRightRadius: '6px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  border: '1px solid #4aa3a3',
                  borderRadius: '50px',
                  px: 4,
                  py: 1,
                  bgcolor: '#e6f7f7',
                  width: '80%',
                  textAlign: 'center'
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: '#4aa3a3',
                    fontWeight: 'medium'
                  }}
                >
                  700
                </Typography>
              </Box>
            </Box>
          </Box>
          </Box>
        </Box>

        </Box> 
          
          {/* Right side: Skill percentages */}
          <Grid item xs={12} md={8} display="flex" flexDirection="column" alignItems="flex-end" ml="71px">
    {[
      { label: 'Reading', value: 70 },
      { label: 'Speaking', value: 60 },
      { label: 'Writing', value: 70 },
      { label: 'Grammar', value: 70 },
      { label: 'Over All', value: 70 },
    ].map((item) => (
      <Box key={item.label} sx={{ position: 'relative', py: "16px", width: '312px', height: '40px' }}>
        {/* Right Rectangle Box */}
        <Box
          sx={{
            background: '#CCFDFF',
            borderTopRightRadius: '30px',
            borderBottomRightRadius: '30px',
            height: '100%',
            px: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000000',
            fontWeight: 500,
            fontSize: "18px",
            fontFamily: "Poppins",
          }}
        >
          {item.label}
        </Box>

        {/* Left Circle Box (Overlapping) */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '-15px',
            transform: 'translateY(-50%)',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            border: '2px solid #00999E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: 16,
            color: '#00999E',
            background: 'white',
          }}
        >
          {item.value}%
        </Box>
      </Box>
    ))}
  </Grid>

        </Grid>
      </Box>
    </Paper>

    </>
  );
};

export default ScoreCard;