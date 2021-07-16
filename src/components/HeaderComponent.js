import React from 'react';


function Header() {    
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top">
                <div className="container-fluid">   
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#oaNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand mr-auto" href="#">
                        <img src="/assets/imges/raw-logo.png" class="logo"/>
                    </a>
                    <div className="collapse navbar-collapse" id="oaNavbar">
{/* TODO:  style="padding-left: 5px" was applied to below ul element, but i wasn't sure how to add inline styling in jsx. seems like a bad idea anyway*/}
                        <ul className="navbar-nav ml-1">
                            <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="collections.html"> Collections</a></li>
                            <li className="nav-item"><a className="nav-link" href="categories.html"> Categories</a></li>
                        </ul>
                    </div>

                    <div className="navbar-text loginFixed">
                        <button className="btn btn-outline-dark btn-md d-none d-sm-inline" role="button" data-toggle="modal" data-target="#loginModal">Login</button>
                        <a className="btn" role="button" data-toggle="modal" data-target="#loginModal"><i className="fa fa-sign-in fa-lg d-sm-none" ></i></a>
                        

                        <a className="btn" href="cart.html"><i className="fa fa-shopping-cart fa-lg mr-3"></i></a>
                    </div>
                </div>
            </nav>            
        </React.Fragment>
    );
}

export default Header;