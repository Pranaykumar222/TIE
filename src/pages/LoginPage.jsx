import React from 'react';
import { Container, Box } from '@mui/material';
import LoginImage from '../components/LoginImage';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, sm: 4 },
        gap: 3,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          mb: { xs: 4, md: 0 },
        }}
      >
        <LoginImage />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <LoginForm />
      </Box>
    </Container>
  );
}

export default LoginPage;








