const menu = document.querySelector("#menuHam");
const list = document.querySelector(".listMenu");
 
const inicio = document.querySelector(".inicio");
const mi = document.querySelector(".mi");
const hab = document.querySelector(".hab");
const ser = document.querySelector(".ser");
const por = document.querySelector(".por");
const con = document.querySelector(".con");
 

menu.addEventListener('click', ()=>{
    list.classList.toggle('activar');
})

mi.addEventListener('click', ()=>{
    list.style.display = 'none';
})

hab.addEventListener('click', ()=>{
    list.style.display = 'none';
})
ser.addEventListener('click', ()=>{
    list.style.display = 'none';
})
por.addEventListener('click', ()=>{
    list.style.display = 'none';
})
con.addEventListener('click', ()=>{
    list.style.display = 'none';
})
