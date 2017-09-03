import React from 'react';
import _ from 'lodash';
import TrackerProjectInput from '../../components/TrackerProjectInput';
import TrackerDescriptionInput from '../../components/TrackerDescriptionInput';
import TrackerTimer from '../../components/TrackerTimer';
import TrackerList from '../../components/TrackerList';
import StopButton from '../../components/StopButton';
import DivideButton from '../../components/DivideButton';
import TrackerContainer from '../../components/TrackerContainer';
import Auth from '../../utils/auth';

export default class Tracker extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.timerInterval = 0;
    this.isAlreadyTracking = false;
  }

  state = {
    items: [],
    selectedItem: { name: '', _id: '' },
    trackerEvent: {},
    listVisibility: false,
    selectedItemDescription: '',
    timer: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  }

  componentDidMount() {
    fetch('/api/projects/')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          items: data,
        });
      })
      .then(() => {
        fetch(`/api/tracker/${Auth.getUserId()}`)
        .then((response) => response.json())
        .then((data) => {
          if (data !== null) {
            const selectedItem = _.find(this.state.items, (item) => item._id === data.project);
            this.setState({
              trackerEvent: data,
              selectedItem: { name: selectedItem.name, _id: selectedItem._id },
              listVisibility: false,
            });
            this.timerInterval = setInterval(() => {
              const timer = Math.floor(Math.abs(new Date(data.startDate) - Date.now()) / 1000);

              const timerCopy = { ...this.state.timer };
              timerCopy.seconds = timer % 60;
              timerCopy.minutes = Math.floor(timer / 60);
              timerCopy.hours = Math.floor(timer / 3600);

              this.setState({
                timer: timerCopy,
              });
            }, 1000);
            this.isAlreadyTracking = true;
          }
        });
      });
  }

  handleOnProjectInputChange = (e) => {
    this.setState({
      selectedItem: { name: e.target.value, _id: '' },
      listVisibility: true,
    });
  }
  handleOnDescriptionInputChange = (e) => {
    this.setState({
      selectedItemDescription: e.target.value,
    });
  }
  handleListItemClick = (item) => {
    this.setState({
      selectedItem: { name: item.name, _id: item._id },
      listVisibility: false,
    });
    this.startTimer(item);
  }
  focusController = (state) => {
    this.setState({
      listVisibility: state,
    });
  }
  startTimer = (item) => {
    fetch(`/api/tracker/${Auth.getUserId()}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        project: item._id,
        description: this.state.selectedItemDescription,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        trackerEvent: data,
      });

      this.timerInterval = setInterval(() => {
        const timer = Math.floor(Math.abs(new Date(data.startDate) - Date.now()) / 1000);

        const timerCopy = { ...this.state.timer };
        timerCopy.seconds = timer % 60;
        timerCopy.minutes = Math.floor(timer / 60);
        timerCopy.hours = Math.floor(timer / 3600);

        this.setState({
          timer: timerCopy,
        });
      }, 1000);
    });
  }

  stopTracking = () => {
    fetch('/api/tracker/', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: this.state.trackerEvent._id,
        description: this.state.selectedItemDescription,
        endDate: Date.now(),
      }),
    })
    .then(() => {
      clearInterval(this.timerInterval);
      this.setState({
        selectedItem: { name: '', _id: '' },
        selectedItemDescription: '',
        timer: {
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  divideTracking = () => {
    fetch('/api/tracker/', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: this.state.trackerEvent._id,
        description: this.state.selectedItemDescription,
        endDate: Date.now(),
      }),
    })
    .then(() => {
      clearInterval(this.timerInterval);
      this.setState({
        selectedItemDescription: '',
        timer: {
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
      });
      this.startTimer(this.state.selectedItem);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="container">
        <TrackerContainer>
          <div className="col-sm-1">
            <StopButton className="center-block" onClick={this.stopTracking} />
            <DivideButton className="center-block" onClick={this.divideTracking} />
          </div>
          <div className="col-md-3">
            <TrackerProjectInput focusController={this.focusController} selectedItem={this.state.selectedItem.name} handleOnChange={this.handleOnProjectInputChange} />
            {this.state.listVisibility &&
              <TrackerList handleListItemClick={this.handleListItemClick} items={this.state.items.filter((item) => item.name.toUpperCase().indexOf(this.state.selectedItem.name.toUpperCase()) >= 0)}></TrackerList>
            }
          </div>
          <div className="col-md-3">
            <TrackerDescriptionInput selectedItemDesc={this.state.selectedItemDescription} handleOnChange={this.handleOnDescriptionInputChange} />
          </div>
          <div className="col-md-3">
            <TrackerTimer timer={this.state.timer} />
          </div>
        </TrackerContainer>
      </div>
    );
  }
}
