import React from "react";

class TwitterMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      charsLeft: this.props.maxChars,
      value: ''
    };
  }

  handleCharLeft = (event) => {
    let newCharLeft = this.props.maxChars - event.target.value.length
    this.setState({charsLeft: newCharLeft, value: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value = {this.state.value} onChange={event => this.handleCharLeft(event)} />
        <h1>{this.state.charsLeft}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
