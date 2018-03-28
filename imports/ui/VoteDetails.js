import React from 'react';
import Gifs from '../api/gifs';
import { GifStyling, GifVote } from '../styles/Styling';
const VoteDetails = (props) => {
  vote = () => {
    Meteor.call('voteOnGif', props.gif);
  };

  return (
    <GifVote onClick={this.vote}>
      <GifStyling src={props.gif.urlGif} alt="" />
    </GifVote>
  );
};

export default VoteDetails;
