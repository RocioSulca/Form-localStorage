const registro = e => {
    let formData = {
        student: document.getElementById('student').value,
        book: document.getElementById('book').value,
        checkout: document.getElementById('checkout').value,
        checkin: document.getElementById('checkin').value,
    }

    localStorage.setItem('formData', JSON.stringify(formData));
    student.value="";
    book.value="";
    checkout.value="";
    checkin.value="";
    getData();
    e.preventDefault();
}


function getData() {
    let { student, book, checkout, checkin } = JSON.parse(localStorage.getItem("formData"));
    const data = document.getElementById("detalle-desktop");
    const dataMobile = document.getElementById("detalle-mobile");
    data.innerHTML += `
    <div class="control-prueba">
        <label>${student}</label>
        <label>${book}</label>
        <label>${checkout}</label>
        <label>${checkin}</label>
    </div>
    `;
    dataMobile.innerHTML += `
    <div class="card">
        <div>
            <label class="span-label">Nombre:</label>
            <span>${student}</span>
        </div>
        <div>
            <label class="span-label">Libro:</label>
            <span>${book}</span>
        </div>
        <div>
            <label class="span-label">Fecha entrega:</label>
            <span>${checkout}:</span>
        </div>
        <div>
            <label class="span-label">Fecha salida:</label>
            <span>${checkin}:</span>
        </div>
    </div>`;
}

