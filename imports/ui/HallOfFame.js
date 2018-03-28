import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Gifs from '../api/gifs';
import UserScore from './UserScore';
import { TopTen } from '../styles/Styling';

class HallOfFame extends Component {
  render() {
    if (!this.props.ready) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <TopTen>The Top 10</TopTen>
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
        sort: { score: -1 },
        limit: 10
      }
    ).fetch()
  };
})(HallOfFame);
