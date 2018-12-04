import React, { Component } from 'react';
import * as $ from 'axios';


class App extends Component {

  state = {
    notesList: [],
    newNote: ''
  }

  handleChange = (event) => {
    this.setState({newNote: event.target.value})
  }

  handleClick = (event) => {
    event.preventDefault();
    /*
    $.post('/api/note', {content: this.state.newNote})
    .then((result) => {
      console.log(result.data);
    }) */
  }

  componentDidMount(){
    /* $.get('/api/notes')
    .then((result) => {
      this.setState({notesList: result.data})
    }) */
  }

  render() {
    return (
      <div className="App">
        <form>
          <input val={this.state.newNote} onChange={this.handleChange} />
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
