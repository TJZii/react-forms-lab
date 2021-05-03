import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  tweetChanger = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let totalChars = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.tweetChanger} value={this.state.message}/>
        <p>{totalChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
