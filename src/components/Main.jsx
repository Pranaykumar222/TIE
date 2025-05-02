import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Grid,
  Button,
  LinearProgress,
  Divider,
  colors,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentIcon from "@mui/icons-material/Assignment";
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import Caplogo from "../assets/Caplogo.png"
import Welcome from "./ui/Welcome";
import ScoreCard from "./ui/ScoreCard";
import Group from "../assets/Group.png"
import Chat from "../assets/Chat.png"

const user = {
  name: "Riya",
  photo: "https://randomuser.me/api/portraits/women/44.jpg",
  examDate: "2024-07-17",
  daysToGo: 24,
  classes: [
    {
      title: "Grammar Classes for IELTS",
      date: "24 June 2024, 9:00 AM - 11:00 AM",
    },
    {
      title: "Grammar Classes for IELTS",
      date: "25 June 2024, 9:00 AM - 11:00 AM",
    },
    {
      title: "Grammar Classes for IELTS",
      date: "26 June 2024, 9:00 AM - 11:00 AM",
    },
  ],
  attendance: { online: 0, offline: 0, mentor: 0, total: 6 },
  submission: { assignment: 0, practice: 0, total: 6 },
  mock: {
    last: 368,
    target: 700,
    reading: 70,
    speaking: 60,
    writing: 70,
    grammar: 70,
    overall: 70,
  },
};

