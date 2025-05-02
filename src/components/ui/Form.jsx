import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

const Form = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const userData = { name: formData.username, email: 'demo@email.com' };
      login(userData);
      navigate('/dashboard');
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '329px' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            fontFamily: 'Poppins',
            color: '#5B5B5B',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>

      
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '42px' }}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              color: '#000000',
            }}
          >
            User name
          </Typography>
          <TextField
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            placeholder="Enter your User name"
            error={!!errors.username}
            helperText={errors.username}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '7px',
                '& fieldset': {
                  border: '1px solid #00999E',
                },
                '& input': {
                  paddingLeft: '31px',
                  fontFamily: 'Poppins',
                  fontWeight: 300,
                  fontSize: '15px',
                  color: '#ACACAC',
                },
              },
            }}
          />
        </Box>

        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              color: '#000000',
              marginTop: '20px',
              fontFamily: 'Poppins',
            }}
          >
            Password
          </Typography>
          <TextField
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            placeholder="Enter your password"
            error={!!errors.password}
            helperText={errors.password}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '7px',
                '& fieldset': {
                  border: '1px solid #00999E',
                },
                '& input': {
                  paddingLeft: '31px',
                  fontFamily: 'Poppins',
                  fontWeight: 300,
                  fontSize: '15px',
                  color: '#ACACAC',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggle} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        
        <Button
          type="submit"
          variant="contained"
          sx={{
            marginTop: '32px',
            backgroundColor: '#00999E',
            color: 'white',
            borderRadius: '7px',
            height: '48px',
            fontFamily: 'Poppins',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#007B7A',
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
