import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h1>Pharmacy Sales Records System</h1>
      </nav>
      <main className="main-content">
        <h2>Welcome to the Pharmacy Sales Records System</h2>
        <p>
          Manage your pharmacy's sales and inventory all in one place. This system helps you organize and track medicine inventory and sales transactions. Streamline your operations with advanced features designed to optimize efficiency and enhance decision-making.
        </p>
        <div className="features-section">
          <h3>Key Features:</h3>
          <ul>
            <li><strong>Inventory Management:</strong> Track medication stock levels and expiration dates.</li>
            <li><strong>Sales Tracking:</strong> Record and analyze sales data to identify trends and opportunities.</li>
            <li><strong>User Management:</strong> Control access with secure login and role-based permissions.</li>
            <li><strong>Compliance:</strong> Ensure regulatory compliance with built-in features for managing controlled substances and audits.</li>
          </ul>
        </div>
        <div className="quick-links">
          <a href="/addmedicine" className="quick-link">Add Medicine</a>
          <p className="link-description">Quickly add new medicines to your inventory with intuitive forms and detailed information fields.</p>
          <a href="/viewmedicine" className="quick-link">View Medicine</a>
          <p className="link-description">Effortlessly browse and manage existing medicines with comprehensive search and filter options.</p>
        </div>
      </main>
    </div>
  );
}

export default Home;
