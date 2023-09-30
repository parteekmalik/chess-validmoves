import findValidMoves from "./components/ValidMovesLogic/findValidMoves"

export * from "./components/ValidMovesLogic/findValidMoves"
const boardData = {
    BoardLayout : 
  [["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
  ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
  ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"]],
  turn : "w",
  movesPlayed : { current: -1, moves: [] },
  iscastle: { b: { King: true, rightRook: true, leftRook: true }, w: { "King": true, "rightRook": true, "leftRook": true } }
}
console.log(findValidMoves(boardData));