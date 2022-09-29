let awan = document.getElementById('awanawanan');
let begron = document.getElementById('begron');
let pesawat = document.getElementById('pesawat');
let text = document.getElementById('text');
let button = document.getElementById('button');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    awan.style.left = value * 0.25 + 'px';
    pesawat.style.top = value * -0.5 + 'px';
    text.style.marginBottom = value * 1.05 + 'px';
    button.style.marginBottom = value * 1.05 + 'px';
});