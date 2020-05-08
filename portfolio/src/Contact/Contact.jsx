import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import {
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';
const axios = require('axios');

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setFormData({ [e.target.name]: e.target.value });
    if (
      formData.email !== '' &&
      formData.subject !== '' &&
      formData.message !== ''
    ) {
      try {
        await axios
          .post('/contact/email', {
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          })
          .then((response) => window.location.reload());
      } catch (error) {
        console.log('client request', error);
      }
    }
  };

  return (
    <>
      <Container fluid='xl contactFull'>
        <Row xs='12' id='contactTopR'>
          <Col xs='6' className='conCol' id='colForm'>
            <Container className='contactFormC'>
              <form onSubmit={sendEmail}>
                <FormGroup>
                  <Label for='exampleEmail'>Email</Label>
                  <Input
                    type='email'
                    name='email'
                    id='exampleEmail'
                    placeholder='jSmith@email.com'
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='subjectText'>Subject</Label>
                  <Input
                    type='text'
                    name='subject'
                    id='subjectText'
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='messageText'>Message</Label>
                  <Input
                    type='textarea'
                    name='message'
                    rows='10'
                    id='messageText'
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button>Submit</Button>
              </form>
            </Container>
          </Col>
          <Col xs='6' className='conCol' id='colLinks'>
            <Container className='contactLinksC'>
              <Link to='/landing'>Home</Link>
              <Link to='/portfolio'>Portfolio</Link>
              <Link to='/resume'>Resume</Link>
              <Link to='/about'>About</Link>
              <Link to='/faq'>FAQ</Link>
            </Container>
          </Col>
        </Row>
        <Row xs='12' id='conBottomR'>
          <Container fluid='xl socialLinks'>
            <Link to='https://www.facebook.com/cptaylor38/'>Facebook</Link>
            <Link to='https://github.com/cptaylor38'>Github</Link>
            <Link to='https://www.linkedin.com/in/corbin-taylor-419a8a188/'>
              LinkedIn
            </Link>
            <Link to='https://www.instagram.com/cptaylo2/'>Instagram</Link>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
