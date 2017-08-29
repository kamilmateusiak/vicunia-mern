import React from 'react';
import TrackerProjectInput from '../../components/TrackerProjectInput';
import TrackerDescriptionInput from '../../components/TrackerDescriptionInput';
import TrackerList from '../../components/TrackerList';

const items = [
  { id: 1, name: 'Zzysh' },
  { id: 2, name: 'Archicom' },
  { id: 3, name: 'Wielton' },
  { id: 4, name: 'Nieprojektowe prace produkcji' },
];

export default class Tracker extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    selectedItem: '',
    listVisibility: false,
    selectedItemDescription: '',
  }
  handleOnProjectInputChange = (e) => {
    this.setState({
      selectedItem: e.target.value,
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
      selectedItem: item.name,
      listVisibility: false,
    });
  }
  focusController = (state) => {
    this.setState({
      listVisibility: state,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-3">
          <TrackerProjectInput focusController={this.focusController} selectedItem={this.state.selectedItem} handleOnChange={this.handleOnProjectInputChange} />
          {this.state.listVisibility &&
            <TrackerList handleListItemClick={this.handleListItemClick} items={items.filter((item) => item.name.toUpperCase().indexOf(this.state.selectedItem.toUpperCase()) >= 0)}></TrackerList>
          }
        </div>
        <div className="col-md-3">
          <TrackerDescriptionInput selectedItemDesc={this.state.selectedItemDescription} handleOnChange={this.handleOnDescriptionInputChange} />
        </div>
      </div>
    );
  }
}
