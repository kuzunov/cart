import React, { Component } from "react";
import NavBar from "./components/navbar";
import Items from "./components/items";

class App extends Component {
  constructor() {
    super();
    this.state.items = [
      { id: 1, body: "item 1" },
      { id: 2, body: "item 2" },
      { id: 3, body: "item 3" },
      { id: 4, body: "item 4" }
    ];
  }
  state = { items: [] };

  handleDelete = id => {
    const items = this.state.items.filter(c => c.id !== id);
    this.setState({ items });
  };
  handleNew = newBody => {
    const itemsNew = [...this.state.items].concat({
      id: this.state.items.length + 1,
      body: newBody
    });
    this.setState({ items: itemsNew });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar num={this.state.items.length} />
        <React.Fragment>
          <Items
            onDelete={this.handleDelete}
            items={this.state.items}
            onNew={this.handleNew}
          />
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default App;
