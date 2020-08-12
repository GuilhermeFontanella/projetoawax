function menuopen() {
    let status = document.querySelector('.menu-open');

    if (status.classList.contains('open') == true) {
        status.classList.remove('open');
    } else {
        status.classList.add('open');
    }
}


function recebeEmail() {
    let user = document.querySelector('#userEmail').value;

    alert(`Obrigado! enviaremos nossas melhores ofertas para: ${user} `)

    console.log(user);
}


function recebeContato() {
    let usuario = {
        nome: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        assunto: document.querySelector('#subject').value,
        mensagem: document.querySelector('#mensagem').value
    };

    console.log(usuario);
}