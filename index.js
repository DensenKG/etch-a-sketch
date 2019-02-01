const container = document.querySelector('#container');
let totalSquares = 256;
document.body.onload = createGrid;

function createGrid()
{
  for (var i = 0; i < totalSquares; i++)
  {
    var gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    container.appendChild(gridSquare);
  }
}
