import React from 'react';
import { Col, Row } from 'react-bootstrap';
import imge from '../download (2).png';
import img2 from '../download (3).png';
import img3 from '../download (4).png';
import img4 from '../download (6).png';
import img5 from '../download (7).png';
import img6 from '../download (8).png';
import img7 from '../download (9).png';
import img8 from '../download (10).png';
import img9 from '../download (11).png';
import img10 from '../download (12).png';

const Skills = () => {
  return (
    <div style={{backgroundColor:"black"}}>
       <div className='container' >
      <h1 style={{ marginBottom: '30px',color:'#ff6f61',textAlign:'center' }}>Skills</h1>
      <Row xs={2} xl={4}>
        <Col className='text-center'>
          <div>
            <img
              style={{ width: '150px', height: '150px', marginBottom: '30px' ,borderRadius:'30px'}}
              src={imge}
              alt='hvhv'
            />
          </div>
        </Col>
        <Col className='text-center'>
          <div>
            <img
              style={{ width: '150px', height: '150px', marginBottom: '30px',borderRadius:'30px' }}
              src={img2}
              alt='hvhv'
            />
          </div>
        </Col>
        <Col className='text-center'>
          <div>
            <img
              style={{ width: '150px', height: '150px', marginBottom: '30px',borderRadius:'30px' }}
              src={img3}
              alt='hvhv'
            />
          </div>
        </Col>
        <Col className='text-center'>
          <div>
            <img
              style={{ width: '150px', height: '150px', marginBottom: '30px',borderRadius:'30px' }}
              src={img4}
              alt='hvhv'
            />
          </div>
        </Col>
        <Col className='text-center'>
          <div>
            <img
              style={{ width: '150px', height: '150px', marginBottom: '30px',borderRadius:'30px' }}
              src={img5}
              alt='hvhv'
            />
          </div>
        </Col>
        <Col className='text-center'>
          <div>
            <img
              style={{ width: '150px', height: '150px', marginBottom: '30px',borderRadius:'30px' }}
              src={img6}
              alt='hvhv'
            />
          </div>
        </Col>
        <Col className='text-center'>
          <div>
            <img
              style={{ width: '150px', height: '150px', marginBottom: '30px',borderRadius:'30px' }}
              src={img7}
              alt='hvhv'
            />
          </div>
        </Col>
        <Col className='text-center'>
          <div>
            <img
              style={{ width: '150px', height: '150px', marginBottom: '30px',borderRadius:'30px' }}
              src={img8}
              alt='hvhv'
            />
          </div>
        </Col>
        <Col className='text-center'>
          <div>
            <img
              style={{ width: '150px', height: '150px', marginBottom: '30px',borderRadius:'30px' }}
              src={img9}
              alt='hvhv'
            />
          </div>
        </Col>
        <Col className='text-center'>
          <div>
            <img
              style={{ width: '150px', height: '150px', marginBottom: '30px',borderRadius:'30px' }}
              src={img10}
              alt='hvhv'
            />
          </div>
        </Col>
      </Row>
    </div>
    </div>
   
  );
}

export default Skills;