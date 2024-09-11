import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home/HomePage/HomePage';
import WelcomePage from './welcomelogin/WelcomePage';
import LoginPage from './studentlogin/LoginPage/LoginPage';
import TeacherLogin from './TeacherLogin/TeacherLogin';
import AdminLogin from './AdminLogin/AdminLogin';
import AdminRegister from './AdminRegister/AdminRegister';
import Login02 from './studentregister/Login02/Login02';
import TeacherRegister from './TeacherRegister/TeacherRegister';
import ABCSchool from './aws-components/ABCSchool';
import { ThemeProvider } from '@aws-amplify/ui-react';
import studioTheme from './aws-components/studioTheme';
import Footer from './Home1/Footer';
import Home from './home/HomePage/HomePage';
import CourseDetails from './Coursehome/CourseDetails';
import StudentBio from './studentbio/StudentBio';
import Header from './home/Header/Header';
import Payments from './payment/MyComponent';


function App() {
  return (
    <Router>
      <Header/>
      <ThemeProvider theme={studioTheme}>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Student Login */}
          <Route path="/login1" element={<WelcomePage />} /> 
          <Route path="/teacher-login" element={<TeacherLogin />} /> {/* Teacher Login */}
          <Route path="/admin-login" element={<AdminLogin />} /> {/* Admin Login */}
          <Route path="/signup" element={<Login02 />} /> {/* Student Signup */}
          <Route path="/admin-register" element={<AdminRegister />} /> {/* Admin Register */}
          <Route path="/teacher-register" element={<TeacherRegister />} /> {/* Teacher Register */}
          <Route path="/Home" element={<Home />} /> 
          <Route path="/CourseDetails" element={<CourseDetails />} />
          <Route path="/StudentBio" element={<StudentBio />} />
          <Route path="/Payments" element={<Payments />} />
          </Routes>
        <ABCSchool />
      </ThemeProvider>
      <Footer/>
    </Router>
  );
};

export default App;




