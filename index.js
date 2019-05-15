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

  <h4>0</h4>

  <p>The 1 and 9 are adjacent</p>

  <h4>2</h4>

  <ul>
    <li>2</li>
  </ul>

  <h4>3</h4>

  <ul>
    <li>3</li>
  </ul>

  <h4>4</h4>

  <ul>
    <li>4</li>      
  </ul>

  <h4>5</h4>

  <ul>
    <li>2, 3</li>
    <li>5</li>
  </ul>

  <h4>6</h4>

  <ul>
    <li>2, 4</li>
    <li>6</li>
  </ul>

  <h4>7</h4>

  <ul>
    <li>2, 5</li>
    <li>3, 4</li>
    <li>7</li>
  </ul>

  <h4>8</h4>

  <ul>
    <li>2, 6</li>
    <li>3, 5</li>
    <li>8</li>
  </ul>

  <h4>9</h4>

  <ul>
    <li>2, 3, 4</li>
    <li>2, 7</li>
    <li>3, 6</li>
    <li>4, 5</li>
    <li>9</li>
  </ul>

  <h4>10</h4>

  <ul>
    <li>2, 3, 5</li>
    <li>2, 8</li>
    <li>3, 7</li>
    <li>4, 6</li>
  </ul>

  <h4>11</h4>

  <ul>
    <li>2, 3, 6</li>
    <li>2, 4, 5</li>
    <li>3, 8</li>
    <li>4, 7</li>
    <li>5, 6</li>
  </ul>

  <h4>12</h4>

  <ul>
    <li>2, 3, 7</li>
    <li>2, 4, 6</li>
    <li>4, 8</li>
    <li>5, 7</li>
  </ul>

  <h4>13</h4>

  <ul>
    <li>2, 3, 8</li>
    <li>2, 4, 7</li>
    <li>2, 5, 6</li>
    <li>3, 4, 6</li>
    <li>6, 7</li>
  </ul>

  <h4>14</h4>

  <ul>
    <li>2, 3, 4, 5</li>
    <li>2, 4, 8</li>
    <li>2, 5, 7</li>
    <li>3, 4, 7</li>
    <li>3, 5, 6</li>
    <li>6, 8</li>
  </ul>

  <h4>15</h4>

  <ul>
    <li>2, 3, 4, 6</li>
    <li>3, 4, 8</li>
    <li>3, 5, 7</li>
    <li>4, 5, 6</li>
  </ul>

  <h4>16</h4>

  <ul>
    <li>2, 3, 4, 7</li>
    <li>2, 3, 5, 6</li>
    <li>3, 5, 8</li>
    <li>3, 6, 7</li>
    <li>4, 5, 7</li>
  </ul>

  <h4>17</h4>

  <ul>
    <li>2, 3, 4, 8</li>
    <li>2, 3, 5, 7</li>
    <li>3, 6, 8</li>
    <li>4, 5, 8</li>
    <li>4, 6, 7</li>
  </ul>

  <h4>18</h4>

  <ul>
    <li>2, 3, 5, 8</li>
    <li>2, 4, 5, 7</li>
    <li>3, 7, 8</li>
    <li>4, 6, 8</li>
    <li>5, 6, 7</li>
  </ul>

  <h4>19</h4>

  <ul>
    <li>2, 3, 6, 8</li>
    <li>2, 4, 5, 8</li>
    <li>3, 4, 5, 7</li>
    <li>4, 7, 8</li>
    <li>5, 6, 8</li>
  </ul>

  <h4>20</h4>

  <ul>
    <li>2, 3, 4, 5, 6</li>
    <li>3, 4, 5, 8</li>
    <li>3, 4, 6, 7</li>
    <li>5, 7, 8</li>
  </ul>

  <h4>21</h4>

  <ul>
    <li>2, 3, 4, 5, 7</li>
    <li>3, 4, 6, 8</li>
    <li>3, 5, 6, 7</li>
    <li>6, 7, 8</li>
  </ul>

  <h4>22</h4>

  <ul>
    <li>2, 3, 4, 5, 8</li>
    <li>2, 3, 4, 6, 7</li>
    <li>2, 5, 7, 8</li>
    <li>3, 4, 7, 8</li>
    <li>3, 5, 6, 8</li>
  </ul>

  <h4>23</h4>

  <ul>
    <li>2, 3, 4, 6, 8</li>
    <li>2, 3, 5, 6, 7</li>
    <li>2, 6, 7, 8</li>
    <li>3, 5, 7, 8</li>
    <li>4, 5, 6, 8</li>
  </ul>

  <h4>24</h4>

  <ul>
    <li>2, 3, 4, 7, 8</li>
    <li>2, 3, 5, 6, 8</li>
    <li>3, 6, 7, 8</li>
  </ul>

  <h4>25</h4>

  <ul>
    <li>2, 3, 5, 7, 8</li>
    <li>2, 4, 5, 6, 8</li>
    <li>3, 4, 5, 6, 7</li>
    <li>4, 6, 7, 8</li>
  </ul>

  <h4>26</h4>

  <ul>
    <li>2, 3, 6, 7, 8</li>
    <li>2, 4, 5, 7, 8</li>
    <li>3, 4, 5, 6, 8</li>
    <li>5, 6, 7, 8</li>
  </ul>

  <h4>27</h4>

  <ul>
    <li>2, 3, 4, 5, 6, 7</li>
    <li>3, 4, 5, 7, 8</li>
  </ul>

  <h4>28</h4>

  <ul>
    <li>2, 3, 4, 5, 6, 8</li>
    <li>3, 4, 6, 7, 8</li>
  </ul>

  <h4>29</h4>

  <ul>
    <li>2, 3, 4, 5, 7, 8</li>
    <li>3, 5, 6, 7, 8</li>
  </ul>

  <h4>30</h4>

  <ul>
    <li>2, 3, 4, 6, 7, 8</li>
    <li>4, 5, 6, 7, 8</li>
  </ul>

  <h4>31</h4>

  <ul>
    <li>2, 3, 5, 6, 7, 8</li>
  </ul>

  <h4>32</h4>

  <ul>
    <li>2, 4, 5, 6, 7, 8</li>
  </ul>

  <h4>33</h4>

  <ul>
    <li>3, 4, 5, 6, 7, 8</li>
  </ul>

  <h4>35</h4>

  <ul>
    <li>2, 3, 4, 5, 6, 7, 8</li>
  </ul>

  <h3>6x6 Sandiwch Sudoku -> 1-6</h3>

  <h4>0</h4>

  <p>The 1 and 6 are adjacent</p>

  <h4>2</h4>

  <ul>
    <li>2</li>
  </ul>

  <h4>3</h4>

  <ul>
    <li>3</li>
  </ul>

  <h4>4</h4>

  <ul>
    <li>4</li>
  </ul>

  <h4>5</h4>

  <ul>
    <li>2, 3</li>
    <li>5</li>
  </ul>

  <h4>6</h4>

  <ul>
    <li>2, 4</li>
    <li>6</li>
  </ul>

  <h4>7</h4>

  <ul>
    <li>2, 5</li>
    <li>3, 4</li>
  </ul>

  <h4>8</h4>

  <ul>
    <li>3, 5</li>
  </ul>

  <h4>9</h4>

  <ul>
    <li>2, 3, 4</li>
    <li>4, 5</li>
  </ul>

  <h4>10</h4>

  <ul>
    <li>2, 3, 5</li>
  </ul>

  <h4>11</h4>

  <ul>
    <li>2, 4, 5</li>
  </ul>

  <h4>14</h4>

  <ul>
    <li>2, 3, 4, 5</li>
  </ul>
`