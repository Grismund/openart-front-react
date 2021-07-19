import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Debug from './Debug';
import Collections from './Collections';
import Categories from './Categories';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                    <Switch>
                        <Route path='/home' component={ Debug } />
                        <Route path='/collections' component={ Collections } />
                        <Route path='/categories' component={ Categories } />
                    </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;