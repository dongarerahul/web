import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "Initial Data " };
    this.updateState = this.updateState.bind(this);
    console.log("Inside Constructor");
  };

  updateState() {
    this.setState ({data: "Inside Update..."});
    console.log(this.state.data);
  };

  render() {
    console.log("Inside Render");
    return (
      <div>
        <button onClick = {this.updateState}> Click Here to Update State</button>
        <h1> {this.state.data} </h1>
      </div>
    );
  }
}

export default App;
