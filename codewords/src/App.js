import logo from './logo.svg';
import './App.css';
import WordCard from "./components/WordCard"
import Playboard from './components/PlayBoard';

function App() {
  // blue team gets 8 cards
  //red team gets 8 cards
  //one extra card for the team that goes first
  // one card that loses the game.
  // R = red B = blue Y = neutral K = lose card
  // game is divided into two teams of two or more people.
  // 1 person from each team is a caller who calls out one word clues to select the words
  // only callers get to see the pattern.
  // the pattern is behind the words.

  let pattern = [
    ["R","B","R","B","Y"],
    ["R","B","R","B","Y"],
    ["R","B","R","B","F"],
    ["R","B","Y","Y","Y"],
    ["R","B","Y","Y","K"]
  ]
  //randomize pattern at beginnning of game.
  let patternPool = [
    'R', 'B', 'R', 'B', 'Y', 'R',
    'B', 'R', 'B', 'Y', 'R', 'B',
    'R', 'B', 'F', 'R', 'B', 'Y',
    'Y', 'Y', 'R', 'B', 'Y', 'Y',
    'K'
  ]
//   function newPattern(patternPool) {
//     for (var i = patternPool.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
function makeBoard(array) {
  // make this into a better algorithm using a two idx counters that increment by 5
  let firstRow = array.slice(0,5)
  let secRow = array.slice(5,10)
  let thirdRow = array.slice(10,15)
  let fourthRow = array.slice(15,20)
  let lastRow = array.slice(20,25)
  return [
      firstRow,
      secRow,
      thirdRow,
      fourthRow,
      lastRow
  ]
}




shuffleArray(patternPool)
let renderPool = patternPool.map((letter)=>{
  return(<WordCard letter={letter} />)
})
let board = makeBoard(renderPool)
// console.log(board)
// let renderedBoard = board.forEach((line) => {
// //console.log(line)
// line.forEach((letter)=>{
//   //console.log(letter)
//   return(<WordCard letter={letter}/>)
// })

// })
  return (
    <div className="App">
      <Playboard board={board} />
      
    </div>
  );
}

export default App;
