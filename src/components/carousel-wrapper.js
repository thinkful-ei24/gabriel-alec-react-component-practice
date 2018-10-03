//react
import React from 'react';
import Carousel from './carousel';
import ControlButton from './control-button';


export default function Carousel(props){
  return (
    <div class="wrapper">
    <Carousel currentImage={this.state.currentImage} />
    <ControlButton buttonFunction={this.setPreviousImage} name="Previous" />
    <ControlButton buttonFunction={this.setNextImage} name="Next" />
    </div>
  )
}
