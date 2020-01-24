import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    hanldeSearchChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = event => {
        this.setState({
            search: ''
        })
        console.log(this.state.search);
        console.log(process.env.REACT_APP_API_KEY);
        
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Search</label>
                    <input
                        type="text"
                        value={this.state.search}
                        onChange={this.hanldeSearchChange}>
                    </input>
                    <input type="submit"/>
                </div>
            </form>
        )
    }
}

export default Form;