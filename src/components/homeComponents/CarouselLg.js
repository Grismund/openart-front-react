import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';


const items = [
    {
        src: 'assets/images/manet-l.JPG',
        altText: 'painting by Manet',
        header: 'Explore',
        caption: 'Over 10,000 High Quality Works',
    },
    {
        src: 'assets/images/turner-l.jpg',
        altText: 'painting by turner',
        header: 'Best of the Best',
        caption: 'Famous Works Throughout History',
    },
    {
        src: 'assets/images/twombly-l.jpg',
        altText: 'painting by Twombly',
        header: 'Collect',
        caption: 'Save Your Favorites to Create Your Own Gallery',
        style: 'dark'
    }
];
    
const CarouselLg = () => {
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
        //TODO: This if/else statement is a heavy-handed way of turning the text dark on slide 3. Figure something else out.
        if(item.style === 'dark'){
            return (
                <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                >
            <img className="img-fluid" src={item.src} alt={item.altText}/>
            <CarouselCaption className="text-dark" captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
        )
    } else {
        return (
            <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
            >
            <img className="img-fluid" src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.header} />
            </CarouselItem>
        )
        };
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


export default CarouselLg;