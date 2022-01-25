import React, { useState } from 'react';
import {CarouselItem, CarouselIndicators, CarouselCaption, CarouselControl, } from 'reactstrap';



//TODO: Documentation for reactstrap Carousel: https://deploy-preview-2356--reactstrap.netlify.app/components/carousel/
//TODO: Research and import useful components. Change this over to reactstrap

const items = [
    {
      src: 'assets/images/manet-l.jpg',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: 'assets/images/turner-l.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: 'assets/images/twombly-l.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];
  
  const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }


        // <React.Fragment>

        //     <div id="carouselFull" className="carousel slide" data-ride="carousel">
        //         <ol className="carousel-indicators">
        //             <li data-target="#carousel-indicators" data-slide-to="0" className="active"></li>
        //             <li data-target="#carousel-indicators" data-slide-to="1"></li>
        //             <li data-target="#carousel-indicators" data-slide-to="2"></li>
        //         </ol>
        //         <div className="carousel-inner">
        //             <div className="carousel-item active">
        //                 <picture>
        //                     <source srcset="assets/images/manet-l.jpg" media="(min-width: 577px)"/>
        //                     <img srcset="assets/images/manet-xs.jpg" alt="painting by Manet" className="d-block img-fluid"/>
        //                 </picture>                
        //                 <div className="carousel-caption d-md-block">
        //                     <h3>Print on Demand Art</h3>
        //                     <p>Order prints from the greats of the past.</p>
        //                 </div>
        //             </div>
        //             <div className="carousel-item">
        //                 <picture>
        //                     <source srcset="assets/images/turner-l.jpg" media="(min-width: 577px)"/>
        //                     <img srcset="assets/images/turner-xs.jpg" alt="painting by Turner" className="d-block img-fluid"/>
        //                 </picture>
        //                 <div className="carousel-caption d-md-block">
        //                     <h3>Famous Artists</h3>
        //                     <p>Over 10,000 works of art on demand.</p>
        //                 </div>
        //             </div>
        //             <div className="carousel-item">
        //                 <picture>
        //                     <source srcset="assets/images/twombly-l.jpg" media="(min-width: 577px)"/>
        //                     <img srcset="assets/images/twombly-xs.jpg" alt="painting by Twombly" className="d-block img-fluid"/>
        //                 </picture>
        //                 <div className="carousel-caption text-dark d-md-block">
        //                     <h3>Search by Style</h3>
        //                     <p>Find the style that's you.</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <a className="carousel-control-prev" href="#carouselFull" role="button" data-slide="prev">
        //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span className="sr-only">Previous</span>
        //         </a>
        //         <a className="carousel-control-next" href="#carouselFull" role="button" data-slide="next">
        //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span className="sr-only">Next</span>
        //         </a>
        //     </div>
        // </React.Fragment>

export default Carousel;