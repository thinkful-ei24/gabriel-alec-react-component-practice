// React
import React from 'react';

// Components

// Styles
import './image.css';

export default function Image(props) {
  return (
    <img
      src={props.currentImage.imageURL}
      className="image-container"
      alt={props.currentImage.alt}
    />
  );
}
