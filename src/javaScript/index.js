
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

    let newDeleteCell = newRow.insertCell(4);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar"
    newDeleteCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", (event) => {
        event.target.parentNode.parentNode.remove()
    })
})