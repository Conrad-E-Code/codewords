let patternPool = [
    'R', 'B', 'R', 'B', 'Y', 'R',
    'B', 'R', 'B', 'Y', 'R', 'B',
    'R', 'B', 'F', 'R', 'B', 'Y',
    'Y', 'Y', 'R', 'B', 'Y', 'Y',
    'K'
  ]
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
console.log(patternPool)
console.log("shuffling")
 shuffleArray(patternPool)
 console.log("shuffled")
 console.log(patternPool)
 console.log("building board")
 let boardPattern = makeBoard(patternPool)
 console.log(boardPattern)
