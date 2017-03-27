import React from 'react'

class App1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'Initial Data ...'
    }
  this.updateState = this.updateState.bind(this);
  };

  updateState() {
    this.setState({data: 'Data Updated...'})
  }

  render() {
    return(
      <div>
        <button onClick = {this.updateState}> Click to Update State</button>
        <h4> { this.state.data} </h4>
      </div>
    )
  }
}

export default App1;
