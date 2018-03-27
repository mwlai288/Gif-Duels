import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Gifs from '../api/gifs';
import VoteDetails from './VoteDetails';

class Vote extends Component {
  // state = {
  //   randomGif: [],
  //   randomGif2: []
  // };
  // getGif = () => {
  //   const gifData = this.props.gifs;
  //   const randomGif = gifData[Math.floor(Math.random() * gifData.length)];
  //   let randomGif2 = gifData[Math.floor(Math.random() * gifData.length)];
  //   this.setState({
  //     randomGif,
  //     randomGif2
  //   });
  //   console.log(randomGif);
  //   console.log(randomGif2);
  // };

  render() {
    console.log(this.props.gifs);
    return (
      <div>
        {this.props.gifs.map((gif) => {
          return <VoteDetails gif={gif} key={gif._id} />;
        })}
        {/* <button onClick={this.getGif}>Start</button> */}
        {/* <button onClick={this.getGif}>Start</button>
        <div>
          <VoteDetails randomGif={this.state.randomGif} />
        </div>
        <div>
          <VoteDetails randomGif={this.state.randomGif2} />
        </div> */}
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
