const btnSubmit = document.getElementById('btn-submit');
const inputVacio = document.getElementById('input-vacio');
const data = document.getElementById("detail-container");
let pruebaContainer = document.getElementById('detail-add-container');
let tableContainer = document.getElementById('table-container');

const registro = e => {
    let formData = {
        student: document.getElementById('student').value,
        book: document.getElementById('book').value,
        checkout: document.getElementById('checkout').value,
        checkin: document.getElementById('checkin').value,
    }
    let arrayVacio = JSON.parse(localStorage.getItem("formData")) || [];
    arrayVacio.push(formData);
    localStorage.setItem('formData', JSON.stringify(arrayVacio));
    getData();
    student.value = "";
    book.value = "";
    checkout.value = "";
    checkin.value = "";
}


document.addEventListener("DOMContentLoaded", function () {
    
    let datosPreCargados = JSON.parse(localStorage.getItem("formData"));
    if (datosPreCargados) {
        datosPreCargados.forEach(estudiante => {
            data.innerHTML += `
            <div class="control-prueba">
                <label>Nombre: ${estudiante.student}</label>
                <label>Libro: ${estudiante.book}</label>
                <label>Fecha salida: ${estudiante.checkout}</label>
                <label>Fecha entrada: ${estudiante.checkin}</label>
            </div>
        `;
        tableContainer.innerHTML += `
        <tr class="control-prueba-1">
            <td> ${estudiante.student}</td>
            <td> ${estudiante.book}</td>
            <td> ${estudiante.checkout}</td>
            <td> ${estudiante.checkin}</td>
        </tr>
    `;
        })
    }
})


function getData() {

    let student = document.getElementById('student').value;
    let book = document.getElementById('book').value;
    let checkout = document.getElementById('checkout').value;
    let checkin = document.getElementById('checkin').value;

    pruebaContainer.innerHTML += `
        <div class="control-prueba">
            <label>Nombre: ${student}</label>
            <label>Libro: ${book}</label>
            <label>Fecha salida: ${checkout}</label>
            <label>Fecha entrada: ${checkin}</label>
        </div>
    `;
    tableContainer.innerHTML += `
        <tr class="control-prueba-1">
            <td> ${estudiante.student}</td>
            <td> ${estudiante.book}</td>
            <td> ${estudiante.checkout}</td>
            <td> ${estudiante.checkin}</td>
        </tr>
    `;
}


btnSubmit.addEventListener('click', function (e) {
    if (student.value.length == 0 || book.value.length == 0 || checkout.value.length == 0 || checkin.value.length == 0) {
        inputVacio.innerHTML = `
        <div>Debes rellenar todos los campos</div>
        `
    } else {
        inputVacio.innerHTML = '';
        registro();
    }
    e.preventDefault();
})

