const btnForm = document.getElementById('btn-form');
const cancelBtn = document.getElementById('cancel-btn');
const navToggle = document.querySelector('.nav-toggle');

const form = document.querySelector('.form-bg-blur');
const links = document.querySelector('.links');

btnForm.addEventListener('click',function(){
    form.classList.add('show-login')
})
cancelBtn.addEventListener('click',function(){
    form.classList.remove('show-login')
})

//Nav bar Toggle
navToggle.addEventListener('click', function(){
    links.classList.toggle('show-links')
})
// form.addEventListener('click',function(){
//     form.classList.remove('show-login')
// })

