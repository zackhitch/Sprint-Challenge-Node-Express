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
    return (
      <div>
        <div>{this.state}</div>
      </div>
    );
  }
}

export default ProjectDetail;
