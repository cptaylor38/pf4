import React from 'react';
import './landing.css';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
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
          <Container fluid='xl' id='landing'>
            <div className='imgHolder'>
              <img src={svgselfie} alt='selfie'></img>
            </div>
            <div className='overlay'>
              <Row id='navRow'>
                <Container fluid='xl navLink' id='navP'>
                  <Container className='navCInner'>
                    <Link to='/portfolio'>Portfolio</Link>
                  </Container>
                </Container>
                <Container fluid='xl navLink' id='navR'>
                  <Container className='navCInner'>
                    <Link to='/resume'>Resume</Link>
                  </Container>
                </Container>
                <Container fluid='xl navLink' id='navA'>
                  <Container className='navCInner'>
                    <Link to='/about'>About</Link>
                  </Container>
                </Container>
                <Container fluid='xl navLink' id='navC'>
                  <Container className='navCInner'>
                    <Link to='/contact'>Contact</Link>
                  </Container>
                </Container>
                <Container fluid='xl navLink' id='navF'>
                  <Container className='navCInner'>
                    <Link to='/faq'>FAQ</Link>
                  </Container>
                </Container>
              </Row>
            </div>
          </Container>
        ) : (
          <Container fluid='xl smallView'>
            <div className='imgHolderSm'>
              <img src={svgselfie} alt='selfie'></img>
            </div>
            <Container className='navLinkSm'>
              <div className='smallVR'>
                <Link to='/portfolio'>Portfolio</Link>
              </div>
              <div className='smallVR'>
                <Link to='/resume'>Resume</Link>
              </div>
              <div className='smallVR'>
                <Link to='/about'>About</Link>
              </div>
              <div className='smallVR'>
                <Link to='/contact'>Contact</Link>
              </div>
              <div className='smallVR'>
                <Link to='/faq'>FAQ</Link>
              </div>
            </Container>
          </Container>
        )}
      </div>
    );
  }
}

export default Welcome;
