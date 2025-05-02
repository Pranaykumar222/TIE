import React, { useState, useRef, useContext, useEffect } from 'react';
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
  Alert,
} from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { Edit, Upload } from 'lucide-react';
import Profilephoto from '../assets/Profilephoto.jpg';

const drawerWidth = 0;

const Profile = () => {
  const fileInputRef = useRef(null);
  const { user, updateProfile } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  const [previewUrl, setPreviewUrl] = useState(Profilephoto);
  const [openSnackbar, setOpenSnackbar] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <Box
      sx={{
        pt: { xs: '80px', sm: '80px', md: '0px' }, // navbar height
        backgroundColor: '#F5F5F5',mt:"90px",
        display:"flex",
        justifyContent:"center",
        alignContent:"center"
      }}
    >
      <Paper
        component="form"
        sx={{
          p: 4,
          borderRadius: 2,
          width: '100%',
          maxWidth: '1100px',
          mx: 'auto',
          backgroundColor: 'white',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Profile Picture Section */}
          <Box sx={{ position: 'relative', mb: 4, mr: 4, width: '234px', height: '220px' }}>
            <Box
              sx={{
                position: 'relative',
                width: '234px',
                height: '220px',
                borderRadius: '30px',
                backgroundColor: '#00999E',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                src={previewUrl}
                alt={formData.name}
                sx={{ width: '199px', height: '199px', my: '5px' }}
              />
              <input type="file" hidden ref={fileInputRef} onChange={handleFileChange} />
            </Box>
            <Box
              sx={{
                width: '234px',
                height: '48px',
                borderRadius: '10px',
                mt: '15px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#D2FEFF',
              }}
            >
              <Typography
                variant="body2"
                sx={{ ml: 2, cursor: 'pointer', fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400 }}
                onClick={handleFileSelect}
              >
                Update Profile
              </Typography>
              <IconButton
                sx={{
                  backgroundColor: '#D2FEFF',
                  color: '#000000',
                  mr: 1,
                }}
                onClick={handleFileSelect}
              >
                <Edit size={20} />
              </IconButton>
            </Box>
          </Box>

          {/* Form Fields Section */}
          <Box sx={{ flex: 1, minWidth: '300px' }}>
            <Grid container spacing={3} direction="column">
              {[
                { label: 'Full Name', name: 'name', placeholder: 'Enter your name' },
                { label: 'Phone Number', name: 'phone', placeholder: 'Enter your phone number' },
                { label: 'E-Mail', name: 'email', placeholder: 'Enter your email' },
                { label: 'Location', name: 'location', placeholder: 'Enter your location' },
              ].map(({ label, name, placeholder }) => (
                <Grid item xs={12} key={name}>
                  <Typography
                    variant="h6"
                    sx={{ mb: 1, fontFamily: 'Poppins', fontSize: '24px', fontWeight: 500 }}
                  >
                    {label}
                  </Typography>
                  <TextField
                    fullWidth
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    sx={{
                      height: '60px',
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
              ))}

              {/* Document Upload */}
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{ mb: '12px', fontFamily: 'Poppins', fontSize: '24px', fontWeight: 500 }}
                >
                  Upload Document
                </Typography>
                <Box
                  sx={{
                    border: '2px dashed #ccc',
                    borderRadius: 2,
                    p: 4,
                    textAlign: 'center',
                    backgroundColor: '#DEF2F3',
                    cursor: 'pointer',
                  }}
                  onClick={handleFileSelect}
                >
                  <Upload size={40} color="#50A5A5" />
                  <Typography variant="body1" sx={{ mt: 2, fontSize: '18px', fontWeight: 500 }}>
                    Drag and Drop Or Select to upload your Document
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontSize: '12px' }}>
                    JPG, PNG or PDF, file size no more than 10MB
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 2,
                      fontSize: '18px',
                      fontWeight: 400,
                      borderColor: '#50A5A5',
                      color: '#08829D',
                      backgroundColor: '#FBFDFE',
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

              {/* Submit Button */}
              <Grid item xs={12} sx={{ textAlign: 'center', mt: 3 }}>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    width: '305px',
                    height: '65px',
                    borderRadius: '10px',
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
