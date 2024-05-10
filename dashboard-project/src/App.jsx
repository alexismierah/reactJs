import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
            <Switch>
              <Route path="/admin" component={Admin} />
              <Route path="/students" component={Students} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;