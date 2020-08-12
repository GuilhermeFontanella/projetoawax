function menuopen() {
    let status = document.querySelector('.menu-open');

    if (status.classList.contains('open') == true) {
        status.classList.remove('open');
    } else {
        status.classList.add('open');
    }
}