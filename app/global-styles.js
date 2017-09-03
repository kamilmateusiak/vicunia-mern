import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'Lato';
    src: url('https://fonts.googleapis.com/css?family=Lato:400&subset=latin-ext');;
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 14px;
  }

  body {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Lato', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Lato', Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
