import React from "react";
import "./styles.css";
import A from './A.js';
import B from './B.js';
import C from './C.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }
  render() {
    return (
      <div>
        <A value={this.state.value} />
        <B value={this.state.value} />
        <C value={this.state.value} />
        <br />
        <input 
          type="button"
          value={"Current value: " + this.state.value + ". Click to increment."}
          onClick={() => this.setState({value: this.state.value + 1})}
        />
      </div>
    );
  }
}
