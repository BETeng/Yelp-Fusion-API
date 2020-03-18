import React, { Component } from 'react';
import FetchAPI from './FetchAPI';

class Form extends Component {
    state = {
        search: '',
        apiEndpoint:''
    }


    hanldeChange = event => {
        this.setState({search: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.formInput(this.state.search);
        // this.props.formInput({ apiEndpoint: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.state.search}&location=60540&limit=5`})
        this.setState({ search: '' });
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Search</label>
                    <input
                        type="text"
                        value={this.state.search}
                        onChange={this.hanldeChange}>
                    </input>
                    <input type="submit" />

                </div>
            </form>
        )
    }
}

export default Form;