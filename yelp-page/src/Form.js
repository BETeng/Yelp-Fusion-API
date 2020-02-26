import React, { Component } from 'react';
import FetchAPI from './FetchAPI';

class Form extends Component {
    state = {
        search: ''
    }


    hanldeChange = event => {
        this.setState({search: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.formInput(this.state.search);
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