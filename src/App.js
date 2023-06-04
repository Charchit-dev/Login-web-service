import React, { useState } from 'react';
import './App.css';
import Dashboard from './/components/dashboard';
import Login from './/components/login';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // Perform authentication logic here with predefined accounts
    switch (email) {
      case 'krishu@example.com':
        if (password === 'password1') {
          setUser({ firstName: 'Krishna', lastName: 'Gautam' });
          setLoggedIn(true);
        } else {
          alert('Invalid password');
        }
        break;
      case 'aashu@example.com':
        if (password === 'password2') {
          setUser({ firstName: 'Aashik', lastName: 'Bhujel' });
          setLoggedIn(true);
        } else {
          alert('Invalid password');
        }
        break;
      default:
        alert('Invalid email');
        break;
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <div className="app-container">
      {loggedIn ? (
        <Dashboard user={user} handleLogout={handleLogout} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
