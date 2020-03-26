import React from "react";

export default class A extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memProps: props,
      value: props.value
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (prevState.memProps.value !== nextProps.value) {
      return { ...prevState, ...{ value: nextProps.value, memProps: nextProps } }
    } else {
      return null
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.value !== nextState.value;
  }

  render() {
    console.log("render A");
    return (
      <div>
        Class A with getDerivedStateFromProps: {this.state.value}
      </div>
    );
  }
}