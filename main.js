const span = document.querySelector('nav .hamburger')
const navslide = document.querySelector('.navslide')

span.addEventListener('click', function() {
   navslide.classList.toggle('hidden')
})

const cls = document.querySelectorAll('.navslide ul li')
cls.forEach( list => {
   list.addEventListener('click', function() {
      navslide.classList.toggle('hidden')
   })
})

