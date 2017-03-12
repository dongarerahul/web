var React = require('react');
var PropTypes = React.PropTypes;
var styles = require("../styles");
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;
var MainContainer = require('../components/MainContainer');
var Loading = require('../components/LoadingContainer');

function puke(object) {
    return <pre>{JSON.stringify(object, 2, ' ')}</pre>
}

function StartOver() {
    return (
        <div className="col-sm-12" style={styles.space}>
            <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-danger">Start Over</button>
            </Link>
        </div>
    )
}

function Results(props) {
    console.log("PROPS:", props);
    console.log("SCORES-0: ", props.scores[0]);
    console.log("SCORES-1: ", props.scores[1]);
    
    if(props.isLoading == true) {
        return <Loading text = "One Moment" speed={100} />
    }

    if(props.scores[0] == props.scores[1]) {
        return(
            <MainContainer>
                <h1>It's a tie !</h1>
                <StartOver />
            </MainContainer>
        )
    }

    var winnerIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var loserIndex = winnerIndex == 1 ? 0 : 1;
    
    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={props.scores[winnerIndex]} info={props.playersInfo[winnerIndex]} />
                </UserDetailsWrapper>
                
                <UserDetailsWrapper header="Loser">
                    <UserDetails score={props.scores[loserIndex]} info={props.playersInfo[loserIndex]} />
                </UserDetailsWrapper>
            </div>

            <StartOver />
        </MainContainer>
    );
};



module.exports = Results;