const $ = el => document.querySelector(el)

const themeButton = $('#theme')
const menuResp = $('#menu-resp')
const menuNav = $('#menu-nav')
const menuButton = $('#menu-button')
const copy = $('#copy')

const year = Date().split(" ")[3]
copy.innerText = "© " + year

// Theme restore from cache
const theme = localStorage.getItem("theme")
if (theme === 'dark') {
  document.body.classList.toggle('dark')
  themeButton.src = "./assets/Icons/sun.svg"
}

// Theme button functionality 
themeButton.addEventListener('click', ()=>{
  if (document.body.className === "dark") {
    // Light theme actions
    themeButton.src = "./assets/Icons/moon.svg"
    localStorage.setItem("theme", "light")
  } else {
    // Dark theme actions
    themeButton.src = "./assets/Icons/sun.svg"
    localStorage.setItem("theme", "dark")
  }

  document.body.classList.toggle('dark')
})

// Menu functionality
menuButton.addEventListener('click', ()=>{
  menuNav.style.animation = "show-menu 300ms backwards ease-in"
  menuResp.style.display = "block"
})

menuResp.addEventListener('click', ()=>{
  menuNav.style.animation = "hidde-menu 300ms backwards ease-in"

  setTimeout(()=>{
    menuResp.style.display = "none"
  },300)
})