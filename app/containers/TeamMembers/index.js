import React from 'react';
import _ from 'lodash';

export default class TeamMembers extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    team: React.PropTypes.array,
  }

  getUserUptimeInProject = (events) => {
    let sum = 0;
    _.each(events, (event) => {
      const time = Math.floor(Math.abs(new Date(event.endDate) - new Date(event.startDate)) / 1000);
      sum += time;
    });
    const result = {};
    result.hours = Math.floor(sum / 3600);
    result.minutes = Math.floor((sum - (3600 * result.hours)) / 60);
    return result;
  }

  render() {
    return (
      <div>
        {this.props.team.map((user) => {
          const uptime = this.getUserUptimeInProject(user.trackerEvents);
          const { hours, minutes } = uptime;
          return <p key={user._id}>{user.name} - {hours > 9 ? hours : `0${hours}`} : {minutes > 9 ? minutes : `0${minutes}`}</p>;
        })}
      </div>
    );
  }
}


