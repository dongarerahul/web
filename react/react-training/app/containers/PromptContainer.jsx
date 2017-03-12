var React = require('react');
var Prompt = require('../components/Prompt');
var transparentBg = require('../styles').transparentBg

var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired    
    }, 

    getInitialState: function() {
        return {
            username: ""
        }
    }, 

    handleUpdateUser: function(event) {
        this.setState( {
            username: event.target.value
        })
    }, 

    handleSubmitUser: function(event) {
        event.preventDefault();
        var username = this.state.username;
        this.setState( {
            username: ''
        });

        if(this.props.routeParams.playerOne) {
            console.log(this.context);
            this.context.router.push({
                pathname: '/battle', 
                query: {
                    playerOne: this.props.routeParams.playerOne, 
                    playerTwo: this.state.username
                }
            });
        } else {
            console.log(this.context);
            this.context.router.push('/playerTwo/' + this.state.username);
        }
    }, 

    render: function() {
        return (
            <Prompt 
                handleSubmitUser = {this.handleSubmitUser}
                handleUpdateUser ={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username}
            />
        );
    }
});

module.exports = PromptContainer;