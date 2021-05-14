import Game from "./Game.js";
import GameView from "./gameView.js";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));

// define functions for 

gameView.onTileClick = function(i) {
    console.log(`Tile clicked: ${i}`);
    game.makeMove(i);
    gameView.update(game);
};

gameView.onRestartClick = function() {
    console.log("Game is restarted")
    game = new Game();
    gameView.update(game);
}

gameView.update(game);