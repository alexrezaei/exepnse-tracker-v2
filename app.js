const expenseForm = document.querySelector("#expenseform")
const table = document.querySelector("#expensetable")
const innerForm = document.querySelector("#innerform")
const expenses = []
let row = 1;

expenseForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // userinput placed in a object
    let expense = {
        location: document.querySelector("#location").value,
        date: document.querySelector("#date").value,
        amount: document.querySelector("#amount").value
    }
    // checks if all the inputs are filled.
    wrongInput()
    expenses.push(expense);
    document.querySelector("form").reset()
    createRow()
})

const createRow = () => {
    //creates new cells and a row 
    let newRow = table.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2)
    let cell4 = newRow.insertCell(3)
    // exctracts values from row array and places them onto cells
    // and loops through array 
    for(var j = 0; j <expenses.length; j++){  
    cell1.innerHTML = expenses.map(a => a.location)[j]
    cell2.innerHTML = expenses.map(a => a.date)[j]
    cell3.innerHTML = expenses.map(a => a.amount)[j];
    cell4.innerHTML = `<button type="button" class="deleteBtn">
    x
  </button>`;
    }
    row++;
}

const wrongInput = function () {
    let location = document.querySelector("#location").value;
    let date = document.querySelector("#date").value;
    let amount = document.querySelector("#amount").value;
    if(!location || !date || !amount){
        alert(" OY! ya  chekky cunt fill out me form")
        return
    }
}
function onDeleteRow(e) {
    if (!e.target.classList.contains("deleteBtn")){
        return; 
    }
    const btn = e.target;
    btn.closest("tr").remove();
}

table.addEventListener("click", onDeleteRow)
