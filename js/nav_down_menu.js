let signInBlock = document.getElementById('sing_in_a_id');
let menu = document.getElementById('menu');
let signInOrSignOut = document.getElementById('');


signInBlock.addEventListener('mouseover', () => {
    menu.classList.add('active')
})


menu.addEventListener('mouseleave', () => {
    menu.classList.remove('active')
})

signInBlock.addEventListener('click', e => {
    e.preventDefault()
    menu.classList.add('active')
})