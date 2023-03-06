import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
  };

  return (
    <Box sx={containerStyle}>
      <Container maxWidth="md">
        <Typography variant="h1" align="center" gutterBottom>
          Welcome to My Project Management App!
        </Typography>
        <Box sx={formStyle}>
          <Typography variant="h5" align="center" gutterBottom>
            Log in to your account
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              sx={{ marginBottom: '16px' }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              size="small"
              type="password"
              sx={{ marginBottom: '16px' }}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button variant="contained" type="submit">
              Log in
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;

