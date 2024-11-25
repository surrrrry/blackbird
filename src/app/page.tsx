'use client';

import Link from 'next/link';
import { useState } from 'react';
import HomePage from './components/HomePage';
import Login from './components/Login';

export default function Home() {

    // State to manage login status and credentials
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Mock backend login function
  const mockLogin = async (username: string, password: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'admin') {
          resolve({ success: true });
        } else {
          reject({ success: false, message: 'Invalid credentials' });
        }
      }, 1000); // Simulated delay
    });
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setError(''); // Clear previous errors
    try {
      const response = await mockLogin(username, password);
      if (response.success) {
        setIsLoggedIn(true); // Update login state
      }
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <div  style={styles.container}>

          <Login
          username={username}
          password={password}
          onUsernameChange={(e) => setUsername(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={handleLogin}
          error={error}
        />
    </div>

      )}
    </div>
  );

}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'var(--background)',
    borderRadius: '8px',
    borderColor: 'var(--foreground)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};