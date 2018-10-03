// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Page from './components/page';

// Styles
import './index.css';

ReactDOM.render(<Page />, document.getElementById('root'));

/*
-Page container - holds carousel component
--Carousel component - holds image and two button components
---Image component - holds the image
---Button component - configurable component that changes the image

-Page component has state
this.state = {
  currentImage: {imageUrl: 'image-url', id: 1},
  images: [
  {imageUrl: 'image-url', id: 1},
  {imageUrl: 'image-url', id: 2}
  ]
}
*/
