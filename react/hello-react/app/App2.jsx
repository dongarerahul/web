import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         data: [
           {
             component: 'First', id: 1
           },
           {
             component: 'Second', id: 2
           },
           {
             component: 'Third', id: 3
           }
         ]
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState() {
      this.setState({data: ['Data updated from Child Component ...! :)', 0]})
   }

   render() { //Dynamic Component population
      return (
         <div>
            {this.state.data.map((dynamicComponent, id) =>
              <Content myData = {dynamicComponent} key = {id} updateFunction = {this.updateState}/>)}
         </div>
      );
   }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <button onClick = {this.props.updateFunction}>CLICK</button>
        <h4>{this.props.myData.component}, {this.props.myData.id}</h4>
      </div>
    )
  }
}

export default App;
