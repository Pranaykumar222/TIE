import React, { useState, useRef, useContext, useEffect  } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  Avatar,
  Snackbar,
  Alert
} from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { Edit, Upload } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Profilephoto from "../assets/Profilephoto.jpg"

const Profile = () => {
  const fileInputRef = useRef(null);
  const { user, updateProfile } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        location: user.location || '',
      });
      if (user.profilePicture) setPreviewUrl(user.profilePicture);
    }
  }, [user]);
  

  const [previewUrl, setPreviewUrl] = useState(Profilephoto);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ ...formData, profilePicture: previewUrl });
    setOpenSnackbar(true);
  };
  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Box sx={{ width: 240, flexShrink: 0 }}>
          <Sidebar />
        </Box>

        <Box sx={{ flex: 1, p: 3, overflow: 'auto', mt: "65px" }}>
          <Paper
            component="form"
            sx={{
              p: 2,
              borderRadius: 2,
              Width: "1000px",
              mx: 'auto',
              backgroundColor: "white"
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
             
              <Box sx={{ position: 'relative', mb: 4, mr: 4 ,width:"200px",height:"200px"}}>
                <Box sx={{ position: 'relative', width: "234px", height: "220px",borderRadius:"30px", backgroundColor:"#00999E",display:"flex",justifyContent:"center",alignContent:"center"}}>
                  
                  
                <Avatar
                    src={previewUrl} 
                    alt={formData.name}
                    sx={{ width: "199px", height: "199px",my:"5px" }}
                  />
                  
                  <input
                    type="file"
                    hidden
                    ref={fileInputRef}
                    onChange={handleFileChange}/>
                </Box>
                <Box sx={{width:"234px",height:"48px",borderRadius:"10px" ,mt:"15px",display:"flex",justifyContent:"space-between",alignContent:"center", backgroundColor:"#D2FEFF"}}>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{ mt: 1, cursor: 'pointer', fontFamily:"Poppins",fontSize:"16px",fontWeight:400,my:"12px",ml:"16px" }}
                  onClick={handleFileSelect}
                >
                  Update Profile
                </Typography>
                <IconButton
                    
                    sx={{
                      position: 'absolute',
                      bottom:"-75px",
                      right:"-15px",
                      backgroundColor: '#D2FEFF',
                      color: '#000000',
                      
                    }}
                    onClick={handleFileSelect}
                  >
                    <Edit size={20} />
                  </IconButton>
                </Box>
              </Box>

          
              <Box sx={{ flex: 1 }} width={"790px"} ml="38px">
                <Grid container spacing={3} direction="column">
                  <Grid item xs={12} width={"790px"}>
                    <Typography variant="h6" sx={{ mb: 1,fontFamily:"Poppins",fontSize:"24px",fontWeight:"500",color:"#1C1C1D" }}>
                      Full Name
                    </Typography>
                    <TextField
                        fullWidth
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        sx={{
                            width: '790px',
                            height: '60px',
                            p: '4px',
                            gap: '12px',
                            backgroundColor: '#00999E21',
                            '& .MuiOutlinedInput-root': {
                            height: '100%',
                            padding: '0 12px',
                            borderRadius: '8px',
                            '& fieldset': {
                                border: 'none',
                            },
                            '& input': {
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                fontWeight: 500,
                                color: '#606060',
                            },
                            },
                        }}
                        />

                  </Grid>

                  <Grid item xs={12} width={"790px"}>
                    <Typography variant="h6" sx={{ mb: 1,fontFamily:"Poppins",fontSize:"24px",fontWeight:"500",color:"#1C1C1D" }}>
                      Phone Number
                    </Typography>
                    <TextField
                        fullWidth
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        sx={{
                            width: '790px',
                            height: '60px',
                            p: '4px',
                            gap: '12px',
                            backgroundColor: '#00999E21',
                            '& .MuiOutlinedInput-root': {
                            height: '100%',
                            padding: '0 12px',
                            borderRadius: '8px',
                            '& fieldset': {
                                border: 'none',
                            },
                            '& input': {
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                fontWeight: 500,
                                color: '#606060',
                            },
                            },
                        }}
                        />
                  </Grid>

                  <Grid item xs={12} width={"790px"}>
                    <Typography variant="h6" sx={{ mb: 1,fontFamily:"Poppins",fontSize:"24px",fontWeight:"500",color:"#1C1C1D" }}>
                      E-Mail
                    </Typography>
                    <TextField
                        fullWidth
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        sx={{
                            width: '790px',
                            height: '60px',
                            p: '4px',
                            gap: '12px',
                            backgroundColor: '#00999E21',
                            '& .MuiOutlinedInput-root': {
                            height: '100%',
                            padding: '0 12px',
                            borderRadius: '8px',
                            '& fieldset': {
                                border: 'none',
                            },
                            '& input': {
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                fontWeight: 500,
                                color: '#606060',
                            },
                            },
                        }}
                        />

                  </Grid>

                  <Grid item xs={12} width={"790px"}>
                    <Typography variant="h6" sx={{ mb: 1,fontFamily:"Poppins",fontSize:"24px",fontWeight:"500",color:"#1C1C1D" }}>
                      Location
                    </Typography>
                    <TextField
                        fullWidth
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        sx={{
                            width: '790px',
                            height: '60px',
                            p: '4px',
                            gap: '12px',
                            backgroundColor: '#00999E21',
                            '& .MuiOutlinedInput-root': {
                            height: '100%',
                            padding: '0 12px',
                            borderRadius: '8px',
                            '& fieldset': {
                                border: 'none',
                            },
                            '& input': {
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                fontWeight: 500,
                                color: '#606060',
                            },
                            },
                        }}
                        />
                  </Grid>

                  <Grid item xs={12} width={"790px"}>
                    <Typography variant="h6" sx={{ mb: "12px" ,fontFamily:"Poppins",fontSize:"24px",fontWeight:500,color:"#1C1C1D"}}>
                      Upload Document
                    </Typography>
                    <Box
                      sx={{
                        border: '2px dashed #ccc',
                        borderRadius: 2,
                        p: 4,
                        textAlign: 'center',
                        backgroundColor: '#DEF2F3',
                        cursor: 'pointer'
                      }}
                      onClick={handleFileSelect}
                    >
                      <Upload size={40} color="#50A5A5" />
                      <Typography variant="body1" sx={{ mt: 2,fontFamily:"Poppins",fontSize:"18px",fontWeight:500,color:"#606060" }}>
                        Drag and Drop Or Select to upload your Document
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1,fontFamily:"Poppins",fontSize:"12px",fontWeight:400,color:"#9BA1B2"  }}>
                        JPG, PNG or PDF, file size no more than 10MB
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          mt: 2,
                          fontFamily:"Poppins",fontSize:"18px",fontWeight:400,
                          borderColor: '#50A5A5',
                          color: '#08829D',
                          backgroundColor:"#FBFDFE",
                          textTransform: 'none',
                        
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFileSelect();
                        }}
                      >
                        Select File
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sx={{ textAlign: 'center', mt: 3 }}>
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{
                        width:"305px",
                        height:"65px",
                        borderRadius:"10px",
                        backgroundColor: '#00999E',
                        py: 1.5,
                        px: 5,
                      }}
                    >
                      SUBMIT
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Profile updated successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Profile;
