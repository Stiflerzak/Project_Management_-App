import { useEffect, useState } from 'react';
import { Card, CardContent, IconButton, List, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    // fetch projects data from server
    fetch('http://localhost:8000/projects')
      .then((response) => response.json())
      .then((data) => {
        // Sort projects in descending order based on their created_at property
        const sortedProjects = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setProjects(sortedProjects);
      })
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

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/projects/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // remove the deleted project from the list
        setProjects(projects.filter((project) => project.id !== id));
      })
      .catch((error) => console.error(error));
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
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
                <IconButton onClick={() => handleDelete(project.id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </div>
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

