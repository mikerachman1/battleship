import { addBoard } from './domAdditions.js';
import { gameLoop } from './game.js';
import './style.css';

console.log('hello');
addBoard();
const newgame = gameLoop();
newgame.play();