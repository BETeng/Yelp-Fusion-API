import React from 'react';
import FetchAPI from './FetchAPI';

class Form extends React.Component {
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
        event.preventDefault();
        this.setState({
            search: ''
        });
        console.log('search: ',this.state.search);
        // console.log(process.env.REACT_APP_API_KEY);
        // console.log('props', props)
        console.log('this.props', this.props)


        FetchAPI();
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