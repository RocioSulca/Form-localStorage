const registro = e => {
    let formData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        passwrd: document.getElementById('passwrd').value,
    }

    localStorage.setItem('formData', JSON.stringify(formData));
    fname.value="";
    lname.value="";
    email.value="";
    passwrd.value="";
    getData();
    
    e.preventDefault();
}


function getData() {
    let { fname, lname, email, passwrd } = JSON.parse(localStorage.getItem("formData"));
    const data = document.getElementById("detalle-desktop");
    const dataMobile = document.getElementById("detalle-mobile");
    data.innerHTML += `
    <div class="control-prueba">
        <label>${fname}</label>
        <label>${lname}</label>
        <label>${email}</label>
        <label>${passwrd}</label>
    </div>
    `;
    dataMobile.innerHTML += `
    <div class="card">
        <div>
            <label>Nombre:</label>
            <span>${fname}</span>
        </div>
        <div>
            <label>Libro:</label>
            <span>${lname}</span>
        </div>
        <div>
            <label>Fecha entrega:</label>
            <span>${email}:</span>
        </div>
        <div>
            <label>Fecha salida:</label>
            <span>${passwrd}:</span>
        </div>
    </div>`;
}

