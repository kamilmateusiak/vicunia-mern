import React from 'react';
import ProfileIcon from 'react-icons/lib/md/account-circle';
import Tracker from '../Tracker';
import Uptime from '../Uptime';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  buttonClick = () => {
    console.log('click');
  }
  render() {
    return (
      <div className="container">
        <div>
          <Tracker />
          <ProfileIcon style={{ height: '60px', width: '60px', margin: '10px 0', padding: '10px 0'}} />
        </div>
        <Uptime />
      </div>
    );
  }
}
