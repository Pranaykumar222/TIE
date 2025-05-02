import React from 'react';
import { Container } from '@mui/material';
import LoginImage from '../components/LoginImage';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
    <>
      <Container
        sx={{
          mx: '2px',
          display: 'flex',
          flexDirection: {
            xs: 'column', 
            sm: 'row', 
          },
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100vh', 
        }}
      >
        <LoginImage />
        <LoginForm />
      </Container>
    </>
  );
}

export default LoginPage;


