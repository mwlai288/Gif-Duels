import React, { Component } from 'react';

class AddGifForm extends Component {
  addGif = (e) => {
    e.preventDefault();
    const urlGif = this.refs.gif.value.trim();
    if (urlGif !== '') {
      if (Meteor.userId()) {
        Meteor.call('insertNewGif', urlGif, (err, res) => {
          if (err) {
            throw new Meteor.Error('invalid gif url');
          }
        });
        this.refs.gif.value = '';
      }
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addGif}>
          <input type="text" placeholder="copy and paste gif url" ref="gif" />
          <button type="submit">Add Gif</button>
        </form>
      </div>
    );
  }
}

export default AddGifForm;
