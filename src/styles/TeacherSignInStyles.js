import styled from 'styled-components';

export const TeacherSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  min-height: 100vh;
`;

export const Logo = styled.img`
  width: 100px;
  cursor: pointer;
  margin-top: 20px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: dodgerblue;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 30px; /* Centering adjustment */
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.a`
  background-color: lightblue;
  color: black;
  border: none;
  padding: 10px 20px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top: 15px;

  &:hover {
    background-color: lightgreen;
    color: white;
  }
`;
