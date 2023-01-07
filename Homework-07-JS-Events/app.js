let rows = document.getElementById("row");
let columns = document.getElementById("column");
let table = document.getElementById("table");

function createTable() {
  let rowNumber = rows.value;
  let columnNumber = columns.value;
  table.innerHTML += "";
  for (let r = 0; r < rowNumber; r++) {
    let newRow = document.createElement("tr");
    for (let c = 0; c < columnNumber; c++) {
      let newColumn = document.createElement("td");
      newColumn.innerText = `Row: ${r + 1} Colunm: ${c + 1}`;
      newRow.appendChild(newColumn);
    }
    table.appendChild(newRow);
  }
}

rows.addEventListener("input", createTable);
columns.addEventListener("input", createTable);