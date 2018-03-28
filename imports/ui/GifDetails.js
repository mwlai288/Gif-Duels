import React from 'react';
import Gifs from '../api/gifs';
import { GifStyling } from '../styles/Styling';

const GifDetails = (props) => {
  remove = () => {
    Meteor.call('deleteAGif', props.gif);
  };

  return (
    <div>
      <GifStyling src={props.gif.urlGif} alt="" />
      <h2>{props.gif.score}</h2>
      <button onClick={this.remove}>Delete</button>
    </div>
  );
};

export default GifDetails;
