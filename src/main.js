const btnSubmit = document.getElementById('btn-submit');
const inputVacio = document.getElementById('input-vacio');
const data = document.getElementById("detail-container");
let pruebaContainer = document.getElementById('detail-add-container');

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
            <label>${estudiante.student}</label>
                <label>${estudiante.book}</label>
                <label>${estudiante.checkout}</label>
                <label>${estudiante.checkin}</label>
            </div>
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
        <label>${student}</label>
        <label>${book}</label>
        <label>${checkout}</label>
        <label>${checkin}</label>
    </div>
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

