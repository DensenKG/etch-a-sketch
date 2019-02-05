const container = document.querySelector('#container');
let numRows = 16;
let numColumns = numRows;
document.body.onload = createGrid;

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
