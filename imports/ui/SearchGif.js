import React, { Component } from 'react';
import axios from 'axios';
import AddGifForm from './AddGifForm';

class SearchGif extends Component {
  state = {
    search: '',
    gifs: []
  };

  findGifs = async (e) => {
    e.preventDefault();
    const search = this.state.search;
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=ovNC00vRyrC0NMdQcPl4XDMdUsEGRVyu&q=${search}&limit=15&offset=0&rating=R&lang=en`
    );
    console.log(res);
    this.setState({
      gifs: res.data.data
    });
  };

  _handleChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <div>
          <input
            onChange={this._handleChange}
            type="text"
            name="search"
            value={this.state.search}
          />
          <button onClick={this.findGifs}>Search</button>
          <AddGifForm />
        </div>
        <div>
          {this.state.gifs.map((gif) => {
            return (
              <div key={gif.id}>
                <img src={gif.images.downsized.url} alt="" />
                <p>{gif.images.downsized.url}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchGif;
