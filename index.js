const container = document.querySelector('#container');
let numRows = 16;
let numColumns = numRows;
let root = document.documentElement.style;
let clearButton = document.getElementById('clear-button');
let resizeButton = document.getElementById('resize-button');
document.body.onload = createGrid;
clearButton.addEventListener("click", clearGrid);
resizeButton.addEventListener("click", resizeGrid);

function createGrid()
{
  for (var i = 0; i < numRows; i++)
  {
    for (var j= 0; j < numColumns; j++)
    {
      var gridSquare = document.createElement("div");
      gridSquare.classList.add("square");
      container.appendChild(gridSquare);
    }
  }
  updateGrid();
}

function updateGrid()
{
  var allSquares = document.querySelectorAll('.square');
  for (var i =0; i<allSquares.length; i++)
  {
    allSquares[i].addEventListener("mouseover", function(){
      this.classList.add('colored');
    });
  }
}

function clearGrid()
{
  var allColoredSquares = document.querySelectorAll('.colored');
  for (var i=0; i<allColoredSquares.length; i++)
  {
    allColoredSquares[i].classList.remove('colored');
  }
}

function resizeGrid()
{
  var newSize = prompt("How many rows (and columns) should there be?", "16");
  while (container.hasChildNodes())
  {
    container.removeChild(container.firstChild);
  }
  numRows = parseInt(newSize);
  numColumns = numRows;
  root.setProperty('--total-rows', numRows);
  createGrid();
}
