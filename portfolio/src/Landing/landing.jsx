import React from 'react';
import './landing.css';
import { Container, Row, Col } from 'reactstrap';
const screenW = window.screen.width;

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
            <div className='overlay'>
              <p id='welcome'>Welcome</p>
              <Row id='navRow'>
                <Container fluid='xl navLink' id='navP'>
                  <a href='#'>Portfolio</a>
                </Container>
                <Container fluid='xl navLink' id='navR'>
                  <a href='#'>Resume</a>
                </Container>
                <Container fluid='xl navLink' id='navA'>
                  <a href='#'>About</a>
                </Container>
                <Container fluid='xl navLink' id='navC'>
                  <a href='#'>Contact</a>
                </Container>
                <Container fluid='xl navLink' id='navF'>
                  <a href='#'>FAQ</a>
                </Container>
              </Row>
            </div>
          </Container>
        ) : (
          <Container fluid='xl smallView'>
            <div class='smallVR'>Portfolio</div>
            <div class='smallVR'>Resume</div>
            <div class='smallVR'>About</div>
            <div class='smallVR'>Contact</div>
            <div class='smallVR'>FAQ</div>
          </Container>
        )}
      </div>
    );
  }
}

export default Welcome;
