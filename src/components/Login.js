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

import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (event) => {
      event.preventDefault();
      const users = JSON.parse(localStorage.getItem('users'));
      const user = users.find((u) => u.email === email && u.password === password);
      if (user) {
        alert(`Welcome, ${user.name}!`);
      } else {
        alert('Invalid email or password.');
      }
    };
    return (
        <form class="container" >
            <h2>Login Here</h2>
            <div class="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3 col-lg-6">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
            </div>
            <Link to="/pages"><button type="submit" onSubmit={handleLogin} class="btn btn-success">Submit</button></Link>
        </form>
    )
}
export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registration Successful!');
    };
    return (
        <form className="container">
            <h2>Register Here</h2>
            <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="fs-6">We'll Keep your information classified.</div>
            </div>
            <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-success">Submit</button>
            <Link to="/login"><button className="btn btn-primary ms-2">Login Here</button></Link>
        </form>
    )
}
export default Register;