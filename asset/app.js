'use strict';

let e= document.getElementById('email').value;
let message = document.getElementById('message');



const checkMail = (mail) => {
    if (mail == "") return false;
    const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    return regex.test(mail);
}

const checkPosition = () => {
    e= document.getElementById('email').value;
    if (checkMail(e) === true) {
            message.innerHTML = '<span class="text-success"> Adresse mail valide  </span>';
    } else {
        message.innerHTML = '<span class="text-danger">Adresse mail invalide ! </span>';   
    } 
}
document.getElementById('email').addEventListener('keyup', checkPosition);