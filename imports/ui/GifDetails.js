import React from 'react';
import Gifs from '../api/gifs';

const GifDetails = (props) => {
  remove = () => {
    Meteor.call('deleteAGif', props.gif);
  };

  return (
    <div>
      <div>
        <img src={props.gif.urlGif} alt="" />
        {props.gif.score}
        <button onClick={this.remove}>Delete</button>
      </div>
    </div>
  );
};

export default GifDetails;
