const form = document.querySelector('form');
const error_msg = document.querySelector('form span')
const dismiss =  document.querySelector('.dismiss');
const main = document.querySelector('main');
const success = document.querySelector('.success');
const dismiss2 = document.querySelector('.dismiss-i');

let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
form.addEventListener('keyup', (e)=>{


   console.log(pattern.test(form.email.value))
 
   if(!pattern.test(form.email.value)){
      form.email.classList.add('invalid-input')
      error_msg.classList.add('invalid-text')
   }
   else{
    form.email.classList.remove('invalid-input')
    error_msg.classList.remove('invalid-text')
   }
})


form.addEventListener('submit', (e)=>{
   e.preventDefault();

   if(form.email.value != '' && pattern.test(form.email.value) ){
   main.style.display='none';
   success.style.display='flex';
   form.email.value="";
   }
})

dismiss.addEventListener('click', ()=>{
   main.style.display='flex';
   success.style.display='none';
})

dismiss2.addEventListener('click', ()=>{
   main.style.display='flex';
   success.style.display='none';
})
