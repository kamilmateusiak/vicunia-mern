import React from 'react';
import TrackerProjectInput from '../../components/TrackerProjectInput';
import TrackerDescriptionInput from '../../components/TrackerDescriptionInput';
import TrackerTimer from '../../components/TrackerTimer';
import TrackerList from '../../components/TrackerList';
import StopButton from '../../components/StopButton';
import DivideButton from '../../components/DivideButton';
import TrackerContainer from '../../components/TrackerContainer';

export default class Tracker extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.timerInterval = 0;
  }

  state = {
    items: [],
    selectedItem: { name: '', _id: '' },
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
      selectedItem: { name: item.name, _id: item['_id'] },
      listVisibility: false,
    });
    this.startTimer();
  }
  focusController = (state) => {
    this.setState({
      listVisibility: state,
    });
  }
  startTimer = () => {
    this.timerInterval = setInterval(() => {
      const timerCopy = { ...this.state.timer };
      if (this.state.timer.seconds < 59) {
        timerCopy.seconds += 1;
      } else if (this.state.timer.minutes < 59) {
        timerCopy.seconds = 0;
        timerCopy.minutes += 1;
      } else {
        timerCopy.seconds = 0;
        timerCopy.minutes = 0;
        timerCopy.hours += 1;
      }
      this.setState({
        timer: timerCopy,
      });
    }, 1000);
  }

  stopTracking = () => {
    fetch('/api/tracker/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        project: this.state.selectedItem._id,
        description: this.state.selectedItemDescription,
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
    clearInterval(this.timerInterval);
    this.setState({
      selectedItemDescription: '',
      timer: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    });
    this.startTimer();
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
