
import React, { Component } from 'react';

class Collections extends React.Component {
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
    }
    
    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
    }
    render() {
        console.log(this.state.matches)
        return (
            <div >
                {this.state.matches && (<h1>Big Screen</h1>)}
                {!this.state.matches && (<h3>Small Screen</h3>)}
            </div>
            
        );
    }
}

export default Collections;
// import React from 'react';

// function Collections() {
//     return (
//         <React.Fragment>
//             <h1 style={{padding: "250px"}}>Custom Collections on Their Way!</h1>
//         </React.Fragment>
//     )
// }


// export default Collections