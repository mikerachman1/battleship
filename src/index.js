/* eslint-disable import/extensions */
import { addBoard } from './domAdditions.js';
import { gameLoop } from './game.js';
import './style.css';

addBoard();
const newgame = gameLoop();
newgame.play();
