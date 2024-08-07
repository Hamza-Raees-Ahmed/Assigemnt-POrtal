// ChooseUserStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white; /* Background color */
  
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  color: DodgerBlue; /* Title color */

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Button = styled(Link)`
  background-color: lightblue; /* Button color */
  color: black;
  border: none;
  padding: 10px 20px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: lightgreen; /* Hover effect */
    color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const Logo = styled.img`
  width: 150px; /* Adjust the logo size as needed */
  height: 150px;
  margin-top: -10px; /* Space between the logo and the user sections */

  @media screen and (max-width: 768px) {
    width: 80px; /* Adjust logo size for smaller screens */
  }
`;
