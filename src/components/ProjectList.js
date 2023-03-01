import { useEffect, useState } from 'react';
import { Card, CardContent, List, ListItem, Typography } from '@mui/material';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // fetch projects data from server
    fetch('/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          All Projects
        </Typography>
        <List>
          {projects.map((project) => (
            <ListItem key={project.id}>
              <Typography>{project.name}</Typography>
              <Typography>{project.category}</Typography>
              <Typography>{project.details}</Typography>
              <Typography>{project.assigned_to}</Typography>
              <Typography>{project.due_date}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ProjectsList;
