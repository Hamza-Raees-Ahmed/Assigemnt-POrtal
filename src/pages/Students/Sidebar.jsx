import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsGraphUp, BsFileText, BsChatDots, BsGear } from 'react-icons/bs';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '250px' : '60px')};
  height: 100%;
  background-color: #1E90FF; /* Dodger Blue background */
  color: white;
  overflow-y: auto;
  padding-top: 60px;
  transition: width 0.3s ease; /* Smooth width transition */
  z-index: 100; /* Ensure sidebar stays above content */
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: ${({ isOpen }) => (isOpen ? '24px' : '0')};
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  transition: font-size 0.3s ease;
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  flex: 1;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #4682B4; /* Darker Dodger Blue border */
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #4682B4; /* Darker Dodger Blue background on hover */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
  display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
`;

const Logo = styled.img`
  width: ${({ isOpen }) => (isOpen ? '100px' : '40px')};
  height: auto;
  margin-bottom: ${({ isOpen }) => (isOpen ? '20px' : '0')};
  transition: width 0.3s ease, margin-bottom 0.3s ease;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: ${({ isOpen }) => (isOpen ? '20px' : 'calc(50% - 15px)')};
  transform: ${({ isOpen }) => (isOpen ? 'none' : 'translateX(-50%)')};
  width: 30px;
  height: 30px;
  background-color: #4682B4; /* Darker Dodger Blue */
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: right 0.3s ease, transform 0.3s ease;
`;

const ToggleIcon = styled.span`
  color: white;
  font-size: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(90deg)')};
  transition: transform 0.3s ease;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader isOpen={isOpen}>
        {isOpen && <div>Student</div>}
      </SidebarHeader>
      <SidebarNav>
        <SidebarNavItem>
          <SidebarIcon><BsGraphUp /></SidebarIcon>
          <StyledLink to="/student/dashboard" isOpen={isOpen}>Dashboard</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsFileText /></SidebarIcon>
          <StyledLink to="/student/assignments" isOpen={isOpen}>Assignments</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsChatDots /></SidebarIcon>
          <StyledLink to="/student/announcement" isOpen={isOpen}>Announcement</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsGear /></SidebarIcon>
          <StyledLink to="/student/settings" isOpen={isOpen}>Profile </StyledLink>
        </SidebarNavItem>
      </SidebarNav>
      <ToggleButton onClick={toggleSidebar} isOpen={isOpen}>
        <ToggleIcon isOpen={isOpen}>▶</ToggleIcon>
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;
