import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Footer from './FooterComponent';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;