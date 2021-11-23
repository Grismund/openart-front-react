import React from "react";
import {} from 'reactstrap';

//TODO: Documentation for reactstrap Carousel: https://deploy-preview-2356--reactstrap.netlify.app/components/carousel/
//TODO: Research and import useful components. Change this over to reactstrap

const Carousel = () => {
    return(
        <React.Fragment>

            <div id="carouselFull" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <picture>
                            <source srcset="assets/images/manet-l.jpg" media="(min-width: 577px)"/>
                            <img srcset="assets/images/manet-xs.jpg" alt="painting by Manet" className="d-block img-fluid"/>
                        </picture>                
                        <div className="carousel-caption d-md-block">
                            <h3>Print on Demand Art</h3>
                            <p>Order prints from the greats of the past.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <picture>
                            <source srcset="assets/images/turner-l.jpg" media="(min-width: 577px)"/>
                            <img srcset="assets/images/turner-xs.jpg" alt="painting by Turner" className="d-block img-fluid"/>
                        </picture>
                        <div className="carousel-caption d-md-block">
                            <h3>Famous Artists</h3>
                            <p>Over 10,000 works of art on demand.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <picture>
                            <source srcset="assets/images/twombly-l.jpg" media="(min-width: 577px)"/>
                            <img srcset="assets/images/twombly-xs.jpg" alt="painting by Twombly" className="d-block img-fluid"/>
                        </picture>
                        <div className="carousel-caption text-dark d-md-block">
                            <h3>Search by Style</h3>
                            <p>Find the style that's you.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselFull" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselFull" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </React.Fragment>
    )
}

export default Carousel;