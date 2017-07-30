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
          // link={[
          //   { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' }
          // ]}
          // script={[
          //   { src: 'https://code.jquery.com/jquery-3.2.1.js', integrity: 'sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=', crossorigin: 'anonymous' },
          //   { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', integrity: 'sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa', crossorigin: 'anonymous' }
          // ]}
        />
        <Navbar></Navbar>
        <main style={{ marginTop: '55px' }}>
          <div>
            {React.Children.toArray(this.props.children)}
          </div>
        </main>
      </div>
    );
  }
}
