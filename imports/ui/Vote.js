import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Gifs from '../api/gifs';
import VoteDetails from './VoteDetails';
import { GifShow } from '../styles/Styling';

class Vote extends Component {
  render() {
    return (
      <GifShow>
        {this.props.gifs.map((gif) => {
          return <VoteDetails gif={gif} key={gif._id} />;
        })}
      </GifShow>
    );
  }
}

export default withTracker(() => {
  let getRandom = Meteor.subscribe('allGifs');
  return {
    gifs: Gifs.find({}).fetch()
  };
})(Vote);
