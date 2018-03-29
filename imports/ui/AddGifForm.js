import React, { Component } from 'react';
import { Warning } from '../styles/Styling';

class AddGifForm extends Component {
  addGif = (e) => {
    e.preventDefault();
    const urlGif = this.refs.gif.value.trim();
    if (urlGif !== '') {
      if (Meteor.userId()) {
        Meteor.call('insertNewGif', urlGif);
        Bert.alert('Added Successfully', 'success', 'fixed-top', 'fa-check');
        this.refs.gif.value = '';
      }
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addGif}>
          <input
            type="text"
            placeholder="https://media1.giphy.com/media/"
            ref="gif"
          />
          <button type="submit">Add Gif</button>
          <Warning>* Please use GIF Link url from Giphy.com</Warning>
        </form>
      </div>
    );
  }
}

export default AddGifForm;
