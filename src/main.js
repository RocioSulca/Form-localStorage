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
    const data = document.getElementById("data");
    // data.innerHTML += `
    // <table>
    //     <tbody>
    //         <tr>
    //             <td class='probando'>Nombre</td>
    //             <td>${fname}</td>
    //         </tr>
    //         <tr>
    //             <td>Apellido</td>
    //             <td>${lname}</td>
    //         </tr>
    //         <tr>
    //             <td>Email</td>
    //             <td>${email}</td>
    //         </tr>
    //         <tr>
    //             <td>Contraseña</td>
    //             <td>${passwrd}</td>
    //         </tr>
    //     </tbody>
    // </table>
    
    // `;
    data.innerHTML += `
    <div class="control-prueba">
        <label>${fname}</label>
        <label>${lname}</label>
        <label>${email}</label>
        <label>${passwrd}</label>
    </div>
    `;
}

