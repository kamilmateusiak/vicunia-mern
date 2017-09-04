import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import Auth from '../../utils/auth';
import UptimeContainer from '../../components/UptimeContainer';

export default class Uptime extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.colors = [
      '#66a3ff',
      '#00ff99',
      '#ffff66',
      '#ff3300',
      '#800080',
    ];
  }

  state = {
    items: [],
    uptimeSumToday: '',
  }

  componentDidMount() {
    fetch(`/api/tracker/${Auth.getUserId()}/all?limit=5`)
      .then((response) => response.json())
      .then((data) => {
        let trackerEventsUptimeSum = 0;
        data.trackerEvents.forEach((event) => {
          trackerEventsUptimeSum += new Date(event.endDate).getTime() - new Date(event.startDate).getTime();
        });
        data.trackerEvents.forEach((event) => {
          const heightPercentage = (new Date(event.endDate).getTime() - new Date(event.startDate).getTime()) / (trackerEventsUptimeSum)
          if (heightPercentage < 0.1) {
            event.containerHeight = 70;
          } else if (heightPercentage < 0.3) {
            event.containerHeight = 90;
          } else {
            event.containerHeight = 120;
          }
        });
        
        this.setState({
          items: data.trackerEvents,
          uptimeSumToday: data.uptimeSumToday,
        });
      });
  }

  formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      hours: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
      minutes: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
    };
  }

  render() {
    return (
      <UptimeContainer>
        <h3>Czas pracy</h3>
        <p>Dzisiaj: {this.state.uptimeSumToday.hours}h {this.state.uptimeSumToday.minutes}min</p>
        {
          this.state.items.map((item, index) => {
            const startDate = this.formatDate(item.startDate);
            const endDate = this.formatDate(item.endDate);

            return (
              <div key={item._id} style={{ padding: '5px', height: item.containerHeight, borderLeft: `3px solid ${this.colors[index]}` }}>
                <p><Link to={`/project/${item.project.name}`}><b>{item.project.name}</b></Link> <span>{startDate.hours}:{startDate.minutes} - {endDate.hours}:{endDate.minutes}</span></p>
                <p>{item.description}</p>
              </div>
            );
          })
        }
      </UptimeContainer>
    );
  }
}