const Main = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 4,
        background: "#F8F8F8",
        minHeight: "100vh",
        ml: "200px", 
        mt: "54px",
      }}
    >
      <Grid container spacing={3}>
       
        <Grid item xs={12} md={6}>
          <Welcome />
        </Grid>
        <Grid item xs={12} md={6}>
          <ScoreCard user={user}/>
        </Grid>


        <Box sx={{ p: 2 }}>
    
        <Box width={"1114px"} height={"450px"} display={"flex"} justifyContent={"space-between"} >

          <Paper
            elevation={1}
            sx={{
              mb: 4,
              p: 2,
              borderRadius: 3,
              backgroundColor: "transparent",
              boxShadow:"none",
              textAlign: "center",
              width:"328px",
              height:"369px",
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="flex-start" gap={1} marginBottom={"6px"}>
            <Typography variant="subtitle2" fontWeight="500" fontSize={"24px"} color="#00999E" fontFamily={"Poppins"}>
                Exam Date
              </Typography>
            </ Box>  
            <Box sx={{border:"1px solid #B9B9B9" ,borderRadius:"4px"}}>
<Box >
            <Box
      sx={{
        width: "200px",
        height: "230px",
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#fff",
        fontFamily: "Poppins, sans-serif",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        margin:"36px 45px 25px 63px",
      }}
    >
   
      <Box
        sx={{
          background: "linear-gradient(to bottom, #4FC3C9, #007B8C)",
          color: "#fff",
          padding: "8px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          position: "relative",
          height:"74px"
        }}
      >
      
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "25px",
            width: "14px",
            height: "24px",
            borderRadius: "0 0 8px 8px",
            backgroundColor: "#fff",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: "25px",
            width: "14px",
            height: "24px",
            borderRadius: "0 0 8px 8px",
            backgroundColor: "#fff",
          }}
        />
        <Typography variant="h6" fontWeight="500" fontFamily={"Poppins"} fontSize={"40px"}>
          July
        </Typography>
      </Box>

  
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: "72px", color: "#000" }}
        >
          17
        </Typography>
      </Box>
    </Box>
    </Box>
 
            <Box display="flex" alignItems="center" justifyContent="flex-start" p="6px" borderTop={"1px solid #ABABAB"}>
            <CalendarMonthIcon color="primary" sx={{width:"29px", borderRadius:"4px", p:"6px"}} border={"1px solid"}/>
            <Typography variant="body2" color="#00999E" fontFamily={"Poppins"} fontSize={"20px"} fontWeight={"500px"} mr={"18px"}>
              {user.daysToGo} days <span style={{ color: "#777777" }}>to go &gt;&gt;&gt;&gt;&gt;&gt;</span>
            </Typography>

            </Box>
            </Box>
          </Paper>


       <Box display={"flex"} flexDirection={"column"} p={2}>
        <Typography variant="subtitle2" fontWeight="500" fontSize={"24px"} color="#00999E" fontFamily={"Poppins"}>
              Upcoming Classes
            </Typography>
          <Paper elevation={0} sx={{ borderRadius: 3,pt:1,pl:0, height: "369px" ,width: "757px", backgroundColor: "transparent" ,   boxShadow: "none"}}>
            {user.classes.map((cls, idx) => (
              <Box
                key={idx}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                height={"111px"}
                border={"1px solid #B9B9B9"}
              >
                <Box display="flex" alignItems="center" gap={1}>
                    <Box sx={{backgroundColor:"#00999E4D", borderRadius:"30px", width:"40px" ,height:"40px" ,display:"flex",justifyContent:"center",alignItems:"center",mr:"21px",ml:"24px"}}>
                  <VideocamOutlinedIcon color="#00999E4D" />
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight="500" fontFamily={'Poppins'} fontSize={"20px"} color="#4C4C4C">
                      {cls.title}
                    </Typography>
                    <Typography variant="caption" fontWeight="500" fontFamily={'Poppins'} fontSize={"14px"} color="#4C4C4C">
                      {cls.date}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    width:"133px",
                    height:"40px",
                    borderRadius: "10px",
                    fontSize: "20px",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    background: "#00999E",
                    "&:hover": { background: "#007B7A" },
                    mr:"24px"
                  }}
                >
                  Join
                </Button>
              </Box>
            ))}
          </Paper>
          </Box> 

        </Box>
        </Box>
        </Grid>




      <Box 
      sx={{
        background: 'linear-gradient(to bottom right, #e6f4f9, #d4f0f6)',
        padding: 4,
        borderRadius: 4,
        border: '1px solid #cce0e4',
        position: 'relative',
        overflow: 'hidden',
        display:"flex",flexDirection:"column",justifyContent:"space-between"
      }}
    >
      <Box sx={{
    display: 'flex', 
    justifyContent: 'center', 
    mt:"32px"
  }}>
      <Paper 
        elevation={0}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          width:"525px",
          height:"74px",
          padding: '8px 16px',
          borderRadius: '20px',
          mb: 2,
          background: 'linear-gradient(to right, #FFFFFF, #DEDEDE)'
        }}
      >
        <img 
          src={Caplogo} 
          alt="Graduation Cap"
          style={{ width: "61px", height: "52px", marginRight: 8 }}
        />
        <Typography variant="h6" fontWeight="400" fontFamily={"Poppins"} fontSize={"34px"} color="#4D4D4D">
          Connect With Our Faculty
        </Typography>
      </Paper>
      </Box>

      <Typography variant="h5" align="center" fontWeight="400" fontSize={"34px"} color="#171717" mt={"24px"} mb={3}>
        Schedule Your Initial Orientation & Doubt Clearance<br />
        sessions with our faculty
      </Typography>

      <Box textAlign="center" mt={"16px"} mb={4}>
        <Button 
          variant="contained"
          sx={{
            backgroundColor: '#3b9aa4',
            padding: '10px 32px',
            fontWeight: 'bold',
            width:"290px",
            height:"55px",
            borderRadius:"10px",
            '&:hover': {
              backgroundColor: '#318f99',
            }
          }}
        >
          SCHEDULE
        </Button>
      </Box>

      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <img src={Group} alt="Group 1" style={{ maxWidth: '45%', height: 'auto' }} />
        <img src={Chat} alt="Group 2" style={{ maxWidth: '45%', height: 'auto' }} />
      </Box>
    </Box>
    
    </Box>


  );
};

export default Main;