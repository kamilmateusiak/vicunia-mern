/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../../components/Navbar/Navbar';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - React.js Project"
          defaultTitle="Projecthub"
          meta={[
            { name: 'description', content: 'Projecthub' },
          ]}
          link={[
            { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' }
          ]}
        />
        <Navbar></Navbar>
        <main style={{ marginTop: '60px', padding: '0 20px' }}>
          {React.Children.toArray(this.props.children)}
        </main>
      </div>
    );
  }
}
