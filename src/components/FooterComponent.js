import React from 'react';

function Footer() {
    return (
        <footer className="foots">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>                    
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-links">Home</a></li>
                            <li><a href="collections.html" className="footer-links">Collections</a></li>                        
                            <li><a href="categories.html" className="footer-links">Categories</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-5 text-center">
                        <h5>Social</h5>
                        <a className="btn footer-links" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                        <a className="btn footer-links" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>
                        <a className="btn footer-links" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn footer-links" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <ul className="list-unstyled">
                            <li><a role="button" className="btn btn-link footer-links" href="tel:15555551234"><i className="fa fa-phone footer-links"></i> 1-555-555-1234</a></li>
                            <li><a role="button" className="btn btn-link footer-links" href="mailto:thisemail@thisemail.com"><i className="fa fa-envelope-o footer-links"></i> thisemail@thisemail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;