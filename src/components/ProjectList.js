import { useEffect, useState } from 'react';
import { Card, CardContent, List, ListItem, Typography } from '@mui/material';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    // fetch projects data from server
    fetch('https://api.npoint.io/019402c531ba8aacc92d')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 3);
    }
  };

  const handleNext = () => {
    if (startIndex < projects.length - 3) {
      setStartIndex(startIndex + 3);
    }
  };

  return (
    <div>
      <Typography variant="h5" component="h2" style={{ marginBottom: '16px' }}>
        All Projects
      </Typography>
      <List sx={{ width: '100%', overflow: 'auto' }}>
        {projects.slice(startIndex, startIndex + 3).map((project) => (
          <ListItem key={project.id}>
            <Card style={{ width: '100%' }}>
              <CardContent>
                <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                  {project.title}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '8px' }}>
                  <strong>Description: </strong>{project.description}
                </Typography>
                <Typography variant="subtitle2" style={{ marginBottom: '4px' }}>
                  <strong>Category: </strong>{project.category_id}
                </Typography>
                <Typography variant="subtitle2" style={{ marginBottom: '4px' }}>
                  <strong>Status: </strong>{project.status ? 'Active' : 'Inactive'}
                </Typography>
                <Typography variant="subtitle2">
                  <strong>Created at: </strong>{new Date(project.created_at).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <button onClick={handlePrev} disabled={startIndex === 0}>Prev</button>
        <button onClick={handleNext} disabled={startIndex >= projects.length - 3}>Next</button>
      </div>
    </div>
  );
};

export default ProjectsList;
