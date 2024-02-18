const $ = el => document.querySelector(el)

const themeButton = $('#theme')
const markyImg = $('#marky')
const rmImg = $('#rm')
const theme = localStorage.getItem("theme")

if (theme === 'dark') {
  document.body.classList.toggle('dark')
  themeButton.src = "./assets/Icons/moon.svg"
}

themeButton.addEventListener('click', ()=>{
  if (document.body.className === "dark") {
    themeButton.src = "./assets/Icons/sun.svg"
    markyImg.src = "./assets/Projects/marky.png"
    rmImg.src = "./assets/Projects/rm.png"
    localStorage.setItem("theme", "light")
  } else {
    themeButton.src = "./assets/Icons/moon.svg"
    markyImg.src = "./assets/Projects/marky-dark.png"
    rmImg.src = "./assets/Projects/rm-dark.png"
    localStorage.setItem("theme", "dark")
  }

  document.body.classList.toggle('dark')
})