import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Career from './pages/Career';
import Contact from './pages/Contact';
import About from './pages/About';
import CommunityProjects from './pages/CommunityProjects';
import ProjectDetail from './pages/ProjectDetail';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from './context/AuthContext';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router basename="/akiliedge-solutions">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/community-projects" element={<CommunityProjects />} />
            <Route path="/community-projects/:id" element={<ProjectDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
        <Chatbot />
      </Router>
    </AuthProvider>
  );
};

export default App;
