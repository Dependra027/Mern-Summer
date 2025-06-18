import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
 import Login from './components/login';
import Homesection from './components/Home';
import AppLayout from './layout/AppLayout';
function App() {
  return (
    <>
     

     <Routes>

       {/* here <AppLayout><{children} /></AppLayout> 
        This children is passed to AppLayout and showing children component that are Homesection and login between Header and Footer
       */}

          <Route path="/" element={<AppLayout><Homesection /></AppLayout>} />  
          <Route path="/login" element={<AppLayout><Login /></AppLayout>} />  

        </Routes>
     
  
       
  
      </>
   
    
  );
}

export default App;
