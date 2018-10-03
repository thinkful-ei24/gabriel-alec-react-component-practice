// React
import React from 'react';

// Components
import Image from './image';

// Styles

export default function Carousel(props) {
  return (
    <div>
      <Image currentImage={props.currentImage} />
    </div>
  );
}
