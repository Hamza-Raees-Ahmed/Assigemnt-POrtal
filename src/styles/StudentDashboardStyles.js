// StudentDashboardStyles.js
import styled from 'styled-components';

// Container for the entire student dashboard
export const StudentDashboardContainer = styled.div`
  display: flex;
  padding-left: ${({ isOpen }) => (isOpen ? '250px' : '60px')}; /* Space for the sidebar */
  transition: padding-left 0.3s ease; /* Smooth transition */
`;

// Content area to the right of the sidebar
export const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4; /* Light grey background for content */
`;

// Container for the logo
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* Space below the logo */
`;

// Logo image
export const Logo = styled.img`
  width: 120px; /* Adjust the logo size as needed */
  height: auto;
`;

// Container for the top content section
export const TopContent = styled.div`
  display: flex;
  gap: 20px;
  flex: 1; /* Take remaining space */
`;

// Container for the bottom content section
export const BottomContent = styled.div`
  margin-top: 20px;
  display: flex; /* Make the content side by side */
  gap: 20px; /* Add gap between the components */
`;

// Section container
export const Section = styled.section`
  margin-bottom: 40px;
  flex: 1; /* Make the sections expand to fill the available space */
`;

// Section title
export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333; /* Darker text color */
`;

// Container for cards within a section
export const CardContainer = styled.div`
  display: flex;
  gap: 20px; /* Space between cards */
  flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
`;

// Individual card
export const Card = styled.div`
  background-color: #1E90FF; /* Dodger Blue background for card */
  padding: 20px;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: transform 0.3s ease-in-out; /* Smooth hover effect */
  cursor: pointer;
  flex: 1;
  max-width: 250px; /* Max width for card */
  &:hover {
    transform: translateY(-5px); /* Hover effect */
  }
`;

// Card title
export const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #ffffff; /* White text color for card titles */
`;

// Card content
export const CardContent = styled.p`
  font-size: 16px;
  color: #ffffff; /* White text color for card content */
`;
