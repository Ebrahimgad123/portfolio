import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import pdf from './blue professional modern CV resume.pdf'
import { AiOutlineDownload } from "react-icons/ai";
import Hello from '../Home/Hello/Hello';

const Resume = () => {
  return (
    <Container>
      <Hello/>
    <Button
    variant="primary"
    href={pdf}
    target="_blank"
    style={{ maxWidth: "250px" ,marginLeft:'50%' ,marginTop:'5%'}}
  >
    <AiOutlineDownload />
    &nbsp;Download CV
  </Button> 
    </Container>
    
  )
}

export default Resume