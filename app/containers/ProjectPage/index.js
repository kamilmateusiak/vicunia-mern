import React from 'react';
import Tracker from '../Tracker';
import TeamMembers from '../TeamMembers';

export default class ProjectPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    params: React.PropTypes.object,
  };

  state = {
    project: {
      team: [],
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.name !== this.props.params.name) {
      this.fetchData();
    }
  }

  fetchData = () => {
    fetch(`/api/projects/${this.props.params.name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          project: data,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div>
          <Tracker />
          <TeamMembers team={this.state.project.team} />
        </div>
      </div>
    );
  }
}
