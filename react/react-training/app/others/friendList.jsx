var React = require('react');
var ReactDOM = require('react-dom');

var FriendContainer = React.createClass({
  render: function() {
    var name = "Rahul Dongare";
    var friends = ["ABC", "XYZ", "PQR"];

    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
});

var ShowList = React.createClass({
  render: function() {
    var list = this.props.names.map(function(friend) {
      return <li> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul> {list} </ul>
      </div>    
    )
  }
});

ReactDOM.render(<FriendContainer />, document.getElementById('app'));
