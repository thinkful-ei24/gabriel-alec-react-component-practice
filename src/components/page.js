// React
import React from 'react';

// Components
import Carousel from './carousel';
import ControlButton from './control-button';

// Styles

export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: { imageURL: 'https://i.imgur.com/IlQPbJp.png?1', id: 1 },

      images: [
        {
          imageURL: 'https://i.imgur.com/IlQPbJp.png?1',
          alt: 'World blowing up',
          id: 1
        },
        {
          imageURL: 'https://i.imgur.com/sU1Nu5C.jpg',
          alt: 'Halloween graph',
          id: 2
        },
        {
          imageURL: 'https://i.imgur.com/lv6ZSYM.jpg',
          alt: 'Spiderman looking at things',
          id: 3
        }
      ]
    };

    this.setPreviousImage = this.setPreviousImage.bind(this);
    this.setNextImage = this.setNextImage.bind(this);
  }

  setPreviousImage() {
    console.log('prev image');
    if (this.state.currentImage.id !== 1) {
      const prevImage = this.state.images.find(image => {
        return image.id === this.state.currentImage.id - 1;
      });

      this.setState({ currentImage: prevImage });
    }
  }

  setNextImage() {
    console.log('next image');
    if (this.state.currentImage.id < this.state.images.length) {
      const nextImage = this.state.images.find(image => {
        return image.id === this.state.currentImage.id + 1;
      });

      this.setState({ currentImage: nextImage });
    }
  }

//this is where we'll render the wrapper
  render() {
    return (
      <div>
      </div>
    );
  }
}
