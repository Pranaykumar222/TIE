import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Profilephoto from "../../assets/Profilephoto.jpg";


const Welcome = () => {
  return (
    <Box>
      <Grid container>
        <Grid item>
          <Box
            sx={{
              width: "350px",
              height: "728px",
              ml: "43px",
              mr: "32px",
              background: "linear-gradient(to bottom, #D9FEFF, #00959A)",
              borderBottomLeftRadius: "193px",
              borderBottomRightRadius: "193px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Welcome Text Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: 2,
                mt: "84px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "40px",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  color: "#000",
                  textAlign: "center",
                  mb: 1,
                }}
              >
                ~Welcome Back~
              </Typography>
              <Typography
                sx={{
                  fontSize: "40px",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  color: "#000",
                  textAlign: "center",
                  mb: 1,
                }}
              >
                Riya
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  color: "#343434",
                  textAlign: "center",
                  mb: "70px",
                }}
              >
                Let’s start your preparation with <br />
                Upcoming Classes of IELTS
              </Typography>
            </Box>

            {/* Profile Image */}
            <Box
              component="img"
              src={Profilephoto}
              alt="Riya"
              sx={{
                width: "285px",
                height: "348.5px",
                mb:"10px",
                objectFit: "cover",
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
                borderBottomLeftRadius: "200px",
                borderBottomRightRadius: "200px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;

