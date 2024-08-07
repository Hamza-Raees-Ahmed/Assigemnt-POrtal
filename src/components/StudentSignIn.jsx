import React, { useState } from 'react';
import { StudentSignInContainer, FormContainer, InputField, SubmitButton, Logo } from '../styles/StudentSignInStyles';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const StudentSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log('Student Sign In:', { email, password });
    navigate('/student/dashboard');
  };

  return (
    <StudentSignInContainer>
      <Logo src={logo} alt="Logo" onClick={() => navigate('/')} />
      <h2>Student Sign In</h2>
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
    </StudentSignInContainer>
  );
};

export default StudentSignIn;
