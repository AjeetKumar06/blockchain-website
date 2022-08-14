
 let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
  navbar.classList.remove('active');
};




function onInvalid (e) {
  e.target.classList.add('invalid');
}

const form = document.querySelector('form');

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('invalid', onInvalid);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const valid = form.reportValidity();

  
const inputs = [];  
form.querySelectorAll("input").forEach((input) => {  
const { name, value } = input;  
inputs.push({ name, value });  
});  
console.log(inputs);  
form.reset();  
      
})
    