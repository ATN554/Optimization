import React from "react";

export default class B extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.value !== nextState.value;
  }

  render() {
    console.log("render B");
    return (
      <div>
        Class B without getDerivedStateFromProps: {this.state.value}
      </div>
    );
  }
}