import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FetchAPI from './FetchAPI';
import Header from './components/Header';

class App extends Component {
  state = {
    
  }
  render() {
    return(
    <div className="App">
      <Header />
      <Form />
      {/* <FetchAPI/> */}
    </div>
    )
  }
}

export default App;
