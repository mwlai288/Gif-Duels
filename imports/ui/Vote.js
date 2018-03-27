import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Gifs from '../api/gifs';
import VoteDetails from './VoteDetails';

class Vote extends Component {
  render() {
    console.log(this.props.gifs);
    return (
      <div>
        {this.props.gifs.map((gif) => {
          return <VoteDetails gif={gif} key={gif._id} />;
        })}
      </div>
    );
  }
}

export default withTracker(() => {
  let getRandom = Meteor.subscribe('allGifs');
  return {
    gifs: Gifs.find({}).fetch()
  };
})(Vote);
