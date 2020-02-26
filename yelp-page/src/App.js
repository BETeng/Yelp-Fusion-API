import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FetchAPI from './FetchAPI';
import Header from './components/Header';

class App extends Component {
  state = {
    loading: true,
    yelpData: {},
    yelpResults: [],
    ready: false
  }

  formInput = (search) =>{
    console.log('from appjs', search)
  }

  render() {
    return(
    <div className="App">
      <Header />
      <Form formInput={this.formInput}/>
    </div>
    )
  }
}

export default App;
