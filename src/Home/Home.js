import Carousel from '../Carsoul/Carousel'
import React from 'react'
import Hello from './Hello/Hello.js'
import Skills from '../Skills/Skills'
import Projects from '../CardProjects/Projects'
import HTMLChart from '../Charts/Charts'
import ContactForm from '../Contact/Contact'
import './Home.css'

import Start from '../Start/Start'

const Home = () => {
  return (
   
   
          
         
         <div className='background' style={{height:'100vh'} }>
          <div >
            <Start />
          </div>
        
         
          
           <Carousel/>
      <Hello/>
      <Skills/>
      <Projects/>
       <HTMLChart/>
       <ContactForm/>
  
    </div>
 

 
   
  )
}

export default Home