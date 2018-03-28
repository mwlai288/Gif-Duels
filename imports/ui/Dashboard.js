import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import GifDetails from './GifDetails';
import Gifs from '../api/gifs';
import AddGifForm from './AddGifForm';

class Dashboard extends Component {
  // addGif = (e) => {
  //   e.preventDefault();
  //   const urlGif = this.refs.gif.value.trim();
  //   if (urlGif !== '') {
  //     if (Meteor.userId()) {
  //       Meteor.call('insertNewGif', urlGif);
  //       this.refs.gif.value = '';
  //     }
  //   }
  // };

  render() {
    return (
      <div>
        {/* <form onSubmit={this.addGif}>
          <input type="text" placeholder="copy and paste gif url" ref="gif" />
          <button type="submit">Add Gif</button>
        </form> */}
        <AddGifForm />
        <Link to="/voting">To Battle</Link>
        {this.props.gifs.map((gif) => {
          return <GifDetails gif={gif} key={gif._id} />;
        })}
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
