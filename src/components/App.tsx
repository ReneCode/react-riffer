import * as React from "react";
import "./App.css";
import Bookmarks from "./Bookmarks";

import Music from "./Music";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Music />
        </div>
        <div>
          <Bookmarks />
        </div>
      </div>
    );
  }
}

export default App;
