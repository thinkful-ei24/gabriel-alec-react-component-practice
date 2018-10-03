//react
import React from 'react';

// Components
import Carousel from './carousel';
import ControlButton from './control-button';

// Styles
import './carousel-wrapper.css';

export default function CarouselWrapper(props) {
  return (
    <div className="wrapper-container">
      <div className="carousel-container">
        <Carousel currentImage={props.currentImage} />
      </div>
      <div className="button-container">
        <ControlButton
          buttonFunction={props.previousFunction}
          name="Previous"
        />
        <ControlButton buttonFunction={props.nextFunction} name="Next" />
      </div>
    </div>
  );
}
