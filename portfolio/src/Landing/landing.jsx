import React from 'react';
import './landing.css';
import { Container, Row } from 'reactstrap';
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
                    <a href='#'>Portfolio</a>
                  </Container>
                </Container>
                <Container fluid='xl navLink' id='navR'>
                  <Container className='navCInner'>
                    <a href='#'>Resume</a>
                  </Container>
                </Container>
                <Container fluid='xl navLink' id='navA'>
                  <Container className='navCInner'>
                    <a href='#'>About</a>
                  </Container>
                </Container>
                <Container fluid='xl navLink' id='navC'>
                  <Container className='navCInner'>
                    <a href='#'>Contact</a>
                  </Container>
                </Container>
                <Container fluid='xl navLink' id='navF'>
                  <Container className='navCInner'>
                    <a href='#'>FAQ</a>
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
              <div className='smallVR'>Portfolio</div>
              <div className='smallVR'>Resume</div>
              <div className='smallVR'>About</div>
              <div className='smallVR'>Contact</div>
              <div className='smallVR'>FAQ</div>
            </Container>
          </Container>
        )}
      </div>
    );
  }
}

export default Welcome;
