function getCombinations(chars) {
  var result = [];
  
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push([...prefix, chars[i]]);
     
      f([...prefix, chars[i]], chars.slice(i + 1));
    }
  }
  f('', chars);
  return result;
}

const generateAnswers = (target) => {
  const validNumbers = values.filter(x => x <= target)
  
  const combinations = getCombinations(validNumbers)
  
  const correct = combinations.filter(
    (x) => {
      return x.reduce(
        (acc, y) => { 
          return acc + y 
        }, 
        0
      ) === target
    }
  )

  return correct
}

const primaryValues = Array(9 - 2).fill(0).map((x, i) => { return i + 2})
const primaryAnswers = Array(35).fill(0).map((x, i) => generateAnswers(primaryValues, i + 1))

const secondaryValues = Array(6 - 2).fill(0).map((x, i) => { return i + 2})
const secondaryAnswers = Array(15).fill(0).map((x, i) => generateAnswers(secondaryValues, i + 1))

module.exports = `
  <h1>Sandwich Sudoku</h1>

  <h2>What is a Sandwich Sudoku</h2>

  <p>Sandwich Sudoku is a Sudoku variant where you are given fewer starting numbers within the grid, but have additional information around the outside of the grid. These additional clues show the sums of the numbers sandwiched between the 1 and the 9 in each given row or column.</p>

  <h2>Articles about Sandwich Sudoku</h2>

  <ul>
    <li><a href="https://www.theguardian.com/science/2019/may/06/can-you-solve-it-sandwich-sudoku-a-new-puzzle-goes-viral">The Guardian introduces Sandiwch Sudoku</a></li>
  </ul>

  <h2>Links to problems</h2>

  <ul>
    <li><a href="https://uploads.guim.co.uk/2019/05/01/Sandwich_sudoku.png">https://uploads.guim.co.uk/2019/05/01/Sandwich_sudoku.png</a> - <a href="https://www.theguardian.com/science/2019/may/06/did-you-solve-it-sandwich-sudoku-a-new-puzzle-goes-viral">Answers</a></li>
  </ul>

  <h2>Cheatsheet</h2>

  <h3>9x9 Sandiwch Sudoku -> 1-9</h3>

  <div class="grid">
    <div class="grid-cell">
      <h4>0</h4>

      <p>The 1 and 9 are adjacent</p>
    </div>

    ${
      () => {
        primaryAnswers.map((answer, i) => {
          return `
            <div class="grid-cell">
              <h4>${i}</h4>

              <ul>
                ${
                  (answer) => { 
                    return answer
                      ? `<li>${answer}</li>`
                      : "<li>None</li>"
                  }
                }
              </ul>
            </div>
          `
        })
      }
    }
  </div>
  
  <h3>6x6 Sandiwch Sudoku -> 1-6</h3>

  <div class="grid">
    <div class="grid-cell">
      <h4>0</h4>

      <p>The 1 and 6 are adjacent</p>
    </div>

    ${
      () => {
        secondaryAnswers.map((answer, i) => {
          return `
            <div class="grid-cell">
              <h4>${i}</h4>

              <ul>
                ${
                  (answer) => { 
                    return answer
                      ? `<li>${answer}</li>`
                      : "<li>None</li>"
                  }
                }
              </ul>
            </div>
          `
        })
      }
    }
  </div>
`