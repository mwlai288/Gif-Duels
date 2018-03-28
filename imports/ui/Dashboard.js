import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { GifGrid } from '../styles/Styling';
import GifDetails from './GifDetails';
import Gifs from '../api/gifs';
import AddGifForm from './AddGifForm';

class Dashboard extends Component {
  render() {
    if (this.props.gifs.length === 0) {
      return (
        <div>
          <p>Enter A Gif To Start</p>
          <AddGifForm />
        </div>
      );
    }
    return (
      <div>
        <AddGifForm />
        <p>Your Gifs </p>
        <GifGrid>
          {this.props.gifs.map((gif) => {
            return <GifDetails gif={gif} key={gif._id} />;
          })}
        </GifGrid>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('userGifs');
  return {
    gifs: Gifs.find({}).fetch()
  };
})(Dashboard);
