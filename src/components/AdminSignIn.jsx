import React, { useState } from 'react';
import { AdminSignInContainer, FormContainer, InputField, SubmitButton, Logo } from '../styles/AdminSignInStyles'; // Correct import
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    try {
      // Simulate successful sign-in and redirect
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <AdminSignInContainer>
      <Logo src={logo} alt="Logo" onClick={() => navigate('/')} />
      <h2>Admin Sign In</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> 
        <SubmitButton as="a" onClick={handleSignIn}>Sign In</SubmitButton>
      </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdminSignIn;
