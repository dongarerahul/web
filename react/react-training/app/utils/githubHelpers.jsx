var axios = require('axios');

var id = "30e9d23ef8d2eb3498b2";
var sec = "9868de92edbffa974f0109728d3624a5412cc3ea";
var params = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) { // return promise
    return axios.get('https://api.github.com/users/' + username + params)
}

function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + "/repos" + params + "&per_page=100")
}

function getTotalStars(repos) {
    return repos.data.reduce(function(prev, current) {
        return prev + current.stargazers_count
    }, 0);
}

function getPlayerData(player) {
    return getRepos(player.login)
            .then(getTotalStars)
            .then(function(totalStars) {
                return {
                    followers: player.followers, 
                    totalStars: totalStars
                }
            })
}

function calculateScores(players) {
    return[
    players[0].followers * 3 * players[0].totalStars, 
    players[1].followers * 3 * players[1].totalStars
    ]
}

var helpers = {
    getPlayersInfo: function(players) {
        return axios.all(players.map(function (username) {
            return getUserInfo(username);
        })).then(function(info) {
            console.log("INFO: ", info);
            return info.map(function(user) {
                return user.data;
            });
        }).catch(function(err) {
            console.warn("Error in getPlayerInfo: ", err);
        });
    }, 

    battle: function(players) {
        var playerOneData = getPlayerData(players[0]);
        var playerTwoData = getPlayerData(players[1]);
        
        console.log("PlayerOne: ", playerOneData);
        console.log("PlayerTwo: ", playerTwoData);

        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch(function(err) {
                console.log("ERRROR in battle: ", err)
            })
    }
};


module.exports = helpers;