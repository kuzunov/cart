import React, { Component } from "react";

class NewForm extends Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form
        onSubmit={event => {
          this.props.onNew(this.item.value);
          event.preventDefault();
        }}
      >
        <label>
          Name:
          <input
            type="text"
            //value={this.state.value}
            ref={item => (this.item = item)}
            //onChange={this.handleChange}
            defaultValue=" "
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewForm;
