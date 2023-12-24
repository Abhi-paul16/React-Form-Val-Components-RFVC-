"use client"
import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';


const LoginWithPasswordMUIJS = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
          isValid = false;
        }
    
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
          isValid = false;
        } else if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
          newErrors.email = 'Invalid email format';
          isValid = false;
        }
    
        if (!formData.password.trim()) {
          newErrors.password = 'Password is required';
          isValid = false;
        } else if (
          formData.password.length < 8 ||
          formData.password.length > 20
        ) {
          newErrors.password = 'Password must be between 8 and 20 characters';
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        if (validateForm()) {
          // Perform your login logic here
          console.log('Form submitted:', formData);
        }
      };
    
      return (
        <Container maxWidth="xs">
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" align="center" gutterBottom>
              Login
            </Typography>
            <TextField
              label="Name*"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              label="Email*"
              fullWidth
              margin="normal"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Password*"
              fullWidth
              margin="normal"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </Container>
      );
}

export default LoginWithPasswordMUIJS