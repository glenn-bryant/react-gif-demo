import React, { Component } from 'react';

import Gif from "./gif";
import GifList from "./gifList";
import SearchBar from "./searchBar";

const giphy = require('giphy-api')({
  apiKey: 'RKi01VdLXr15fX1qvVWT1tg3zMwHVfb4',
  https: true
});

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifId: "l41lIsOThQpma23wA",
      gifIds: ["l41lIsOThQpma23wA", "J2CLvzhay29UwhkAKT", "26BkNIqbzQIXdUi08"]
    };
  }

  changeSelectedGif = (newGifId) => {
    this.setState({
      gifId: newGifId
    });
  }

  changeGifList = (keyword) => {
    giphy.search({
      q: [keyword, "drake"],
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ gifIds: res.data.map((gif) => gif.id) });
    });
  }

  render() {
    const { gifId, gifIds } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar changeGifList={this.changeGifList} />
          <div className="selected-gif">
            <Gif gifId={gifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIds={gifIds} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}
