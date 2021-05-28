import React, { Component } from 'react';

import Gif from "./gif";
import GifList from "./gifList";
import SearchBar from "./searchBar";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifId: "HuVCpmfKheI2Q",
      gifIds: ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]
    };
  }

  changeSelectedGif = (newGifId) => {
    this.setState({
      gifId: newGifId
    });
  }

  render() {
    const { gifId, gifIds } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
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
