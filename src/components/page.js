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
        { imageURL: 'https://i.imgur.com/IlQPbJp.png?1', id: 1 },
        { imageURL: 'https://i.imgur.com/sU1Nu5C.jpg', id: 2 },
        { imageURL: 'https://i.imgur.com/lv6ZSYM.jpg', id: 3 }
      ]
    };
  }

  render() {
    return (
      <div>
        <ControlButton />
        <Carousel currentImage={this.state.currentImage} />
        <ControlButton />
      </div>
    );
  }
}
