import { useState } from 'react';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AddProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectCategory, setProjectCategory] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the submission of the form and add the new project
    // to the list of projects in your app's state
    const newProject = {
  name: projectName,
  category: projectCategory,
  details: projectDetails,
  assignedTo: assignedTo,
  dueDate: dueDate
};

fetch('http://localhost:8000/project', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newProject)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
  
setProjectName('');
setProjectCategory('');
setProjectDetails('');
setAssignedTo('');
setDueDate('');

  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Project Name"
          value={projectName}
          onChange={(event) => setProjectName(event.target.value)}
          required
          sx={{ my: 1, width: '100%' }}
        />
        <FormControl sx={{ my: 1, width: '100%' }} required>
          <InputLabel id="project-category-label">Project Category</InputLabel>
          <Select
            labelId="project-category-label"
            value={projectCategory}
            onChange={(event) => setProjectCategory(event.target.value)}
          >
            <MenuItem value="Category A">FreeLance</MenuItem>
            <MenuItem value="Category B">Proffesional</MenuItem>
            <MenuItem value="Category C">Lowcome</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Project Details"
          value={projectDetails}
          onChange={(event) => setProjectDetails(event.target.value)}
          required
          multiline
          rows={4}
          sx={{ my: 1, width: '100%' }}
        />
        <TextField
          label="Assigned To"
          value={assignedTo}
          onChange={(event) => setAssignedTo(event.target.value)}
          required
          sx={{ my: 1, width: '100%' }}
        />
        <TextField
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
          required
          sx={{ my: 1, width: '100%' }}
        />
        <Button type="submit" variant="contained" sx={{ my: 1 }}>
          Add Project
        </Button>
      </form>
    </Box>
  );
};

export default AddProjectForm;
