import React from 'react';

const Dashboard = ({ user, handleLogout }) => {
  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.firstName} {user.lastName}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
