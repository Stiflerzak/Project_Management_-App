import React, { useState, useEffect, useRef } from "react";

const ProjectList = () => {
  const [categories, setCategories] = useState([]);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const submitformhandler = (e) => {
    e.preventDefault();
    const formData = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      category_id: categoryRef.current.value,
    };
    fetch("http://localhost:8000/project", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={submitformhandler}>
      <input
        type="text"
        name="title"
        placeholder="add a project"
        ref={titleRef}
      />
      <br />
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        ref={descriptionRef}
      ></textarea>
      <br/>
      <select name="category_id" id="category_id" ref={categoryRef}>
        {categories.map((category) => (
          <option key={category.id}> {category.name}</option>
        ))}
      </select>
      <button>Submit</button>
    </form>
  );
};

export default ProjectList;
