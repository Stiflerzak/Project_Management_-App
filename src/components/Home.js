import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from '@mui/material';

const Home = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [startingTime, setStartingTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`New project name: ${projectName}`);
    console.log(`Description: ${description}`);
    console.log(`Starting time: ${startingTime}`);
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
        <Typography variant="body1" align="center">
          This is a simple project management app built using React and @mui/material.
        </Typography>
        <Card sx={{ marginTop: '32px' }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Create a new project
            </Typography>
            <Box sx={formStyle}>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Project name"
                  variant="outlined"
                  size="small"
                  sx={{ marginBottom: '16px' }}
                  value={projectName}
                  onChange={(event) => setProjectName(event.target.value)}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  size="small"
                  sx={{ marginBottom: '16px' }}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
                <TextField
                  label="Starting time"
                  variant="outlined"
                  size="small"
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ marginBottom: '16px' }}
                  value={startingTime}
                  onChange={(event) => setStartingTime(event.target.value)}
                />
                <Button variant="contained" type="submit">
                  Create
                </Button>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Home;
