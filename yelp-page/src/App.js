import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FetchAPI from './FetchAPI';
import Header from './components/Header';

const apiKey = process.env.REACT_APP_API_KEY;
const apiEndpoint = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=chinese&location=60540&limit=5';
class App extends Component {
  state = {
    loading: true,
    yelpData: {},
    yelpResults: [],
    ready: false,
    search: '',
    apiEndpoint: ''
  }

  formInput = (search) => {
    this.setState({ search });
    // this.setState({ apiEndpoint: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${search}&location=60540&limit=5` });
    // console.log('from appjs', search);
    // console.log('state', this.state.search);
   this.getInfo(search);
  }

  getInfo = async(search) => {
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
  


  //   async componentDidMount() {
  //     const res = await fetch(apiEndpoint, {
  //         method: "GET",
  //         headers: {
  //             "Authorization": `Bearer ${apiKey}`
  //         }
  //     })
  //     const data = await res.json();
  //     this.setState({ yelpData: data.businesses, loading: false })
  //     console.log(this.state.yelpData)
  // }


  render() {
    return (
      <div className="App">
        <Header />
        <Form formInput={this.formInput} />
      </div>
    )
  }
}

export default App;
