import React from 'react';
import AddProjectForm from './AddProjectForm';
import ProjectsList from './ProjectList';
import UsersList from './UsersList';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {/* Left column: Add Project dashboard */}
        
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                <AddProjectForm/>
              </Typography>
              {/* Form for adding new projects */}
            </CardContent>
          </Card>
        </Grid>

        {/* Center column: Display all projects */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                <ProjectsList/>
              </Typography>
              {/* List of all projects and their due dates */}
            </CardContent>
          </Card>
        </Grid>

        {/* Right column: Display all logged in users */}
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                <UsersList/>
              </Typography>
              {/* List of all logged in users */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
