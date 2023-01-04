
const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let transactionFormData = new FormData(form);
    let tableref = document.getElementById('table');
    let newRow = tableref.insertRow(-1);
    let newCell = newRow.insertCell(0);

    newCell = newRow.insertCell(1);
    newCell.textContent = transactionFormData.get("name")
    newCell = newRow.insertCell(2);
    newCell.textContent = transactionFormData.get("surname")
    newCell = newRow.insertCell(3);
    newCell.textContent = transactionFormData.get("email")
    newCell = newRow.insertCell(4);
    newCell.textContent = transactionFormData.get("score")

    let newDeleteCell = newRow.insertCell(5);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"
    newDeleteCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", (event) => {
        event.target.parentNode.parentNode.remove()
    })

    let newEditCell = newRow.insertCell(6);
    let editButton = document.createElement("button");
    editButton.textContent = "Edit"
    newEditCell.appendChild(editButton);

    editButton.addEventListener("click", (event) => {
        event.target.parentNode.parentNode.edit()
    })
    form.reset();
})

let focusRow = null;

function edit(td) {
    focusRow = td.parentNode.parentNode;
    textContenttransactionFormData.get("name") = focusRow.cells[0].innerHTML;
    transactionFormData.get('surname') = focusRow.cells[1].innerHTML;
    transactionFormData.get('email') = focusRow.cells[2].innerHTML;
    transactionFormData.get('score') = focusRow.cells[2].innerHTML;
}