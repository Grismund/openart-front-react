import React, { Component, useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';


class Collections extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            matches: window.matchMedia("(min-width: 768px)").matches 
        };
    }
    
    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
    }
    render() {
        return (
            <div >
                {this.state.matches && (CarouselDebug)}
                {!this.state.matches && (<h3>Small Screen</h3>)}
            </div>
        );
    }
}
    
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
            caption: 'Slide 3',
            style: 'dark'
        }
    ];
    
    const CarouselDebug = (props) => {
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
                <CarouselCaption className="text-dark" captionText={item.caption} captionHeader={item.caption} />
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
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
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


export default CarouselDebug;