/*
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, 
tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at 
your disposal: arrays and objects.

After we create these data structures in this project, feel free to challenge yourself to gain insights 
from them. For example, you might want to get the total number of games your team has played, or the 
average score of all of their games.
*/

const team = {
    _players: [
      {firstName: 'Marcus', lastName: 'Rashford', age: 25},
      {firstName: 'Alejandro', lastName: 'Garnacho', age: 18},
      {firstName: 'Luke', lastName: 'Shaw', age: 27}
      ],
    _games: [
      {opponent: 'Liverpool', teamPoints: 3, opponentPoints: 0},
      {opponent: 'City', teamPoints: 2, opponentPoints: 1},
      {opponent: 'Arsenal', teamPoints: 2, opponentPoints: 3}
      ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans', 100, 98);
  console.log(team.games);
  