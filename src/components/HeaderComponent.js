import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    // Methods
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar light sticky="top" color="white" expand="md">
                    <div className="container-fluid">   
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/imges/raw-logo.png" className="logo" alt="OpenArt Logo" /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                         Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/collections">
                                         Collections
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/categories">
                                         Categories
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                            <div className="loginFixed">
                                <span className="navbar-text ml-auto">
                                    <Button outline onClick={this.toggleModal}>
                                        <i className="fa fa-sign-in fa-lg" /> Login
                                    </Button>
                                </span>
                                <span className="navbar-text ml-auto">
                                    <Button outline>
                                        <i className="fa fa-shopping-cart fa-lg" />
                                    </Button>
                                </span>
                            </div>
                    </div>
                </Navbar>
        </React.Fragment>
        );
    }
}






// function Header() {    
//     return (
        // <React.Fragment>
        //     <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top">
        //         <div className="container-fluid">   
        //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#oaNavbar">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>

        //             <a className="navbar-brand mr-auto" href="#">
        //                 <img src="/assets/imges/raw-logo.png" className="logo"/>
        //             </a>
        //             <div className="collapse navbar-collapse" id="oaNavbar">
        //                 <ul className="navbar-nav ml-1">
        //                     <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
        //                     <li className="nav-item"><a className="nav-link" href="collections.html"> Collections</a></li>
        //                     <li className="nav-item"><a className="nav-link" href="categories.html"> Categories</a></li>
        //                 </ul>
        //             </div>

        //             <div className="navbar-text loginFixed">
        //                 <button className="btn btn-outline-dark btn-md d-none d-sm-inline" role="button" data-toggle="modal" data-target="#loginModal">Login</button>
        //                 <a className="btn" role="button" data-toggle="modal" data-target="#loginModal"><i className="fa fa-sign-in fa-lg d-sm-none" ></i></a>
                        

        //                 <a className="btn" href="cart.html"><i className="fa fa-shopping-cart fa-lg mr-3"></i></a>
        //             </div>
        //         </div>
        //     </nav>            
        // </React.Fragment>
//     );
// }

export default Header;