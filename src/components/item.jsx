import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <p>
        {this.props.id} Body: {this.props.body}
        <button onClick={() => this.props.onDelete(this.props.id)}>X</button>
      </p>
    );
  }
}

export default Item;
