import React from 'react';
import { BrowserRouter as Router, Route, Routes, RouteElement } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Admin from './pages/Admin';
import Students from './pages/Students';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <main className="p-4">
            <Routes>
              <Route path="/admin" element={<Admin />} />
              <Route path="/students" element={<Students />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;