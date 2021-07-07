import React from 'react';

function Footer() {
    return (
        <footer class="foots">
            <div class="container">
                <div class="row">
                    <div class="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>                    
                        <ul class="list-unstyled">
                            <li><a href="#" class="footer-links">Home</a></li>
                            <li><a href="collections.html" class="footer-links">Collections</a></li>                        
                            <li><a href="categories.html" class="footer-links">Categories</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-sm-5 text-center">
                        <h5>Social</h5>
                        <a class="btn btn-social-icon btn-instagram footer-links" href="http://instagram.com/"><i class="fa fa-instagram"></i></a>
                        <a class="btn btn-social-icon btn-facebook footer-links" href="http://facebook.com/"><i class="fa fa-facebook"></i></a>
                        <a class="btn btn-social-icon btn-twitter footer-links" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                        <a class="btn btn-social-icon btn-google footer-links" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                    </div>
                    <div class="col-sm-4 text-center">
                        <ul class="list=unstyled">
                            <li><a role="button" class="btn btn-link footer-links" href="tel:15555551234"><i class="fa fa-phone footer-links"></i> 1-555-555-1234</a></li>
                            <li><a role="button" class="btn btn-link footer-links" href="mailto:thisemail@thisemail.com"><i class="fa fa-envelope-o footer-links"></i> thisemail@thisemail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;