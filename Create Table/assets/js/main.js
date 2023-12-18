let myBtn = document.querySelector(".myBtn");
let rows = document.querySelector(".rows");
let cols = document.querySelector(".cols");
let tableContainer = document.querySelector(".table-container");

myBtn.addEventListener("click", createTable);
document.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    createTable();
  }
});

function createTable() {
  let rowsValue = rows.value;
  let colsValue = cols.value;
  if (rowsValue && colsValue) {
    tableContainer.innerHTML = "";
    for (let i = 0; i < +rowsValue; ++i) {
      let tr = document.createElement("tr");
      for (let j = 0; j < +colsValue; ++j) {
        let td = document.createElement("td");
        td.innerText = "Td Item";
        tr.appendChild(td);
        console.log(tr);
      }
      tableContainer.appendChild(tr);
    }
    rows.value = "";
    cols.value = "";
  }
}