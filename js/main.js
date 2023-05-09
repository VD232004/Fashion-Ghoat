const search = document.querySelector('#search');
const close = document.querySelector('#close');
const ul = document.querySelector('.nav-li ul');
const input = document.querySelector('.input-search');

search.onclick = ()=>{
    ul.style.display = "none";
    input.style.display = "flex";
};

close.onclick = ()=>{
    ul.style.display = "flex";
    input.style.display = "none";
}