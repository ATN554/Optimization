import React from "react";

export default class C extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    }
  }

  render() {
    console.log("render C");
    return (
      <div>
        Class C without getDerivedStateFromProps: {this.state.value}
      </div>
    );
  }
}