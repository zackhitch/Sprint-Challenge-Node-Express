import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';
import axios from 'axios';
import {
  Container,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Row,
} from 'reactstrap';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5020/api/projects')
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting projects: ${error}`);
      });
  }

  render() {
    return (
      <div>
        <Container className="cardContainer">
          {this.state.projects.map((project, index) => {
            return (
              <Row key={index} className="cardRow">
                <Col className="cardCol d-flex align-items-stretch">
                  <Card className="cardCard">
                    <Link
                      to={{
                        pathname: `/projects/${project.id}}`,
                        state: { currentProject: project },
                      }}
                    >
                      <CardBody className="cardBody">
                        <CardTitle>{project.name}</CardTitle>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Container>
      </div>
    );
  }
}

export default Projects;
