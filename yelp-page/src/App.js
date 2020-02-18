import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Search from './Search'
import FetchAPI from './FetchAPI';
import Fetch2 from './Fetch2';

class App extends Component {
  render() {
    return(
    <div className="App">
      {/* <Form /> */}
      <FetchAPI/>
    </div>
    )
  }
}

export default App;
