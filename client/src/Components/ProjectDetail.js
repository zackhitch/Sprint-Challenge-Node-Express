import React, { Component } from 'react';

class ProjectDetail extends Component {
  constructor() {
    super();
    this.state = {
      project: {},
    };
  }

  componentDidMount() {
    this.setState({ project: this.props.currentProject });
  }

  render() {
    const { name, description, notes, completed } = this.props.currentProject;
    return (
      <div>
        <div>{name}</div>
      </div>
    );
  }
}

export default ProjectDetail;
