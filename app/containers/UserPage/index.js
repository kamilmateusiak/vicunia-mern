import React from 'react';

export default class ProjectPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

    componentDidMount () {
 
    }
  

  render() {
    return (
      <div className="container">
        <form action="/uploads" id="upload-form" encType="multipart/form-data" method="post">
            <input type="file" name="my_file" multiple="multiple" />
        </form>
      </div>
    );
  }
}
