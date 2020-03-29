import React from "react";

export default class C extends React.Component {
  render() {
    console.log("render C");
    return (
      <div>
        Class C without getDerivedStateFromProps: {this.props.value}
      </div>
    );
  }
}