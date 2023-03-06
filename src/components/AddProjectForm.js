import React, { useState, useEffect, useRef } from 'react';


const AddProjectForm = () => {
  const [categories, setCategories] = useState([]);
  const titleRef= useRef();
  const descriptionRef= useRef();
  const categoryRef= useRef();
  
  

  useEffect(() => {    

    fetch('http://localhost:8000/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))      
  }, []);

const submitformhandler= (e) =>{
e.preventDefault();
const formData = {
  title: titleRef.current.value,
  description: descriptionRef.current.value,
  category_id: categoryRef.current.value,
};
fetch('http://localhost:8000/project', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
  }

  return (
    <form onSubmit={submitformhandler} style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px',
      backgroundColor: '#f2f2f2'
    }}>
      <label style={{ 
        fontSize: '18px', 
        marginBottom: '10px' 
      }}>Add a Project</label>
      <input type="text" name='title' placeholder='Title' ref={titleRef} style={{ 
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        marginBottom: '10px',
        width: '100%'
      }} />
      <textarea name='description' id='description' cols="30" rows='10' placeholder='Description' ref={descriptionRef} style={{ 
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        marginBottom: '10px',
        width: '100%'
      }}></textarea>
      <select name='category_id' id='category_id' ref={categoryRef} style={{ 
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        marginBottom: '10px',
        width: '100%'
      }}>
        {categories.map((category) => (
          <option key={category.id}> {category.name}</option>
        ))}
      </select>
      <button style={{ 
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>Submit</button>
    </form>
  );
}

export default AddProjectForm;
