import React, { Component } from 'react';
import Gifs from '../api/gifs';
import axios from 'axios';
import AddGifForm from './AddGifForm';
import { GifGrid, GifStyling, Search } from '../styles/Styling';

class SearchGif extends Component {
  state = {
    search: '',
    gifs: []
  };

  findGifs = async (e) => {
    e.preventDefault();
    const search = this.state.search;
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=ovNC00vRyrC0NMdQcPl4XDMdUsEGRVyu&q=${search}&offset=0&rating=PG-13&lang=en&limit=15`
    );

    this.setState({
      gifs: res.data.data
    });
  };

  _handleChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  addIt = () => {
    Meteor.call('insertNewGif', urlGif, (err, res) => {
      if (err) {
        throw new Meteor.Error('invalid gif url');
      }
    });
  };

  render() {
    return (
      <div>
        <Search>
          <form>
            <input
              onChange={this._handleChange}
              type="text"
              name="search"
              value={this.state.search}
              placeholder="Search"
            />
            <button onClick={this.findGifs}>Search</button>
          </form>

          <AddGifForm />
        </Search>
        <GifGrid>
          {this.state.gifs.map((gif) => {
            return (
              <div key={gif.id}>
                <GifStyling src={gif.images.downsized.url} alt="" />
                <h5>{gif.images.downsized.url}</h5>
                <button onClick={this.addIt}>Add</button>
              </div>
            );
          })}
        </GifGrid>
      </div>
    );
  }
}

export default SearchGif;
