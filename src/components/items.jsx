import Item from "./item";
import React, { Component } from "react";
import NewForm from "./newform";
class items extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NewForm onNew={this.props.onNew} />
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
