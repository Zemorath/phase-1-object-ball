function gameObject() {
    //gameInfo
    const game = {
        //team
        home: {
            //teamInfo
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anders": {
                    Number: 0,
                    Shoe: 16,
                    Points: 22,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 3,
                    Blocks: 1,
                    "Slam Dunks": 1,
                },
                "Reggie Evans": {
                    Number: 30,
                    Shoe: 14,
                    Points: 12,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 12,
                    Blocks: 12,
                    "Slam Dunks": 7,
                },
                "Brook Lopez": {
                    Number: 11,
                    Shoe: 17,
                    Points: 17,
                    Rebounds: 19,
                    Assists: 10,
                    Steals: 3,
                    Blocks: 1,
                    "Slam Dunks": 15,
                },
                "Mason Plumlee": {
                    Number: 1,
                    Shoe: 19,
                    Points: 26,
                    Rebounds: 12,
                    Assists: 6,
                    Steals: 3,
                    Blocks: 8,
                    "Slam Dunks": 5,
                },
                "Jason Terry": {
                    Number: 31,
                    Shoe: 15,
                    Points: 19,
                    Rebounds: 2,
                    Assists: 2,
                    Steals: 4,
                    Blocks: 11,
                    "Slam Dunks": 1,
                },
            },
        },
        //team
        away: {
            //teamInfo
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    Number: 4,
                    Shoe: 18,
                    Points: 10,
                    Rebounds: 1,
                    Assists: 1,
                    Steals: 2,
                    Blocks: 7,
                    "Slam Dunks": 2,
                },
                "Bismak Biyombo": {
                    Number: 0,
                    Shoe: 16,
                    Points: 12,
                    Rebounds: 4,
                    Assists: 7,
                    Steals: 7,
                    Blocks: 15,
                    "Slam Dunks": 10,
                },
                "DeSagna Diop": {
                    Number: 2,
                    Shoe: 14,
                    Points: 24,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 4,
                    Blocks: 5,
                    "Slam Dunks": 5,
                },
                "Ben Gordon": {
                    Number: 8,
                    Shoe: 15,
                    Points: 33,
                    Rebounds: 3,
                    Assists: 2,
                    Steals: 1,
                    Blocks: 1,
                    "Slam Dunks": 0,
                },
                "Brendan Haywood": {
                    Number: 33,
                    Shoe: 15,
                    Points: 6,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 22,
                    Blocks: 5,
                    "Slam Dunks": 12,
                },
            },
        },
    }
    return game;
};

//console.log(gameObject());
let allPlayers = {
    ...gameObject().home.players,
    ...gameObject().away.players
};

let homePlayers = {
    ...gameObject().home.players
};

let awayPlayers = {
    ...gameObject().away.players
};

//console.log(allPlayers);

function numPointsScored(playersName) {
    
    for (let player in allPlayers) {
        debugger
        if (playersName===player) {
            console.log(allPlayers[playersName].Points);
            return allPlayers[playersName].Points;
        }
    }
}
numPointsScored('Reggie Evans');

function shoeSize(playersName) {
    
    for (let player in allPlayers) {
        debugger
        if (playersName===player) {
            console.log(allPlayers[playersName].Shoe);
            return allPlayers[playersName].Shoe;
        }
    }
}
shoeSize('Reggie Evans');

function teamColors(teamName) {
    if (teamName === gameObject().away.teamName) {
        console.log(gameObject().away.colors);
        return gameObject().away.colors;
    } else {
        console.log(gameObject().home.colors);
        return gameObject().home.colors;
    }
}

teamColors("Charlotte Hornets")

function teamNames() {
    let teamArray = [];
    teamArray.push(gameObject().away.teamName);
    teamArray.push(gameObject().home.teamName);
    console.log(teamArray);
    return teamArray;
}

teamNames();

function playerNumbers(teamName) {
    let playerNumberArray = [];
    if (teamName===gameObject().away.teamName) {
        for (let player in awayPlayers) {
            playerNumberArray.push(player, awayPlayers[player].Number);
        }
    } else {
        for (let player in homePlayers) {
            playerNumberArray.push(player, homePlayers[player].Number);
        }
    }
    console.log(playerNumberArray);
    return playerNumberArray;
}

playerNumbers("Charlotte Hornets");

function playerStats(playerName) {
    for (let player in allPlayers) {
        debugger
        if (playerName===player) {
            let statBlock = {...allPlayers[playerName]};
            console.log(statBlock);
            return (statBlock);
        }
    }
}

playerStats("Ben Gordon");

function bigShoeRebounds() {
    let shoeSizes = []
    for (let player in allPlayers) {
        debugger
        shoeSizes.push(allPlayers[player].Shoe)
    };

    let maxSize = Math.max(...shoeSizes);
    //console.log(shoeSizes);
    //console.log(maxSize);
    
    for (let player in allPlayers) {
        if (maxSize===allPlayers[player].Shoe) {
            console.log(allPlayers[player].Rebounds);
            return allPlayers[player].Rebounds;
        }
    }
}

bigShoeRebounds();

function mostPointsScored() {
    let mostPoints = [];
    for (let player in allPlayers) {
        mostPoints.push(allPlayers[player].Points)
    }

    let maxPoints = Math.max(...mostPoints);
    console.log(maxPoints);

    for (let player in allPlayers) {
        if (maxPoints===allPlayers[player].Points) {
            console.log(player);
            return player;
        }
    }
}

mostPointsScored();

function winningTeam() {
    let awayPoints = 0;
    let homePoints = 0;
    for (let player in awayPlayers) {
        //console.log(awayPlayers[player].Points)
        awayPoints += awayPlayers[player].Points;
    }
    for (let player in homePlayers) {
        //console.log(homePlayers[player].Points)
        homePoints += homePlayers[player].Points;
    }
    //console.log(awayPoints);
    //console.log(homePoints);

    if (awayPoints > homePoints) {
        console.log(gameObject().away.teamName)
    } else {
        console.log(gameObject().home.teamName)
    };
}

winningTeam();

function playerWithLongestName() {
    var longestName = "";
    let longestNameLength = 0;

    for (let player in allPlayers) {
        let nameLength = player;
        if (nameLength.length>longestNameLength) {
            var longestName = player;
        }
    }
    console.log(longestName)
}

playerWithLongestName();

function doesLongNameStealATon() {
    var longestName = "";
    let longestNameLength = 0;

    for (let player in allPlayers) {
        let nameLength = player;
        if (nameLength.length>longestNameLength) {
            var longestName = player;
        }
    }

    let mostSteals = [];
    for (let player in allPlayers) {
        mostSteals.push(allPlayers[player].Steals)
    }

    let maxSteals = Math.max(...mostSteals);
    //console.log(maxSteals);

    if (allPlayers[longestName].Steals===maxSteals) {
        return true;
    } else {
        return false;
    }
}

doesLongNameStealATon();
console.log(doesLongNameStealATon());