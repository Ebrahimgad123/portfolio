import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "./logo.svg";
import pdf from '../Resume/blue professional modern CV resume.pdf'
import { AiOutlineDownload } from "react-icons/ai";

import Type from "./Type";

function Start() {
  return (
    <section style={{marginBottom:'200px'}}>
      <Container >
        
        <Container >
          <Row>
            <Col md={7} style={{height:'500px'}}>
                <div style={{marginTop:'90px'}}>
               <h1 style={{ paddingBottom: 15 ,color:'white'}} className="heading" >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>   
                </div>
            

              <h1 className="heading-name" style={{color:'white'}}>
                I'M
                <strong className="main-name "style={{color:'white'}}> Ibrahim Gad</strong>
              </h1>

              <div style={{  paddingBottom:"50px",textAlign: "left" ,color:'white',fontSize:'30px'}}>
                <Type />
              </div>
            
             <div>
             <Button
            style={{backgroundColor:'black'}}
             href={pdf}
              target="_blank"
           
                >
          <AiOutlineDownload />
           &nbsp;Download CV
           </Button> 
             </div>
             <div  style={{marginTop:'50px'}}>
              
              <a href="https://github.com/"target='_blank'  >
              <i style={{color:'black',fontSize:'40px',marginRight:'-30px'}} class="fa-brands fa-github"></i>
         </a>
    
         <a href="https://www.linkedin.com/login/ar"target='_blank' style={{marginLeft:'40px'}}>
         <i  style={{color:'black',fontSize:'40px',marginRight:'-30px'}}class="fa-brands fa-linkedin"></i>
         </a>
         <a href="https://www.facebook.com/ibrahim.gad.5623/about"target='_blank' style={{marginLeft:'40px'}}>
         <i  style={{color:'black',fontSize:'40px'}}class="fa-brands fa-facebook"></i>
         </a>   
           </div>
            </Col>

           
          </Row>
        </Container>
      </Container>
    
    </section>
  );
}

export default Start;
