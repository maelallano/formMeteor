import React, { Component } from 'react';
import Form from '../Form/Form';
import Hello from '../Hello/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to my big form !</h1>
        <Form />
        <Hello />
      </div>
    );
  }
}

export default App;