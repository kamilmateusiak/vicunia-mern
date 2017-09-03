import React from 'react';
import LoginForm from '../../components/LoginForm';
import Auth from '../../utils/auth';

export default class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: '',
      },
    };
  }

  processForm = (event) => {
    event.preventDefault();

    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.user.email,
        password: this.state.user.password,
      }),
    })
    .then((response) => {
      if (response.status === 200) {
        this.setState({
          errors: {},
        });
        return response.json()
          .then((data) => {
            Auth.authenticateUser(data.token);
            this.context.router.replace('/');
          })
      }
      return response.json()
        .then((data) => {
          console.log(data)
          const errors = data.errors ? data.errors : {};
          errors.summary = data.message;
          this.setState({
            errors,
          });
        });
    });
  }

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }

  render() {
    return (
      <div className="container">
        <LoginForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
      </div>
    );
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
