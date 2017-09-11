import React from 'react';
import _ from 'lodash';

export default class TeamMembers extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    
  }

  componentDidMount() {
    fetch(`/api/projects/20_minut_przerwy`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
