const Toggle = document.querySelector('.checkbtn');
const nav = document.querySelector('nav ul');

Toggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

var i = 0,
    text;
text = 'WELCOME';

function mengetik() {
    if (i < text.length) {
        document.getElementById('ketik').innerHTML += text.charAt(i);
        i++;
        setTimeout(mengetik, 100)
    }

}
mengetik();