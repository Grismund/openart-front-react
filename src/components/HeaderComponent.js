import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
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
                        {/* <NavLink className="mr-auto, nav-link" to="/home"><img src="assets/images/raw-logo.png" className="logo" alt="OpenArt Logo" /></NavLink> */}
                        <NavbarBrand className="mr-auto" href="https://open-art.netlify.app/#/home"><img src="/assets/images/raw-logo.png" className="logo" alt="OpenArt Logo" /></NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" onClick={this.toggleNav}>
                                         Home
                                    </NavLink>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink className="nav-link" to="/collections" onClick={this.toggleNav}>
                                         Collections
                                    </NavLink>
                                </NavItem> */}
                                <NavItem>
                                    <NavLink className="nav-link" to="/categories" onClick={this.toggleNav}>
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
                                    {/* A feature to implement at a later date */}
                                    {/* <Button outline>
                                        <i className="fa fa-shopping-cart fa-lg" />
                                    </Button> */}
                                </span>
                            </div>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

        </React.Fragment>
        );
    }
}

export default Header;