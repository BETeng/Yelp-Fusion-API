import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Header from './components/Header';

const apiKey = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    loading: true,
    yelpData: {},
    yelpResults: [],
    search: '',
    apiEndpoint: ''
  }

  formInput = (search) => {
    this.setState({ search });
    this.getInfo(search);
  }

  getInfo = async (search) => {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${search}&location=60540&limit=5`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    })
    const data = await res.json();
    this.setState({ yelpData: data.businesses, loading: false })
    console.log(this.state.yelpData);
    console.log('');
  }


  render() {
    if (this.state.loading) {
      return (
        <div>
          <Header />
          <Form formInput={this.formInput} />
        </div>
      )
    }

    return (
      <div className="App">
        <Header />
        <Form formInput={this.formInput} />

        <div>
          {this.state.yelpData.map(entry => (
            <div key={entry.id}>
              <div>
                {entry.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
    
  }


} // component bracket



export default App;
