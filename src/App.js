import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import CourseDetail from './components/CourseDetail';
import Courses from './components/Courses';
import News from './components/News';
import Contact from './components/Contact'



function App() {
  return (
    <>
    <Router>
    
        <Navbar />
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/CourseDetail/:courseName" element={<CourseDetail />} />
        <Route path="/Courses" element={<Courses />}></Route>
        <Route path='/News' element={<News />}></Route>
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
