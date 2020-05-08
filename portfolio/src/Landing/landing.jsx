import React from 'react';
import './landing.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Contact from '../Contact/Contact';
const svgselfie = require('../assets/images/selfietestimg4.svg');

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
    };

    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    this.updateView();
    window.addEventListener('resize', this.updateView);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateView);
  }

  updateView() {
    this.setState({ isDesktop: window.innerWidth > 1024 });
  }

  render() {
    const isDesktop = this.state.isDesktop;
    return (
      <div>
        {isDesktop ? (
          <Row xl='12' id='fullPageDt'>
            <Col xl='4' lg='4' id='bcSection'>
              <Container id='bcContent'>
                <Row className='bioR' id='picRow'>
                  <Container id='picCont'>
                    <img src={svgselfie} alt='selfie' id='selfie'></img>
                  </Container>
                </Row>
                <Row className='bioR'>
                  <Container id='bioCont'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat velit explicabo ea totam quos aliquam molestiae.
                      Praesentium libero sit, eos ipsam modi excepturi dolores
                      saepe minima eum earum perspiciatis! Deleniti dolor
                      aperiam tenetur rem ducimus exercitationem porro
                      aspernatur at, cumque ex accusamus similique ipsam, illo
                      quia repellendus iusto odit obcaecati reiciendis officiis
                      eligendi, natus aliquam placeat eos neque. Sequi fugit
                      repudiandae voluptates rerum dolorem id dicta, repellendus
                      quasi? Alias ipsam voluptatum, voluptatem sint modi dicta
                      porro et saepe exercitationem expedita esse minima illum
                      tempora ratione, recusandae at eos aliquid repellendus
                      architecto. Tenetur, iste mollitia! Maiores soluta tenetur
                      ab autem velit!
                    </p>
                  </Container>
                </Row>
                <Row className='bioR'>
                  <Container id='socialLinksCont'>
                    <a
                      href='https://www.facebook.com/cptaylor38/'
                      title='Facebook'
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href='https://github.com/cptaylor38' title='Github'>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/corbin-taylor-419a8a188/'
                      title='LinkedIn'
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                      href='https://www.instagram.com/cptaylo2/'
                      title='Instagram'
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href='mailto: cylor.dev@gmail.com' title='Email Me'>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a
                      href='https://docs.google.com/document/d/1oPcbN59DI1ZDNFx9t0PCiJnB9MI_5TlFAu0ekCZANuc/export?format=pdf'
                      title='My Resume'
                    >
                      <FontAwesomeIcon icon={faFileAlt} />
                    </a>
                  </Container>
                </Row>
                <Row className='bioR'>
                  <Container id='contactCont'>
                    <Contact />
                  </Container>
                </Row>
              </Container>
            </Col>
            <Col xl='8' lg='8' id='pSection'>
              <Row>project summary</Row>
              <Row>project list</Row>
            </Col>
          </Row>
        ) : (
          <Container fluid='xl smallView'>
            <div>Mobile</div>
          </Container>
        )}
      </div>
    );
  }
}

export default Welcome;
