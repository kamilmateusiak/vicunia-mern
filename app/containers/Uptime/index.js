import React from 'react';
import _ from 'lodash';
import Auth from '../../utils/auth';
import UptimeContainer from '../../components/UptimeContainer';

export default class Uptime extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  state = {
    items: [],
  }

  componentDidMount() {
    fetch(`/api/tracker/${Auth.getUserId()}/all?limit=10`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          items: data,
        });
      });
  }

  formatDate = (dateString) => {
    const date = new Date(dateString);
    console.log(date);
    return {
      hours: date.getHours(),
      minutes: date.getMinutes()
    };
  }

  render() {
    return (
      <UptimeContainer>
        <h3>Czas pracy</h3>
        {
          this.state.items.map((item) => {
            const startDate = this.formatDate(item.startDate);
            const endDate = this.formatDate(item.endDate);

            return (
              <div key={item._id} style={{ padding: '5px', margin: '5px 0' }}>
                <p><b>{item.project.name}</b> <span>{startDate.hours}:{startDate.minutes} - {endDate.hours}:{endDate.minutes}</span></p>
                <p>{item.description}</p>
              </div>
            );
          })
        }
      </UptimeContainer>
    );
  }
}
