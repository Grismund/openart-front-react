import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Collections from './Collections';
import Categories from './Categories';
import Home from './Home';
import {} from 'reactstrap';


class Main extends Component {
    render() {
        //TODO: loading localhost:3000 results in empty content. 
        //TODO:FOUND! This is fixed by <Redirect>.
        return (
            <React.Fragment>
                <Header />
                    <Switch>
                        <Route path='/home' component={ Home } />
                        <Route path='/collections' component={ Collections } />
                        <Route path='/categories' component={ Categories } />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;