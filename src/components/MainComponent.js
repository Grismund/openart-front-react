import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Footer from './FooterComponent';
import Header from './HeaderComponent';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;