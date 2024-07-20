import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h1>Pharmacy Sales Management System</h1>
        <ul className="nav-links">
          <li><a href="#sales">Sales</a></li>
          <li><a href="#reports">Reports</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
      <main className="main-content">
        <h2>Welcome to the Pharmacy Sales Management System</h2>
        <p>Manage your pharmacy's sales and reports all in one place.</p>
        <div className="quick-links">
          <a href="#add-medicine" className="quick-link">Add Medicine</a>
          <a href="#view-medicine" className="quick-link">View Medicine</a>
          {/* <a href="#inventory" className="quick-link">Manage Inventory</a> */}
          <a href="#sales" className="quick-link">View Sales</a>
          <a href="#reports" className="quick-link">Generate Reports</a>
          <a href="#settings" className="quick-link">System Settings</a>
        </div>
      </main>
    </div>
  );
}

export default Home;
