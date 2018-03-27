import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Gifs from '../api/gifs';
import UserScore from './UserScore';

class HallOfFame extends Component {
  render() {
    if (!this.props.ready) {
      return <div>Loading</div>;
    }
    console.log(this.props.gifs.user);
    return (
      <div>
        {this.props.gifs.map((gif) => {
          return <UserScore gif={gif} key={gif._id} />;
        })}
      </div>
    );
  }
}

export default withTracker(() => {
  let userScore = Meteor.subscribe('bestUsers');
  return {
    ready: userScore.ready(),
    gifs: Gifs.find(
      {},
      {
        sort: { score: -1 }
      }
    ).fetch()
  };
})(HallOfFame);
