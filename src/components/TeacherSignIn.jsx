import React, { useState } from 'react';
import { TeacherSignInContainer, FormContainer, InputField, SubmitButton, Logo } from '../styles/TeacherSignInStyles';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const TeacherSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log('Teacher Sign In:', { email, password });
    navigate('/teacher/dashboard');
  };

  return (
    <TeacherSignInContainer>
      <Logo src={logo} alt="Logo" onClick={() => navigate('/')} />
      <h2>Teacher Sign In</h2>
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
    </TeacherSignInContainer>
  );
};

export default TeacherSignIn;
