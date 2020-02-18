import React from 'react';

const apiKey = process.env.REACT_APP_API_KEY;
const apiEndpoint = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=chipotle&location=60540&limit=5"

export default class FetchAPI extends React.Component {

    state = {
        loading: true,
        yelpData: {},
        yelpResults: [],
        ready: false
    }
    async componentDidMount() {
        const res = await fetch(apiEndpoint, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apiKey}`
            }
        })
        const data = await res.json();
        this.setState({ yelpData: data.businesses, loading: false })
        console.log(this.state.yelpData)
    }

    render() {
        if (!this.state.yelpData.length) {
            return (<div>loading</div>)
        }

        return (
            <div>
                {this.state.yelpData.map(entry => (
                    <div>
                        <div>
                            {entry.alias}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
