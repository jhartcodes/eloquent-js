// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size
// = 8 and change the program so that it works for any size, outputting a grid
// of the given width and height.

let board = "";
let size = 4;

// for (let i = 0; i < size; i++) {
//   for (var a = 0; a < size; a++) {
//     board += a % 2 == i % 2 ? " " : "#";
//   }
//   board += "\n";
// }

// dummer solution

for (var z = 0; z < size; z++) {
  for (var y = 1; y < size; y++) {
    if (board[y - 1] === " ") board += "#";
    else board += " ";
  }
  board += "\n";
  console.log(board);
  if (board[0] === " ") board = "#";
  else board = " ";
}

console.log(board);
