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
        // console.log(data);
        // console.log('yelpdata:', this.state.yelpData);


        // const yelpResults = this.state.yelpData.map(({alias}) => {
        //     return <p key={alias}></p>
        // }
        // )
        // console.log('yelpResults', yelpResults);
        // const yelpResults = await {ready: true};
        this.setState({ yelpResults: this.state.yelpData, ready: true }, 
            () => {this.state.yelpResults.map(({result}) => <div key={result.id}>{result.alias} </div>)})
        
        console.log('YelpResults', this.state.yelpResults);
    
        
    }

    render() {
        // console.log("renderfuxn", this.state.yelpData)
        if (this.state.loading) {
            return <div>loadeeng</div>;
        }

        // if (!this.state.yelpData){
        //     return <div>didnt get data</div>;
        // }
        console.log(this.state.ready)
        console.log('renderYelpResults', this.state.yelpResults);

        return (
            <div>
                <div>{this.state.yelpData[0].alias}</div>
            </div>
        )


    }
}
