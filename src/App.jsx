import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Homesection from './components/Home';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';

function App() {
  // Tracking user details in App is the component which decides where to navigate based on
// the current route and it needs to know whether the user is logedin.
  const [userDetails, setUserDetails] = useState(null);

  // this function takes new value of userDetails and update it using setUserDetails function.
  const updateUserDetails = (updatedData) => {
    setUserDetails(updatedData);
  };

  return (
   
      <Routes>

        {/* here <AppLayout><{children} /></AppLayout>
This children is passed to AppLayout and showing children component that are Homesection and login between Header and Footer
*/}
        <Route path="/" element={<AppLayout><Homesection /></AppLayout>} />

        {/* we are passing updateUserDetails function to login because thats where we will get user info are unthentication. */}
        <Route
          path="/login"
          element={
            userDetails
              ? <Navigate to="/dashboard" />
              : <AppLayout><Login updateUserDetails={updateUserDetails} /></AppLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            userDetails
              ? <Dashboard />
              : <Navigate to="/login" />
          }
        />
      </Routes>
    
  );
}

export default App;
