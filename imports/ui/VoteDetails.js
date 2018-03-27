import React from 'react';
import Gifs from '../api/gifs';

const VoteDetails = (props) => {
  vote = () => {
    Meteor.call('voteOnGif', props.gif);
  };

  return (
    <div>
      <div onClick={this.vote}>
        <img src={props.gif.urlGif} alt="" />
        {props.gif.score}
        <button onClick={this.remove}>Delete</button>
      </div>
    </div>
  );
};

export default VoteDetails;
