import React from 'react';
import Tracker from '../Tracker';

export default class ProjectPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <div>
          <Tracker />
        </div>
      </div>
    );
  }
}
