let icon = document.querySelector('.icon')

function darkTheme(){
  icon.addEventListener('click' , () => {
     document.body.classList.add('dark')
  })
  icon.addEventListener('dblclick' ,() => {
    document.body.classList.remove('dark')
  })
}

darkTheme()