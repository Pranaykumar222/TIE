import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import AttendanceRateCard from './AttendanceRateCard';

const ScoreCard = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isMdScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const attendanceData = [
    { label: "Online Class", highlight: "0/6" },
    { label: "Offline Class", highlight: "0/6" },
    { label: "Mentor Connections", highlight: "0/6" },
  ];

  const submissionData = [
    {label:"Assignment", highlight:"0/6"},
    {label:"Practice", highlight:"0/6"}
  ];

  return (
    <Paper 
      variant="outlined" 
      sx={{ 
        borderBottom: 3, 
        p: { xs: 2, sm: 2, md: 3 }, 
        borderColor: '#00999E',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <Typography 
        variant="h5" 
        fontSize={{ xs: "18px", sm: "20px", md: "25px" }} 
        fontWeight={500} 
        color="#00999E" 
        mb={2}
      >
        Score & Certificate
      </Typography>
      
      <Box display={"flex"}>
      <AttendanceRateCard title="Attendance Rate" data={attendanceData} />
      <AttendanceRateCard title="Submission Rate" data={submissionData} />
      
      </Box>
      
      
    
      <Box sx={{ border: '1px solid #00999E', borderRadius: 2, width: '100%' }}>
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center" 
          p={"2px"} 
          borderBottom="1px solid #b2ebf2" 
          width="100%" 
          height={{ xs: "40px", sm: "48px" }}
        >
          <Typography 
            variant="subtitle1" 
            fontWeight={500} 
            fontFamily="Poppins" 
            fontSize={{ xs: "16px", sm: "17px", md: "18px" }} 
            color="#00999E"
            ml="16px"
          >
            Mock Test Rate
          </Typography>
          <Chip 
            label="20%" 
            sx={{ 
              width: { xs: "55px", sm: "61px" }, 
              height: { xs: "28px", sm: "32px" }, 
              p: "8px", 
              borderRadius: "20px", 
              background: '#00999E', 
              color: 'white', 
              fontWeight: 500, 
              fontSize: { xs: "10px", sm: "12px" }, 
              fontFamily: "Poppins",
              mr:"20px" 
            }} 
            size="small"  
          />
        </Box>
        
        <Grid container spacing={2} p={{ xs: 1, sm: 2 }}>
        
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Box sx={{ display: 'flex', p: 1, flexDirection: { xs: 'row', sm: 'row', md: 'column' }, gap: { xs: 2, md: 0 } }}>
            
              <Box sx={{ width: { xs: '45%', sm: '164px', md: '100%' } }}>
                <Box 
                  sx={{ 
                    mb: { xs: 0, md: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    border: "1px solid #00999E",
                    borderRadius: "6px"
                  }}
                >
                  <Box
                    sx={{
                      background: 'linear-gradient(to right, #4aa3a3, #3d8a8a)',
                      p: { xs: 1, sm: 2 },
                      borderTopLeftRadius: '6px',
                      borderTopRightRadius: '6px',
                      textAlign: 'center',
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: { xs: '0.9rem', sm: '1.25rem' }
                      }}
                    >
                      Last Score
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: '1px solid #ddd',
                      p: { xs: 1, sm: 2 },
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
                        px: { xs: 2, sm: 4 },
                        py: 1,
                        width: '80%',
                        textAlign: 'center'
                      }}
                    >
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          color: '#b96e73',
                          fontWeight: 'medium',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
                        }}
                      >
                        368
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

          
              <Box sx={{ width: { xs: '45%', sm: '164px', md: '100%' } }}>
                <Box 
                  sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    border: "1px solid #00999E",
                    borderRadius: "6px"
                  }}
                >
                  <Box
                    sx={{
                      background: 'linear-gradient(to right, #4aa3a3, #3d8a8a)',
                      p: { xs: 1, sm: 2 },
                      borderTopLeftRadius: '6px',
                      borderTopRightRadius: '6px',
                      textAlign: 'center'
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: { xs: '0.9rem', sm: '1.25rem' }
                      }}
                    >
                      Target Score
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: '1px solid #ddd',
                      p: { xs: 1, sm: 2 },
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
                        px: { xs: 2, sm: 4 },
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
                          fontWeight: 'medium',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
                        }}
                      >
                        700
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid> 
          
       
          <Grid 
            item 
            xs={12} 
            md={8} 
            display="flex" 
            flexDirection="column" 
            alignItems={{ xs: "center", md: "flex-end" }}
            sx={{ pl: { md: 2 } }}
          >
            {[
              { label: 'Reading', value: 70 },
              { label: 'Speaking', value: 60 },
              { label: 'Writing', value: 70 },
              { label: 'Grammar', value: 70 },
              { label: 'Over All', value: 70 },
            ].map((item) => (
              <Box 
                key={item.label} 
                sx={{ 
                  position: 'relative', 
                  py: { xs: "8px", sm: "16px" }, 
                  width: { xs: '250px', sm: '280px', md: '312px' }, 
                  height: '40px' 
                }}
              >
                <Box
                  sx={{
                    background: '#CCFDFF',
                    borderTopRightRadius: '30px',
                    borderBottomRightRadius: '30px',
                    height: '100%',
                    px: { xs: 2, sm: 4 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000000',
                    fontWeight: 500,
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    fontFamily: "Poppins",
                  }}
                >
                  {item.label}
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
                    fontWeight: 600,
                    fontSize: { xs: 14, sm: 16 },
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
  );
};

export default ScoreCard;