import React from 'react';
const NavLink = require('react-router-dom').NavLink;

import './HomePage.css';

import { EdgeHeader, FreeBird, Container, Col, Row, CardBody, Fa } from 'mdbreact';

class HomePage extends React.Component {
  render(){
    return(
      <div>
        <EdgeHeader color="indigo darken-3" />
        <FreeBird>
          <Row>
            <Col md="10" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <CardBody>
                <h2 className="h2-responsive"><strong>React Components for S&B</strong></h2>
                <p className="pb-4">Material Design Style</p>
              </CardBody>
            </Col>
          </Row>
        </FreeBird>
        <Container>
          <Row>
            <Col md="10" className="mx-auto mt-4">
              <p className="text-center">Facebook has created React for better front end development.</p>
              <p className="text-center">Google has designed a Material Design to make the web more beautiful and more user-friendly.</p>
              <p className="text-center">Twitter has created a Bootstrap to support you in faster and easier development of responsive and effective websites.</p>
              <p className="text-center">Here's our framework containing the best features of all of them - Material Design for Bootstrap.</p>
              <hr/>
              <h3 className="text-center mb-3">The goal is to make our UI&UX consistent</h3> 
              <h3 className="text-center mb-3">developer-friendly and user-friendly</h3>
              <h4 className="text-center mb-3">Note that this repo contains node.js server end</h4>
              <Row>
                <Col md="4" className="text-center home-feature-box">
                  <NavLink to="/css">
                    <Fa icon="css3" className="pink-text" />
                    <span>CSS</span>
                  </NavLink>
                </Col>
                <Col md="4" className="text-center home-feature-box">
                  <NavLink to="/components">
                    <Fa icon="cubes" className="blue-text" />
                    <span>Components</span>
                  </NavLink>
                </Col>
                <Col md="4" className="text-center home-feature-box">
                  <NavLink to="/javascript">
                    <Fa icon="code" className="green-text" />
                    <span>JavaScript</span>
                  </NavLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
