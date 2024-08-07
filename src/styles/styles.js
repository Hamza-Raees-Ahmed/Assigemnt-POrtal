import styled from 'styled-components';

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: white; /* Navbar color updated to white */
  color: black;
  font-family: Arial, sans-serif;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Logo = styled.img`
  width: 80px; /* Increased the logo size */
  height: auto;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-right: 0;
  }
`;

export const LoginButton = styled.button`
  background-color: lightblue; /* Updated color */
  color: black;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url('../assets/your-background-image.png'); /* Add your background image here */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding-top: 120px; /* Adjusted padding to move title away from navbar */

  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
`;

export const SchoolInfo = styled.div`
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color:  DodgerBlue; 
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
  margin-top: 60px; /* Adjusted margin to center title away from navbar */

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
