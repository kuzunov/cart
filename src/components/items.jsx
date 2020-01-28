import Item from "./item";
import React, { Component } from "react";
class items extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.items.map(item => (
          <Item
            key={item.id}
            onDelete={id => this.props.onDelete(id)}
            id={item.id}
            body={item.body}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default items;
