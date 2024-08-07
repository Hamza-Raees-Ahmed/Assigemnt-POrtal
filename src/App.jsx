import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home.jsx';
import ChooseUser from '../src/components/ChooseUser';
import AdminSignIn from '../src/components/AdminSignIn';
import StudentSignIn from '../src/components/StudentSignIn';
import TeacherSignIn from '../src/components/TeacherSignIn';
import AdminDashboard from '../src/pages/Admin/Dashboard';
import StudentDashboard from '../src/pages/Students/Dashboard';
import TeacherDashboard from '../src/pages/Teachers/Dashboard';

import Classes from '../src/pages/Admin/Classes';
import Teachers from '../src/pages/Admin/Teachers';
import Students from '../src/pages/Admin/Students';
import Assignments from '../src/pages/Admin/Assignments';
import Announcement from '../src/pages/Admin/Announcement';
import EventCalender from '../src/pages/Admin/EventCalender';
import SettingsProfile from '../src/pages/Admin/SettingsProfile';

import StudentAssignments from '../src/pages/Students/Assignments';
import ProfileSection from '../src/pages/Students/Profile';
import AnnouncementSection from '../src/pages/Students/Announcement';

import ClassSection from '../src/pages/Teachers/Classes';
import StudentSection from '../src/pages/Teachers/Students';
import TeacherSection from '../src/pages/Teachers/Teachers';
import AssignmentSection from '../src/pages/Teachers/Assignments';
import CheckAnnouncementSection from '../src/pages/Teachers/Announcement';
import EventSection from '../src/pages/Teachers/Events';
import TeacherProfileSection from '../src/pages/Teachers/Profile';

const App = () => { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />

        {/* All the sign-in pages/routes */}
        <Route path="/admin-signIn" element={<AdminSignIn />} />
        <Route path="/student-signIn" element={<StudentSignIn />} />
        <Route path="/teacher-signIn" element={<TeacherSignIn />} />

        {/* All the dashboard routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />        
        <Route path="/student/dashboard" element={<StudentDashboard />} />

        {/* Admin section here */}
        <Route path="/admin/classes" element={<Classes />} />
        <Route path="/admin/teachers" element={<Teachers />} />
        <Route path="/admin/students" element={<Students />} />
        <Route path="/admin/assignments" element={<Assignments />} />
        <Route path="/admin/communication" element={<Announcement />} />
        <Route path="/admin/events" element={<EventCalender />} />
        <Route path="/admin/settings" element={<SettingsProfile />} />

        {/* Students sections here */}
        <Route path="/student/assignments" element={<StudentAssignments />} />
        <Route path="/student/announcement" element={<AnnouncementSection/>} />
        <Route path="/student/settings" element={<ProfileSection />} />

        {/* Teachers sections here */}
        <Route path="/teacher/classes" element={<ClassSection />} />
        <Route path="/teacher/students" element={<StudentSection />} />
        <Route path="/teacher/teachers" element={<TeacherSection />} />
        <Route path="/teacher/assignments" element={<AssignmentSection />} />
        <Route path="/teacher/communication" element={<CheckAnnouncementSection />} />
        <Route path="/teacher/events" element={<EventSection />} />
        <Route path="/teacher/settings" element={<TeacherProfileSection/>} />
      </Routes>
    </Router>
  );
};

export default App;
