# Battleship

A classic game of battleship played against a simple AI. Built using vanilla Javascript, Webpack and Jest.

[👉 Live demo 👈](https://battleship-3a66c.web.app/)

## Instructions to play
  1. Begin by placing ships on your board. The ships can be rotated using the 'Rotate Ship button'.
  2. After all ships are placed you can make an attack on the enemy board by clicking any square on the enemy board.
  3. An 'X' indicates a hit while a 'O' indicates a miss.
  4. The enemy ship is sunk when the all the squares containing an 'X' turn red. 
  5. Trade turns with the Ai until all of one player's ships are sunk and a winner is declared.


## Reflection
  This goal of this project is to get comfortable with TDD. The game will be created using testing rather than console logging and visualizing dom manipulations. I was able to thoroughly practice my skills using Jest. 

  I made extensive use of the ES6 module syntax to keep the core elements of my game logic organized. 

  The DOM interactions were kept seperate from the game logic. I noticed that this improved the cleanliness and readability of my code dramatically.

  This project was a great opprotunity to gain confidence with the javascript Class syntax. 

## Screenshot
![screenshot](/src/images/screenshot.png?raw=true)

## Notes
  - This project is hosted using Firebase.
  - This was built as part of the Odin Project curriculum. [Project description](https://www.theodinproject.com/lessons/javascript-battleship)
