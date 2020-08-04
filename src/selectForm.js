import React from "react";

class SelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value === "ID") {
      alert(this.state.value);
    }
    if (this.state.value === "Description") {
      alert(this.state.value);
    }
    if (this.state.value === "Link") {
      alert(this.state.value);
    }
    if (this.state.value === "Query") {
      alert(this.state.value);
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Selected parameter:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="ID">ID</option>
            <option value="Description">Description</option>
            <option value="Link">Link</option>
            <option value="Query">Query</option>
          </select>
        </label>
        <input type="submit" value="click" />
      </form>
    );
  }
}

export default SelectForm;