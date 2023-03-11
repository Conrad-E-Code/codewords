import logo from './logo.svg';
import './App.css';

function App() {
  // blue team gets 8 cards
  //red team gets 8 cards
  //one extra card for the team that goes first
  // one card that loses the game.
  // R = red B = blue Y = neutral K = lose card
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
//   function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }
  return (
    <div className="App">

    </div>
  );
}

export default App;
