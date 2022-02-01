import React from 'react';
import CarouselLg from './homeComponents/CarouselLg'
import CarouselXs from './homeComponents/CarouselXs'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            matches: window.matchMedia("(min-width: 576px)").matches,
            size: null
        };
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 576px)").addEventListener('change', handler);
    }

    render() {
        console.log(this.state.matches)
        return (
            <React.Fragment>
                {this.state.matches && (<CarouselLg/>)}
                {!this.state.matches && (<CarouselXs/>)}
            </React.Fragment>
        );
    }
}

export default Home;