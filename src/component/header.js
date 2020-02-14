import { Component } from "react";
import React from "react";

class Header extends Component {
  state = {
    data: ""
  };

  render() {
    return (
      <div>
        <h1>header</h1>
        <input
          type="text"
          onChange={e => {
            this.setState({ data: e.target.value });
          }}
        />
        <button>Add</button>
        <br />
        <hr />
      </div>
    );
  }
}

export default Header;
