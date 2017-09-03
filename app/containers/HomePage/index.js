import React from 'react';
import ProfileIcon from 'react-icons/lib/md/account-circle';
import LogoutIcon from 'react-icons/lib/md/power-settings-new';
import Tracker from '../Tracker';
import Uptime from '../Uptime';
import Auth from '../../utils/auth';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  buttonClick = () => {
    console.log('click');
  }
  render() {
    return (
      <div className="container">
        <div>
          <Tracker />
          <ProfileIcon style={{ height: '60px', width: '60px', margin: '10px 0', padding: '10px 0', cursor: 'pointer' }} />
          <LogoutIcon
            onClick={() => {
              Auth.deauthenticateUser(); 
              setTimeout(() => {
                window.location.reload()
              }, 200);
            }}
            style={{ height: '60px', width: '60px', margin: '10px 0', padding: '10px 0', cursor: 'pointer' }}
          />
        </div>
        <Uptime />
      </div>
    );
  }
}
