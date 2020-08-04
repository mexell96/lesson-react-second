import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      Description: "",
      Link: "",
      Query: "",
      value: "Link",
    };
  }

  componentDidMount() {
    this.setState({
      // по умолчанию
      ID: "",
      Description: "",
      Link: "",
      Query: "",
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeSelect = (e) => {
    this.setState({ value: e.target.value });
  };

  componentDidUpdate() {
    console.table(this.state);
  }

  render() {
    return (
      <>
        <div>Search by ID</div>
        <input
          name="ID"
          value={this.state.ID}
          onChange={this.handleChange}
        ></input>

        <div>Search by description</div>
        <input
          name="Description"
          value={this.state.Description}
          onChange={this.handleChange}
        ></input>

        <div>Search by link</div>
        <input
          name="Link"
          value={this.state.Link}
          onChange={this.handleChange}
        ></input>

        <div>Search by query</div>
        <input
          name="Query"
          value={this.state.Query}
          onChange={this.handleChange}
        ></input>

        <select value={this.state.value} onChange={this.handleChange}>
          <option value="ID">ID</option>
          <option value="Description">Description</option>
          <option value="Link">Link</option>
          <option value="Query">Query</option>
        </select>

      </>
    );
  }
}

export default App;