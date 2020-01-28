import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>Number of items: {this.props.num} </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
