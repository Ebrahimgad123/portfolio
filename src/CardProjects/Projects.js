import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Projects.css'
import img from '../99.png'
import img2 from '../download998.jpg'
import img3 from '../55.png'

const Projects = () => {
  const projects = [
    {
      title: 'Movies app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: img,
    },
    {
      title: 'Shopping Cart',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: img2,
    },
    {
      title: 'Cars project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: img3,
    },
  ];

  return (
    <div style={{backgroundColor:'black',marginBottom:'-30px'}}>
    <div className='container'>
      <h1 style={{color:'#ff6f61',textAlign:'center'}}>Projects</h1>
      <div className='row'>
        {projects.map((project, index) => (
          <div className='col-md-4' key={index}>
            <Card className='custom-card'>
              <div className='card-image'>
                <Card.Img variant='top' src={project.image} style={{height:'190px'}} alt={project.title} />
                <div className='hover-overlay'></div>
              </div>
              <Card.Body style={{backgroundColor:'black'}}>
                <Card.Title style={{color:'white'}}>{project.title}</Card.Title>
                <Card.Text style={{color:'white'}}>{project.description}</Card.Text>
                <Button style={{backgroundColor:'red'}}> More Details</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Projects;