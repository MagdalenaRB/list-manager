
const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let transactionFormData = new FormData(form);
    let tableref = document.getElementById('table');
    let newRow = tableref.insertRow(-1);
    let newCell = newRow.insertCell(0);

    newCell = newRow.insertCell(1);
    newCell.textContent = "1"
    newCell = newRow.insertCell(2);
    newCell.textContent = "2"
    newCell = newRow.insertCell(3);
    newCell.textContent = "3"
})