import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// Import react-circular-progressbar module and styles
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './Charts.css'
const percentage = 66;

const Charts = () => (
  <div style={{backgroundColor:'black'}}>
  <Container style={{backgroundColor:'black'}}>
    <h2 style={{marginBottom:'30px',marginTop:'30px',color:'white'}}>Skills 2</h2>
    <Row xs={2} style={{gap:'120px'}}>

    <Col style={{width:'100px',height:'100px'}}>
     <CircularProgressbar className="custum " value={90} text={`${90}%`} />
     <h4 style={{color:'white'}}>html5</h4>
    </Col>
    <Col style={{width:'100px'}}>
     <CircularProgressbar className="custum "value={70} text={`${70}%`} />
     <h4 style={{color:'white'}}>css3</h4>
    </Col>
    <Col style={{width:'100px'}}>
     <CircularProgressbar className="custum "value={80} text={`${80}%`} />
     <h4 style={{color:'white'}}>bootstrap</h4>
    </Col>
    <Col style={{width:'100px'}}>
     <CircularProgressbar className="custum "value={60} text={`${60}%`} />
     <h4 style={{color:'white'}}>javascript</h4>
    </Col>
    <Col style={{width:'100px'}}>
     <CircularProgressbar className="custum "value={80} text={`${80}%`} />
     <h4 style={{color:'white'}}>   React</h4>
    </Col>
    <Col style={{width:'100px'}}>
     <CircularProgressbar className="custum "value={70} text={`${70}%`} />
     <h4 style={{color:'white'}}>Redux</h4>
    </Col>
    </Row>

     
    
    
  </Container>
  </div>
);
export default Charts

