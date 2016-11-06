import React from 'react';
import ReactDOM from 'react-dom';

class C extends React.Component {
  render() {
    return <h1>C</h1>
  }
}

ReactDOM.render(<C/>, document.getElementById('c'));