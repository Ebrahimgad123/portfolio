import React from 'react';
import ball from './1.png';
import './SplashScreen.css'
const SplashScreen = () => {
  return ( 
    <div >
      <h2 style={{ width:'60%',marginTop:'40px',marginLeft:'20%',textAlign:'center'}} className='text-black'>Welcome To my Website..!</h2>
    <div id="body">
    
     <div   style={{ textAlign: 'center', marginTop: '300px' }}>
      <img id='imgu' src={ball} alt="Ball" style={{ width: '100px' }} />
      
    </div>   
    </div>
    </div>
     
    
    
  );
};

export default SplashScreen;