import React, { Component } from "react";
import NavBar from "./components/navbar";
import Items from "./components/items";

class App extends Component {
  state = {
    items: [
      { id: 1, body: "item 1" },
      { id: 2, body: "item 2" },
      { id: 3, body: "item 3" },
      { id: 4, body: "item 4" }
    ]
  };
  handleDelete = id => {
    const items = this.state.items.filter(c => c.id !== id);
    this.setState({ items });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <React.Fragment>
          <Items onDelete={this.handleDelete} items={this.state.items} />
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default App;
