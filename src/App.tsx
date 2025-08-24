import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Requirements from './pages/Requirements';
import GitHub from './pages/GitHub';
import PRDGenerator from './pages/PRDGenerator';
import Productivity from './pages/Productivity';
import Calendar from './pages/Calendar';
import Issues from './pages/Issues';
import Projects from './pages/Projects';
import LandingPage from './pages/LandingPage';

// This component wraps the main application layout and its routes
const AppLayout = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/requirements" element={<Requirements />} />
      <Route path="/github" element={<GitHub />} />
      <Route path="/prd-generator" element={<PRDGenerator />} />
      <Route path="/productivity" element={<Productivity />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/issues" element={<Issues />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </Layout>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app/*" element={<AppLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
