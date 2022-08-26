let icon = document.querySelector('.icon')

function darkTheme(){
  icon.addEventListener('click' , () => {
     document.body.classList.toggle('dark')
  })
}

darkTheme()