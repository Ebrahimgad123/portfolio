
import './App.css';
import React, { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';
import AppContent from './AppContent';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 6000); 
  }, []);

  return (
    <div >
      {showSplash ? <SplashScreen /> : <AppContent /> 
      
      }
    </div>
  );
};

export default App;
