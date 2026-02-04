
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
const [players1, players2] = game.players 
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2]
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {odds:{team1, x: draw, team2}} = game
console.log(team1, draw, team2);

function printGoals(...players){
  console.log(`${players.length} goals were sccored`);
}
printGoals(...game.scored)

game.odds.team1 < game.odds.team2 && console.log('Team 1 is more likely to win!')
game.odds.team1 > game.odds.team2 && console.log('Team 2 is more likely to win!')
*/

// 1
for(const [goal,player] of game.scored.entries()){
  console.log(`Goal ${goal+1}: ${player}`);
}

// 2
let sum = 0;
const oddValues = Object.values(game.odds)
for(const odd of oddValues){
  sum+=odd;
}
const average = sum / oddValues.length
console.log(average);

// 3
for (const [key, value] of Object.entries(game.odds)){
  const teamStr = key === 'x' ? 'draw': `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${value}`);
  // console.log(`Odd of${game?.[key] && ' victory' || ''} ${game?.[key] || 'draw'}: ${value}`);
}

// 4
const scorers = {}
for(const player of game.scored){
  // console.log(typeof scorers[player]);
  scorers[player] ? scorers[player]++: scorers[player] = 1
}

console.log(scorers);
